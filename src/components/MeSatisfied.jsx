function MeSatisfied() {
  return (
    <div>
      <span>How did you like the service?</span>
      <select>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
export default MeSatisfied;
