import React from "react";

import "./Pricing.css";

const PriceFeedback = (props) => {
  const options = [
    {
      text: "Hired!",
      handler: props.actionProvider.handleHire,
      id: 1,
    },
    { text: "View Resume", handler: props.actionProvider.handleResume, id: 2 },
    { text: "Contact", handler: props.actionProvider.handleContact, id: 3 },
    { text: "Back", handler: props.actionProvider.handleSomethingElse, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default PriceFeedback;
