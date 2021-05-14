import Link from 'next/link';

function FirstPost() {
    return (
        <div>
            <h1 className="text-6xl">First Post!!!</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </div>
    );
}

export default FirstPost;
