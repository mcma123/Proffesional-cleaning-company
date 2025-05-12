
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  GalleryHorizontal, 
  Calendar, 
  Users, 
  Settings,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', path: '/admin/services', icon: <Package className="w-5 h-5" /> },
    { name: 'Products', path: '/admin/products', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <GalleryHorizontal className="w-5 h-5" /> },
    { name: 'Bookings', path: '/admin/bookings', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Users', path: '/admin/users', icon: <Users className="w-5 h-5" /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-clean-green-500 to-clean-blue-500 bg-clip-text text-transparent">
              ProClean Admin
            </span>
          </Link>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive(item.path) 
                      ? 'bg-clean-green-50 text-clean-green-600' 
                      : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 min-h-screen">
        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
        <main className="py-10 px-4 sm:px-6 lg:px-8">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};
