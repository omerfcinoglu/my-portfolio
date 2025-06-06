
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/projects', label: 'Projects' },
    { path: '/cv', label: 'CV' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-border">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          {/* Left side - Name and title */}
          <div className="flex flex-col">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Omer Faruk CINOGLU
            </Link>
            <span className="text-sm text-muted-foreground mt-1"> candidate computer engineer </span>
          </div>

          {/* Right side - Navigation and theme toggle */}
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="w-px h-6 bg-border" />

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main content - Centered */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
