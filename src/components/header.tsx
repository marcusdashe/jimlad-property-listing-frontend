import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-accent text-accent-foreground border-b border-black/10 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Jimlad Properties" width={180} height={40} />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-accent-foreground hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="/list-property" className="font-medium text-accent-foreground hover:text-primary transition-colors">
              List Your Property
            </Link>
            <Link href="/contact" className="font-medium text-accent-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
