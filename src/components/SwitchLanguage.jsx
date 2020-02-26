import React from "react";

export const SwitchLanguage = ({ onChange }) => {

  return (
    <div>
      <select onChange={onChange}>
        <option value="es" key="es-key">ES</option>
        <option value="en" key="en-key">EN</option>
      </select>
    </div>
  );

};
