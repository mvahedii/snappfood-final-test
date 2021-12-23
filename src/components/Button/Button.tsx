import React from "react";
import { ButtonType } from "../../types/button";
import "./style.scss";

export const Button: React.FC<ButtonType> = (props) => {
  return (
    <a onClick={props.onClick} className="button">
      <span>{props.label}</span>
    </a>
  );
};
