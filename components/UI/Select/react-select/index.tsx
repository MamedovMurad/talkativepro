import React from "react";
import Select from "react-select";
const customStyles = {
    menuList: (styles: any) => ({
      ...styles,
      background: "#fff",
    }),
    option: (styles: any, { isFocused, isSelected }: any): any => ({
      ...styles,
      background: isFocused ? "#E6F9FC" : isSelected ? "#00C1DD" : undefined,
      zIndex: 1,
    }),
    multiValueLabel: (styles: any, { data }: any) => ({
      ...styles,
      background: "#E6F9FC",
      color: "#00C1DD",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
      ...styles,
      background: "#E6F9FC",
      color: "#00C1DD",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      borderRadius: "4px",
      display: "flex",
      width: 100,
      border: "1px solid #f6f6f6",
      height: "56px",
      aliginItems: "center",
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
  
      return { ...provided, opacity, transition };
    },
  };
const ReactSelect = ({options=[], setactiveEl,activeEl={}}:any) => {
  return  <Select
            options={options}
            styles={customStyles}
            value={activeEl}
            onChange={setactiveEl}
          />;
};

export default ReactSelect;
