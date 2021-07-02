const Box = (props) => {
  return (
    <div className="col" onClick={props.onClick}>
      <span>{props.currentValue}</span>
    </div>
  );
};
export default Box;
