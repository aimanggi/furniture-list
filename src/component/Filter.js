/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SelectField from "./SelectField";

const deliveryOptions = [
  {
    label: "1 Week",
    value: 7
  },
  {
    label: "2 Weeks",
    value: 14
  },
  {
    label: "1 Month",
    value: 30
  },
  {
    label: "More",
    value: 31
  }
]

const Filter = props => {
  const [state, setState] = useState({
    searchTerm: "",
    furnitureStyle: null,
    deliveryTime: null,
    name: ""
  });

  // Call callback function if filter or search value change
  useEffect(() => {
    props.filterProduct("filter", {
        furnitureStyle: state.furnitureStyle
          ? state.furnitureStyle.map(data => data.value)
          : [],
        deliveryTime: state.deliveryTime
          ? state.deliveryTime.map(data => data.value)
          : []
      });

      if(state.searchTerm) {
        props.filterProduct("search", state.searchTerm);
    }
  }, [state.furnitureStyle, state.deliveryTime, state.searchTerm]);


  const onChangeFilter = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="furniture-filter">
      <div className="furniture-container">
        <input
          placeholder="Search Furniture"
          className="furniture-input"
          value={state.searchTerm}
          onChange={e => onChangeFilter(e.target.value, "searchTerm")}
        />

        <div className="furniture-row" style={{ padding: "32px 0px" }}>
          <div className="furniture-col" style={{ marginBottom: 16 }}>
            <SelectField
              placeholder="Furniture Style"
              options={props.filterStyle}
              onChange={value => onChangeFilter(value, "furnitureStyle")}
            />
          </div>
          <div className="furniture-col">
            <SelectField
              placeholder="Delivery Time"
              options={deliveryOptions}
              onChange={value => onChangeFilter(value, "deliveryTime")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
