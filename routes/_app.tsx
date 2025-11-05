import { define } from "../utils.ts";

export default define.page(function App({ Component, state }) {
  return (
    <html lang="en-US">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Deno fresh example" />
        <title>{state.title ?? "with-fresh"}</title>
        <link rel="preload" href="style.css" as="style" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main role="main">
          <Component />
        </main>
        <footer>Demo</footer>
      </body>
    </html>
  );
});
