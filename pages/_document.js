import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link
            rel="preload"
            href="../public/fonts/Telegraf-Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="../public/fonts/Telegraf-UltraBold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="../public/fonts/Telegraf-UltraLight.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
