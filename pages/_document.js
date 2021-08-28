import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html id="root">
        <Head>
          <meta charSet="UTF-8"></meta>
          {/* comment out this line for production */}
          {/* <meta name="robots" content="noindex"></meta> */}

          <meta property="og:locale" content="en_US"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta property="og:type" content="website"></meta>
          <link rel="icon" href="/fav1.ico"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
