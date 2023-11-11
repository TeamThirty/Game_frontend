import { useColor } from "../../store/color";

import { HuePicker } from "react-color";

const ColorPicker = () => {
  const { changeColor, activeModel } = useColor();

  return <HuePicker onChange={changeColor} color={activeModel?.color} />;
};

export default ColorPicker;
