import React from "react";

export default function InputField({
  htmlFor,
  labelText,
  inputType = "text",
  id,
  value,
  onChange,
  placeholder,
  required = false,
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {labelText}
      </label>

      <input
        type={inputType}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        {...props}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200 outline-none"
      />
    </div>
  );
}
