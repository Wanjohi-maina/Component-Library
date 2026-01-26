import DotPattern from "../assets/DotPattern.png";
function TestimonialsNoPic({ children }) {
  return (
    <div
      className="testNoPic-container"
      style={{ "--dotPattern": `url(${DotPattern})` }}
    >
      {children}
    </div>
  );
}
export default TestimonialsNoPic;
