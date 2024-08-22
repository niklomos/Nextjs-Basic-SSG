import { Head, Html, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-..."
          crossOrigin="anonymous"
        />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-..."
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
