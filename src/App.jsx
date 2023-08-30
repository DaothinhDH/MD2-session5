import { useState } from "react";
import "./App.css";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import React, { useMemo } from "react";
import { Button, Divider, Space, notification } from "antd";
import Exercise_B1 from "./components/Baitap/Exercise_B1";
import Header from "./components/Baitap/Header";
import Exercise_B2 from "./components/baitap2/Exercise_B2";
import Exercise_B3 from "./components/baitap3/Exercise_B3";
import Exercise_Bt4 from "./components/baitap4/Exercise_Bt4";
const Context = React.createContext({
  name: "Default",
});

function App() {
  return (
    <>
      
      {/* <Exercise_B1/> */}
      {/* <Exercise_B2 /> */}
      {/* <Exercise_B3/> */}
      <Exercise_Bt4/>
      
    </>
  );
}

export default App;
