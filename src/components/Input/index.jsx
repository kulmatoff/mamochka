import { useState } from "react";
import "./index.css"

export function Input(props) {
  const { danger, size = "md", label, placeholder, children } = props;
  const className = `${danger ? "input--danger" : ""}`;
  console.log(className);
  return (
    <div className="input">
      <label>{label}</label>
      <br />
      <input className={className} placeholder={placeholder}>
        {children}
      </input>
    </div>
  );
}
