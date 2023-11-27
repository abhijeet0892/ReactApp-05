import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <MyPara>{props.show ? "This is new!" : ""}</MyPara>;
};

export default React.memo(DemoOutput);

//the memo method here tells react thet whwnever the app component chenged, it should go to pesent component and compare the new prop values to the previous prop values, so there for react needs to do two things. It needs to store previous prop values, and it needs to make that comparison
