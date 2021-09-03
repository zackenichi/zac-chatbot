class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (
      lowerCaseMessage.includes("menu") ||
      lowerCaseMessage.includes("back")
    ) {
      this.actionProvider.handleMenu();
    }

    if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.handleContact();
    }
    if (
      lowerCaseMessage.includes("portfolio") ||
      lowerCaseMessage.includes("sample") ||
      lowerCaseMessage.includes("work")
    ) {
      this.actionProvider.handlePortfolio();
    }

    if (
      lowerCaseMessage.includes("cool") ||
      lowerCaseMessage.includes("awesome") ||
      lowerCaseMessage.includes("amazing")
    ) {
      this.actionProvider.HandleCool();
    }
    if (lowerCaseMessage.includes("love")) {
      this.actionProvider.handleLove();
    }

    if (
      lowerCaseMessage.includes("price") ||
      lowerCaseMessage.includes("how much") ||
      lowerCaseMessage.includes("pricing")
    ) {
      this.actionProvider.handlePricing();
    }

    if (lowerCaseMessage.includes("ok") || lowerCaseMessage.includes("okay")) {
      this.actionProvider.handleSomethingElse();
    }
    if (
      lowerCaseMessage.includes("no") ||
      lowerCaseMessage.includes("goodbye") ||
      lowerCaseMessage.includes("good bye")
    ) {
      this.actionProvider.handleGoodbye();
    }

    if (
      lowerCaseMessage.includes("resume") ||
      lowerCaseMessage.includes("experience") ||
      lowerCaseMessage.includes("cv")
    ) {
      this.actionProvider.handleResume();
    }

    if (
      lowerCaseMessage.includes("hire") ||
      lowerCaseMessage.includes("hired") ||
      lowerCaseMessage.includes("work for us")
    ) {
      this.actionProvider.handleHire();
    }
    if (lowerCaseMessage.includes("software")) {
      this.actionProvider.handleSoftware();
    }
    if (lowerCaseMessage.includes("analysis")) {
      this.actionProvider.handleAnalysis();
    }

    if (lowerCaseMessage.includes("optimization")) {
      this.actionProvider.handleOptimization();
    }

    if (lowerCaseMessage.includes("services")) {
      this.actionProvider.handleServicesList();
    }

    if (lowerCaseMessage.includes("website")) {
      this.actionProvider.handleWebsiteList();
    }

    if (lowerCaseMessage.includes("blog")) {
      this.actionProvider.handleSitePack3();
    }

    if (
      lowerCaseMessage.includes("shop") ||
      lowerCaseMessage.includes("commerce")
    ) {
      this.actionProvider.handleSitePack4();
    }

    if (lowerCaseMessage.includes("custom")) {
      this.actionProvider.handleSitePack5();
    }
    // need to fix this
    // else  {
    //   this.actionProvider.handleUnknown();
    // }
  }
}

export default MessageParser;
