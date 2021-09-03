import React from "react";

import "./Pricing.css";

const Pricing = (props) => {
  const options = [
    {
      text: "Full time Developer",
      handler: props.actionProvider.fulltimePrice,
      id: 1,
    },
    {
      text: "Website Development",
      handler: props.actionProvider.handleWebsiteList,
      id: 2,
    },
    {
      text: "Software Development",
      handler: props.actionProvider.handleSoftware,
      id: 3,
    },
    {
      text: "Systems Analysis",
      handler: props.actionProvider.handleAnalysis,
      id: 4,
    },
    {
      text: "Website Optimization",
      handler: props.actionProvider.handleOptimization,
      id: 5,
    },
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

export default Pricing;
