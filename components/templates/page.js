import React from "react";
import Head from "next/head";

const globalStyles = `
html {
  font-family: 'Montserrat', sans-serif;
  background: url(/images/computer.jpg) no-repeat center center fixed;
  background-size: cover;
}
`;

function PageTemplate({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">{globalStyles}</style>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div id="container">{children}</div>
    </>
  );
}

export default PageTemplate;
