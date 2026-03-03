function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
}) {
  return (
    <div className="field-wrap">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default TextAreaField;
