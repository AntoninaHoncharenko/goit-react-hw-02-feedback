export const FeedbackBtns = ({ countGood, countNeutral, countBad }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <button onClick={countGood}>Good</button>
      <button onClick={countNeutral}>Nautral</button>
      <button onClick={countBad}>Bad</button>
    </div>
  );
};
