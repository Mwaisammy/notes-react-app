import React, { useState } from "react";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";

const ColorPalete = () => {
  const [selectedColor, setSelectedColor] = useState("#ccc");
  return (
    <div>
      <CirclePicker
        color={selectedColor}
        onChangeComplete={(color) => setSelectedColor(color.hex)}
      />
      <div></div>
    </div>
  );
};

export default ColorPalete;
