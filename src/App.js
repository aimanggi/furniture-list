/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./assets/scss/style.scss";
import Filter from "./component/Filter";
import axios from "axios";
import priceFormat from "./helper/priceFormat";
import Loading from "./component/Loading";

const url = "https://www.mocky.io/v2/5c9105cb330000112b649af8";

function App() {
  const [state, setState] = useState({
    filterStyle: [],
    product: [],
    allProducts: [],
    searchTerm: "",
    loading: true
  });

  // Fetch Data form API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);

        if (response) {
          console.log(response);
          setState({
            ...state,
            filterStyle: response.data.furniture_styles.map(style => {
              return {
                label: style,
                value: style
              };
            }),
            loading: false,
            product: response.data.products,
            allProducts: response.data.products
          });
        } else {
          const error = "Internal Server Error. Please Try Again.";
          throw error;
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  const filterFunction = (filter, data) => {
    let filteredStyle = [];
    let filteredDeliveryTime = [];

    // Filter by Furniture Styles
    data.map(product => {
      const checkStyle = product.furniture_style.map(style => {
        if (filter.furnitureStyle.includes(style)) {
          return filteredStyle.push(product);
        }
        return null;
      });
      return checkStyle;
    });

    // Filter by Delivery Time Within Certain Period
    let dataForDelivery = [];
    if (filteredStyle.length) {
      dataForDelivery = filteredStyle;
    } else {
      dataForDelivery = state.allProducts;
    }

    dataForDelivery.map(product => {
      const time = parseInt(product.delivery_time);
      const deliveryDuration = filter.deliveryTime.map(f => {
        console.log("f", f);
        if (f === 7) {
          return 8 > time && (time < 7 || time === 7);
        } else if (f === 14) {
          return 15 > time && time > 7 && (time < 14 || time === 14);
        } else if (f === 30) {
          return 31 > time && time > 14 && (time < 30 || time === 30);
        } else if (f > 30) {
          return time > 30 && 29 < time;
        }

        return false;
      });

      if (deliveryDuration.filter(x => x === true).length) {
        return filteredDeliveryTime.push(product);
      }

      return null;
    });

    setState({
      ...state,
      product: filter.deliveryTime.length
        ? [...new Set(filteredDeliveryTime)]
        : [...new Set(filteredStyle)]
    });
  };

  const checkFilterOrSearch = (type, filter) => {
    if (type === "filter" || (type === "search" && filter === "")) {
      if (filter.deliveryTime.length || filter.furnitureStyle.length) {
        filterFunction(filter, state.allProducts);
      } else {
        setState({
          ...state,
          product: state.allProducts
        });
      }
    } else {
      if (state.allProducts.length !== state.product) {
        const filtered = state.product.filter(val =>
          val.name.toLowerCase().includes(filter.toLowerCase())
        );
        setState({
          ...state,
          searchTerm: filter,
          product: filtered
        });
      } else {
        const filtered = state.product.filter(val =>
          val.name.toLowerCase().includes(filter.toLowerCase())
        );
        setState({
          ...state,
          searchTerm: filter,
          product: filtered
        });
      }
    }
  };

  console.log("app state", state);
  return (
    <div className="">
      <Filter
        filterStyle={state.filterStyle}
        filterProduct={checkFilterOrSearch}
      />
      {state.loading ? (
        <Loading />
      ) : (
        <div className="furniture-container" style={{ paddingTop: 32 }}>
          <div className="furniture-row">
            {state.product.map(data => {
              return (
                <div
                  className="furniture-col "
                  key={data.name}
                  style={{ marginBottom: 16 }}
                >
                  <div className="furniture-card">
                    <div className="furniture-card__title">
                      <div className="furniture-card__name">{data.name}</div>
                      <div className="furniture-card__price">
                        {priceFormat(data.price)}
                      </div>
                    </div>

                    <div className="furniture-card__description">
                      {data.description.length > 144
                        ? `${data.description.substring(0, 144)}...`
                        : data.description}
                    </div>

                    <div className="furniture-card__style">
                      <i className="material-icons">local_offer</i>
                      {data.furniture_style.join(", ")}
                    </div>

                    <div className="furniture-card__delivery">
                      <i className="material-icons">access_time</i>
                      {data.delivery_time} hari pengiriman
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
