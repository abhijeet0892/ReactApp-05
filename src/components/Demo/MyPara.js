import React from "react";

const MyPara = (props) => {
  console.log("MyPara Running");
  return <p>{props.childern}</p>;
};

export default MyPara;
