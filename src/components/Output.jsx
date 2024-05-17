function Output({ billInput, tip }) {
  return (
    <div>
      You pay ${billInput + tip} (${billInput} + ${Math.floor(tip)})
    </div>
  );
}
export default Output;
