import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = 'Half stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ];

  return (
    <div>
      <Header heading={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
