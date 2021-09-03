import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import Pricing from "./components/Pricing/Pricing";
import PriceFeedback from "./components/Pricing/PriceFeedback";
import Website from "./components/Website/Website";

const config = {
  botName: "ZacBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm Zac bot. How can I help you today?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#d00000",
    },
    chatButton: {
      backgroundColor: "#d00000",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Pricing",
      widgetFunc: (props) => <Pricing {...props} />,
    },
    {
      widgetName: "contactOptions",
      widgetFunc: (props) => <Pricing {...props} />,
    },
    {
      widgetName: "PriceFeedback",
      widgetFunc: (props) => <PriceFeedback {...props} />,
    },
    {
      widgetName: "website",
      widgetFunc: (props) => <Website {...props} />,
    },
    {
      widgetName: "Back",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "servicesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Website Development",

            id: 1,
          },
          {
            text: "Software Development",

            id: 2,
          },
          {
            text: "Systems Analysis",

            id: 3,
          },
          {
            text: "Other",
            url: "https://zacsalazar.com/#contact",
            id: 4,
          },
        ],
      },
    },
    {
      widgetName: "contactLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Website",
            url: "https://zacsalazar.com/",
            id: 1,
          },
          {
            text: "Email",
            url: "mailto:hello@zacsalazar.com?Subject=ChatBot Query",
            id: 2,
          },
          {
            text: "Book a time",
            url: "https://calendly.com/zacsalazardev",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "portfolioLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Website",
            url: "https://zacsalazar.com/portfolio/",
            id: 1,
          },
          {
            text: "Github",
            url: "https://github.com/zackenichi",
            id: 2,
          },
          {
            text: "Codepen",
            url: "https://codepen.io/zackenichi",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "resumeLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "View Resume",
            url: "https://zacsalazar.com/wp-content/uploads/2021/08/Resume-Zac-Salazar-Fullstack-2021.pdf",
            id: 1,
          },
          {
            text: "Book a time",
            url: "https://calendly.com/zacsalazardev",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
