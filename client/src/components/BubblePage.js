import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
      axiosWithAuth().get("http://localhost:5000/api/colors")
      .then(res => setColorList(res.data));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles style={{display: 'flex'}} colors={colorList } />
    </>
  );
};

export default BubblePage;