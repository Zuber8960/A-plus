function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}) {
  return (
    <div className="field-wrap">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default FormField;
