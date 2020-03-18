const priceFormat = price => {
    return parseFloat(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };
  
  export default priceFormat;
  