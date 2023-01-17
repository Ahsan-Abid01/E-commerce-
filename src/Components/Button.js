import React from "react";
const Button = ({ btnText, btnBG }) => {
  const styles = {
    height: "45px",
    padding: "5px 20px",
    width: "200px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "50px",
    color: "#fff",
    background: btnBG,
  };
  return <button style={styles}>{btnText}</button>;
};

export default Button;
