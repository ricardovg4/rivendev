import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="dark">
                <Head />
                <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
