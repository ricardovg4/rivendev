import SocialIcon from '../components/social-icons';
import siteMetadata from '../data/siteMetadata.json';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col items-center mt-16">
                <div className="flex mb-3 space-x-4">
                    <SocialIcon
                        kind="mail"
                        href={`mailto:${siteMetadata.email}`}
                        size="6"
                    />
                    <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                    {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
                    {/* <SocialIcon
                            kind="linkedin"
                            href={siteMetadata.linkedin}
                            size="6"
                        /> */}
                    <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                </div>
                <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{siteMetadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    {/* <div>{` • `}</div> */}
                    {/* <Link href={`mailto:${siteMetadata.email}`}>
                                {siteMetadata.email}
                            </Link> */}
                </div>
                <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
