import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementParam = (state, stateFunction) => {
    stateFunction(state + 1);
  };

  let all = good + neutral + bad;

  let average = all / 3;

  let positive = all / good;

  return (
    <div>
      <h2>Give Feedback</h2>
      <menu>
        <button
          onClick={() => {
            incrementParam(good, setGood);
          }}
        >
          good
        </button>
        <button
          onClick={() => {
            incrementParam(neutral, setNeutral);
          }}
        >
          neutral
        </button>
        <button
          onClick={() => {
            incrementParam(bad, setBad);
          }}
        >
          bad
        </button>
      </menu>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive ? `${positive}%` : 'unknown'}</p>
    </div>
  );
};

export default App;
