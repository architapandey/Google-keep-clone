import React from "react";
import { ColorPickerContainer } from "../styles";

const ColorPicker = ({ selectedColor, onSelectColor }) => {
  const colors = ["#e8e8e8", "#ffcccb", "#ffd700", "#98fb98", "#dda0dd"];

  return (
    <ColorPickerContainer>
      {colors.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
            border: color === selectedColor ? "2px solid black" : "none",
          }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </ColorPickerContainer>
  );
};

export default ColorPicker;
