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
          <link rel="icon" href="/fav.png"></link>
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; n = f.fbq = function () {
                  n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                n.queue = []; t = b.createElement(e); t.async = true; 
                t.src = v; s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
              }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '322308451837265');
              fbq('init', '695709117502971');
              fbq('init', '656906774945918');
              fbq('track', 'PageView');
                  `,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: ` 
          <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=322308451837265&ev=PageView&noscript=1"
        />
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=656906774945918&ev=PageView&noscript=1"
        />
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=695709117502971&ev=PageView&noscript=1"
        />
          `,
            }}
          ></noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
