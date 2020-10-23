# Typescript MediaQueries Handler

a simple hack that provide an easy way to detect screen sizes {xsmall, small, medium, large, xlarge} and apply actions.

## Usage:

1. Include the `injector.css` into your project [can be found in the **styles** directory]
   
   ```html
   <link rel="stylesheet" href="css/injector.css">
   ```

2. Import the `MediaQueriesHandler.ts` file in your typescript.
   
   ```typescript
    import { MediaQueryHandler } from "./Helpers/MediaQueriesHandler";
   ```

3. Extend `MediaQueriesHandler` class and Implement the following functions
   
   - `OnXSmallScreens()`
   
   - `OnSmallScreens()`
   
   - `OnMediumScreens()`
   
   - `OnLargeScreens()`
   
   - `OnXLargeScreens()`

## Example

- `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Breakpoints</title>
    <link rel="stylesheet" href='styles/Injector.css'>
</head>

<body>

    <h1 id="screenSize"></h1>

    <!-- script -->
    <script src='scripts/app.js' defer></script>
</body>

</html>
```

- `app.ts`

```typescript
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
```



## Note

Incase you're not aware of bundlers, you will need to bundle the file that extends the `MediaQueryHandler` class using either [`Webpack`](https://webpack.js.org/) or [`Browersft`](http://browserify.org/) to bundle all your files into one.
