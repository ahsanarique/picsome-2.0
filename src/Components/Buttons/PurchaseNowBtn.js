import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { buttonClass } from "./btnClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

const PurchaseNowBtn = () => {
  const { loginStatus } = useContext(Context);
  const userLockIcon = <FontAwesomeIcon icon={faUserLock} />;

  return (
    <React.Fragment>
      {loginStatus && (
        <button className={`${buttonClass} hover:bg-pink`}>PURCHASE NOW</button>
      )}
      {!loginStatus && (
        <button className={`${buttonClass} hover:bg-pink`}>
          {userLockIcon}{" "}
          <span className="ml-2">SIGN UP OR LOGIN TO PURCHASE NOW</span>
        </button>
      )}
    </React.Fragment>
  );
};

export default PurchaseNowBtn;
