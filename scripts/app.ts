import { MediaQueryHandler } from "./Helpers/MediaQueriesHandler";

class app extends MediaQueryHandler {
  constructor() {
    super();
    this.heading = document.querySelector("#screenSize")! as HTMLHeadingElement;
  }

  private heading: HTMLHeadingElement;

  OnXSmallScreens(): void {
    console.log("Xsmall  Screens");
    this.heading.textContent = "Xsmall  Screens";
  }
  OnSmallScreens(): void {
    console.log("Small  Screens");
    this.heading.textContent = "Small  Screens";
  }
  OnMediumScreens(): void {
    console.log("Medium  Screens");
    this.heading.textContent = "Medium  Screens";
  }
  OnLargeScreens(): void {
    console.log("Large  Screens");
    this.heading.textContent = "Large  Screens";
  }

  OnXLargeScreens(): void {
    console.log("XLarage  Screens");
    this.heading.textContent = "XLarage Screens";
  }
}

new app();
