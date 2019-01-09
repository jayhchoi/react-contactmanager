import React from "react";

const TextInputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        <input
          className={`form-control form-control-lg ${
            error !== "" && value === "" ? "is-invalid" : ""
          } ${value === "" ? "" : "is-valid"}`}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="nope"
        />
      </div>
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
