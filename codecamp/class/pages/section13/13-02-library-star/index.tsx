import React, { useState } from "react";
import { Rate } from "antd";

const App: React.FC = () => {
  const [value, setValue] = useState(3);
  const onChangeStar = (value: number): void => {
    setValue(value);
  };

  return <Rate onChange={onChangeStar} value={value} />;
};

export default App;
