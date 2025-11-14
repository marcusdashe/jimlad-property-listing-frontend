import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-accent text-accent-foreground border-t border-black/10 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
             <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Jimlad Properties" width={180} height={40} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Your trusted partner in finding the perfect property in Nigeria. We are committed to providing exceptional service and value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/list-property" className="text-sm hover:text-primary transition-colors">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Jimlad Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}