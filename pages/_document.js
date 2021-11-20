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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDPBBF6');`,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
