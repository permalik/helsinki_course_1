import Part from '../Part';

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercise} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercise} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercise} />
    </div>
  );
};

export default Content;
