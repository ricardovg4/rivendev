import headerNavLinks from '../data/headerNavLinks';
import Link from 'next/link';

import SectionContainer from '../components/SectionContainer';
import Footer from '../components/Footer';

function LayoutWrapper({ children }) {
    return (
        <div>
            <div className="mx-auto border-b border-gray-600">
                <SectionContainer>
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
                </SectionContainer>
            </div>

            <SectionContainer>
                <main>{children}</main>
                <Footer />
            </SectionContainer>
        </div>
    );
}

export default LayoutWrapper;
