function Percentages({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <div>
        <span>{children}</span>
        <select
          value={percentage}
          onChange={(e) => onSetPercentage(+e.target.value)}
        >
          <option value='0'>Dissatisfied (0%)</option>
          <option value='5'>It was ok (5%)</option>
          <option value='10'>It was good (10%)</option>
          <option value='20'>Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
}
export default Percentages;
