import { useState } from 'react';

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive ? `${props.positive}%` : 'unknown'}</p>
    </div>
  );
};

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
        {all > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            average={average}
            positive={positive}
          />
        ) : (
          <div>'No feedback given'</div>
        )}
      </menu>
    </div>
  );
};

export default App;
