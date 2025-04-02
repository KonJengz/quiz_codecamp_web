function InputLogin({
  handleInputChange,
  nameInput,
  typeInput = "text",
  placeholder,
  error,
  valueInput,
}) {
  return (
    <div className="w-full">
      <input
        value={valueInput}
        type={typeInput}
        placeholder={placeholder}
        className="w-full border-b-1 border-gray-q-1 outline-0 p-2"
        onChange={handleInputChange}
        name={nameInput}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}
export default InputLogin;
