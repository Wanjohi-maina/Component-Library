import { useContext } from "react";
import classnames from "classnames";
import { BannerContext } from "./Banner";
import SuccessIcon from "./icons/SuccessIcon";
import WarningIcon from "./icons/WarningIcon";
import ErrorIcon from "./icons/ErrorIcon";
import InfoIcon from "./icons/InfoIcon";

function BannerButton({ children }) {
  const { toggle, open, status } = useContext(BannerContext);

  const buttonClasses = classnames("banner-button", {
    "banner-button-open": open,
  });
  const iconMap = {
    success: <SuccessIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    neutral: <InfoIcon />,
  };

  const icon = iconMap[status];

  return (
    <button onClick={toggle} className={buttonClasses}>
      {icon && (
        <span className="banner-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="banner-text">{children}</span>
    </button>
  );
}

export default BannerButton;
