import { useContext } from "react";
import { BannerContext } from "./Banner";
function BannerDropdown({ children }) {
  const { open } = useContext(BannerContext);
  return open ? <div className="banner-dropdown">{children}</div> : null;
}
export default BannerDropdown;
