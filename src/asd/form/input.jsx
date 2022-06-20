import React from "react";

function Input({ label, name }) {
  return (
    <div>
      <label for={name}></label>
      <input name={name} type="text" />
    </div>
  );
}

export default Input;
