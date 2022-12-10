export const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveValue,
}) => {
  return (
    <div>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
      <p>Total: {totalValue}</p>
      <p>Positive Feedback: {positiveValue} %</p>
    </div>
  );
};
