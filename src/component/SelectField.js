import React from "react";
import Select, { components } from "react-select";

const styles = {
  option: (styles, state) => {
    //   console.log(state);
    return {
      ...styles,
      backgroundColor: state.isFocused ? '#f2f2f2 !important' : '#fff !important'
    };
  }
};

const Option = props => {
//   console.log("props", props);
  return (
    <div>
      <components.Option {...props}>
        <div
          style={{
            color: "#2a2a2a",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>{props.data.label}</div>
          <div>
            {props.isSelected ? (
              <i className="material-icons" style={{ color: '#d98100' }}>check_box</i>
            ) : (
              <i className="material-icons">check_box_outline_blank</i>
            )}
          </div>
        </div>
      </components.Option>
    </div>
  );
};

const SelectField = props => {
  return (
    <div>
      <label htmlFor={props.label} className="furniture-select-label">
        {props.label}
      </label>
      <Select
        value={props.value}
        components={{ Option }}
        options={props.options}
        placeholder={props.placeholder}
        onChange={newValue => props.onChange(newValue)}
        styles={styles}
        isMulti
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
      />
    </div>
  );
};

export default SelectField;
