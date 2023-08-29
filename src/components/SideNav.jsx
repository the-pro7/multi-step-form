import React, { useState } from "react";
import desktopImage from "../assets/images/bg-sidebar-desktop.svg";
import Step from "./Step";

const SideNav = () => {
  const [active, setActive] = useState(true);
  return (
    <aside className="sideNav">
      <div className="sideNav__image">
        {/* <img src={desktopImage} alt="#" /> */}
      </div>
      <div className="sideNav__steps">
        <Step
          stepNumber={1}
          stepName={"Step 1"}
          stepType={"Your info"}
          active={active}
        />
        <Step
          stepNumber={2}
          stepName={"Step 2"}
          stepType={"Select Plan"}
          // active={active}
        />
        <Step
          stepNumber={3}
          stepName={"Step 3"}
          stepType={"Add-ons"}
          // active={active}
        />
        <Step
          stepNumber={4}
          stepName={"Step 4"}
          stepType={"Summary"}
          // active={active}
        />
      </div>
    </aside>
  );
};

export default SideNav;
