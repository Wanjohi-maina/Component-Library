import { createContext, useState } from "react";
import classnames from "classnames";
const BannerContext = createContext();
function Banner({ children, status }) {
  let statusClass = status && `status-${status}`;
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  const allClasses = classnames(statusClass, "banner", { "banner-open": open });
  return (
    <BannerContext.Provider value={{ open, toggle, status }}>
      <div className={allClasses}>{children}</div>
    </BannerContext.Provider>
  );
}
export default Banner;
export { BannerContext };
