import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Jimlad Properties" width={180} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
