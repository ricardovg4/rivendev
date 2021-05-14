import headerNavLinks from '../data/headerNavLinks';
import Link from 'next/link';

import SocialIcon from '../components/social-icons';
import siteMetadata from '../data/siteMetadata.json';

function LayoutWrapper({ children }) {
    return (
        <div>
            <div className="mx-auto border-b border-gray-600">
                <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
                    <header className="flex items-center justify-between py-8">
                        <div>
                            <Link href="/" aria-label="rivendev blog">
                                <a>rivendev</a>
                            </Link>
                        </div>
                        <div className="flex items-center text-base leading-5">
                            {headerNavLinks.map((link) => (
                                <Link key={link.title} href={link.href}>
                                    <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                                        {link.title}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </header>
                </div>
            </div>

            <main className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
                {children}
            </main>

            <footer>
                <div className="flex flex-col items-center mt-16">
                    <div className="flex mb-3 space-x-4">
                        <SocialIcon
                            kind="mail"
                            href={`mailto:${siteMetadata.email}`}
                            size="6"
                        />
                        <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                        <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                        <SocialIcon
                            kind="linkedin"
                            href={siteMetadata.linkedin}
                            size="6"
                        />
                        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                    </div>
                    <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div>{siteMetadata.author}</div>
                        <div>{` • `}</div>
                        <div>{`© ${new Date().getFullYear()}`}</div>
                    </div>
                    <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                        <Link href="/">{siteMetadata.title}</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LayoutWrapper;
