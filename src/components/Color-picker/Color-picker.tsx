import { useState } from "react";

import { ChromePicker, ColorResult, ColorChangeHandler } from "react-color";

const ColorPicker = () => {
  const [color, changeColor] = useState<string>();

  const handleChangeComplete: ColorChangeHandler = (color: ColorResult) => {
    changeColor(color.hex);
  };
  return <ChromePicker onChangeComplete={handleChangeComplete} color={color} />;
};

export default ColorPicker;
