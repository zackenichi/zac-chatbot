import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Services",
      handler: props.actionProvider.handleServicesList,
      id: 1,
    },
    { text: "Pricing", handler: props.actionProvider.handlePricing, id: 2 },
    { text: "Portfolio", handler: props.actionProvider.handlePortfolio, id: 3 },
    { text: "Contact", handler: props.actionProvider.handleContact, id: 4 },
    { text: "You're cool!", handler: props.actionProvider.HandleCool, id: 5 },
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

export default LearningOptions;
