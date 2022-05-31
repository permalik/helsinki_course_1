import Content from './components/Content';
import Header from './components/Header';

const App = () => {
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header heading={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={part1}
        exercises2={part2}
        exercises3={part3}
      />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
