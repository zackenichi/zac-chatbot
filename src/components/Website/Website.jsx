import React from "react";

import "./Website.css";

const Website = (props) => {
  const options = [
    {
      text: "Online Presence (3-5 pages)",
      handler: props.actionProvider.handleSitePack1,
      id: 1,
    },
    {
      text: "Portfolio site",
      handler: props.actionProvider.handleSitePack2,
      id: 2,
    },
    {
      text: "Blog",
      handler: props.actionProvider.handleSitePack3,
      id: 3,
    },
    {
      text: "E-Commerce",
      handler: props.actionProvider.handleSitePack4,
      id: 4,
    },
    {
      text: "Custom",
      handler: props.actionProvider.handleSitePack5,
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

export default Website;
