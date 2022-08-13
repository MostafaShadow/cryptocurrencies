import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./coins.module.css";
const InputSearch = ({ searchTerm, setSearchTerm }) => {
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // remove search value
  const removeInputValue = () => {
    setSearchTerm("");
  };
  return (
    <div className={styles.input_container}>
      <input value={searchTerm} onChange={onChange} />
      <button className="button_icon" onClick={removeInputValue}>
        <CloseOutlined className={styles.icon_close} />
      </button>
    </div>
  );
};

export default InputSearch;
