class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleServicesList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, Here are some services we offer:",
      {
        widget: "servicesLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleLove = () => {
    const message = this.createChatBotMessage("I love you too!");
    this.updateChatbotState(message);
  };

  handleHire = () => {
    const message = this.createChatBotMessage("Great! Let's get in touch.", {
      widget: "contactLinks",
    });
    this.updateChatbotState(message);
  };

  handleMenu = () => {
    const message = this.createChatBotMessage(
      "Good day mate, can I help you with anything?",
      {
        widget: "learningOptions",
      }
    );
    this.updateChatbotState(message);
  };

  HandleCool = () => {
    const message = this.createChatBotMessage(
      "You're also cool for a human, Live long and prosper!"
    );
    this.updateChatbotState(message);
  };

  handleSomethingElse = () => {
    const message = this.createChatBotMessage("Do you need anything else?", {
      widget: "Back",
    });
    this.updateChatbotState(message);
  };
  // doesnt work
  // handleUnknown = () => {
  //   const message = this.createChatBotMessage(
  //     "Sorry, I didn't get that. Can you try the menu?",
  //     {
  //       widget: "learningOptions",
  //     }
  //   );
  //   this.updateChatbotState(message);
  // };

  handleSitePack1 = () => {
    const message = this.createChatBotMessage("That would be $1000 USD", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };

  handleSitePack2 = () => {
    const message = this.createChatBotMessage("That would be $1500 USD", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };

  handleSitePack2 = () => {
    const message = this.createChatBotMessage("That would be $1250 USD", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };

  handleSitePack3 = () => {
    const message = this.createChatBotMessage("That would be $1500 USD", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };
  handleSitePack4 = () => {
    const message = this.createChatBotMessage(
      "That would be $2000 - $4000 USD, depending on the amount of items.",
      {
        widget: "PriceFeedback",
      }
    );
    this.updateChatbotState(message);
  };

  handleSitePack5 = () => {
    const message = this.createChatBotMessage(
      "It's hard to estimate, can you book a time so we can discuss it? Price starts at $2000 USD.",
      {
        widget: "PriceFeedback",
      }
    );
    this.updateChatbotState(message);
  };

  handleWebsiteList = () => {
    const message = this.createChatBotMessage(
      "What kind of website do you need?",
      {
        widget: "website",
      }
    );
    this.updateChatbotState(message);
  };

  handlePricing = () => {
    const message = this.createChatBotMessage(
      "What kind of service do you need?",
      {
        widget: "Pricing",
      }
    );
    this.updateChatbotState(message);
  };
  handleGoodbye = () => {
    const message = this.createChatBotMessage(
      "It was fun talking to you, take care now"
    );
    this.updateChatbotState(message);
  };
  handleContact = () => {
    const message = this.createChatBotMessage("You can reach out via:", {
      widget: "contactLinks",
    });
    this.updateChatbotState(message);
  };

  handleResume = () => {
    const message = this.createChatBotMessage(
      "You can check my resume here or you can book a time to talk to me:",
      {
        widget: "resumeLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handlePortfolio = () => {
    const message = this.createChatBotMessage(
      "You can check our recent work here:",
      {
        widget: "portfolioLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleSoftware = () => {
    const message = this.createChatBotMessage(
      "It's kind of hard to judge, can we get in touch?",
      {
        widget: "contactLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleAnalysis = () => {
    const message = this.createChatBotMessage("That would be $120 USD.", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };

  fulltimePrice = () => {
    const message = this.createChatBotMessage(
      "Price starts at $2500 USD/Month.",
      {
        widget: "PriceFeedback",
      }
    );
    this.updateChatbotState(message);
  };

  handleOptimization = () => {
    const message = this.createChatBotMessage("Price starts at $200 USD", {
      widget: "PriceFeedback",
    });
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
