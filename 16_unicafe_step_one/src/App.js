import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.toggle}>{props.name}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text}: {props.state}
    </p>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text={'Good'} state={props.p1} />
      <StatisticLine text={'Neutral'} state={props.p2} />
      <StatisticLine text={'Bad'} state={props.p3} />
      <StatisticLine text={'All'} state={props.p4} />
      <StatisticLine text={'Average'} state={props.p5} />
      <StatisticLine
        text={'Positive'}
        state={props.p6 ? `${props.p6}%` : 'unknown'}
      />
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
        <Button
          name={'good'}
          toggle={() => {
            incrementParam(good, setGood);
          }}
        />
        <Button
          name={'neutral'}
          toggle={() => {
            incrementParam(neutral, setNeutral);
          }}
        />
        <Button
          name={'bad'}
          toggle={() => {
            incrementParam(bad, setBad);
          }}
        />
        {all > 0 ? (
          <Statistics
            p1={good}
            p2={neutral}
            p3={bad}
            p4={all}
            p5={average}
            p6={positive}
          />
        ) : (
          <div>'No feedback given'</div>
        )}
      </menu>
    </div>
  );
};

export default App;
