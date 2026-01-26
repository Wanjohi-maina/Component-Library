import classnames from "classnames";
function Badge({ children, color, shape, ...rest }) {
  let colorClass = color && `button-${color}`;
  let shapeClass = shape && `button-${shape}`;
  const allClasses = classnames(colorClass, shapeClass);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
export default Badge;
