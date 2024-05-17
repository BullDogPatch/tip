function BillInput({ billInput, onSetBillInput }) {
  const handleInputChange = (e) => onSetBillInput(+e.target.value);
  return (
    <div>
      <label htmlFor='bill'>How much was the bill?</label>
      <input
        type='text'
        id='bill'
        placeholder='value'
        value={billInput}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default BillInput;
