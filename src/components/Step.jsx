import React from "react";
import PropTypes from "prop-types";

const Step = ({ stepNumber, stepName, stepType, active }) => {
	return (
		<div className="steps step1">
			<span className={active ? "step-circle active" : "step-circle"}>
				{stepNumber}
			</span>
			<div className="step-container">
				<p className="step">{stepName}</p>
				<p className="step-type">{stepType}</p>
			</div>
		</div>
	);
};

Step.propTypes = {
	stepName: PropTypes.string.isRequired,
	stepNumber: PropTypes.number.isRequired,
	stepType: PropTypes.string.isRequired,
};

export default Step;
