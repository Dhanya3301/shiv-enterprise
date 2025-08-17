import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/store';
import { useDarkMode } from '@/hooks/useDarkMode';
import { 
  Menu, 
  ShoppingCart, 
  Search, 
  Phone, 
  Mail,
  Snowflake,
  Shield,
  Truck,
  Award,
  Sun,
  Moon
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const cartItems = useCartStore((state) => state.getTotalItems());
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Snowflake className="h-6 w-6" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">Shiv</h1>
                <p className="text-xs text-muted-foreground">Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hidden sm:flex"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {cartItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                    >
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Mobile menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    {/* Mobile Dark Mode Toggle */}
                    <Button
                      variant="ghost"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="justify-start"
                    >
                      {isDarkMode ? (
                        <>
                          <Sun className="h-4 w-4 mr-2" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 mr-2" />
                          Dark Mode
                        </>
                      )}
                    </Button>
                    
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          isActive(item.href) 
                            ? 'text-primary' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Shiv Solutions</h3>
                  <p className="text-sm text-muted-foreground">Industrial Cryogenic Systems</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">
                Leading provider of industrial cryogenic equipment, storage systems, and fuel solutions. 
                Serving aerospace, medical, and industrial applications worldwide since 1985.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  info@shiv.com
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
                <li><Link to="/products?category=storage-tanks" className="hover:text-foreground transition-colors">Storage Tanks</Link></li>
                <li><Link to="/products?category=dewars" className="hover:text-foreground transition-colors">Dewars</Link></li>
                <li><Link to="/products?category=safety-equipment" className="hover:text-foreground transition-colors">Safety Equipment</Link></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Why Choose Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">ISO 9001 Certified Quality</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Truck className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Global Shipping Available</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Award className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">38+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © 2024 Shiv Solutions. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}