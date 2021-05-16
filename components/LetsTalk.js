import Link from 'next/link';
import siteMetadata from '../data/siteMetadata.json';

function LetsTalk() {
  return (
    <div className=" w-20 fixed bottom-10 right-10  bg-red-400 dark:bg-yellow-400 dark:text-black text-sm">
      <Link href={`mailto:${siteMetadata.email}`}>
        <a className="pl-1">Let's talk.</a>
      </Link>
    </div>
  );
}

export default LetsTalk;
