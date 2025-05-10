
import React from 'react';
import { 
  Users, 
  Calendar, 
  ShoppingCart, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    {
      title: "Total Customers",
      value: "3,257",
      change: "+12%",
      icon: <Users className="h-8 w-8 text-clean-blue-500" />,
    },
    {
      title: "Bookings this Month",
      value: "845",
      change: "+23%",
      icon: <Calendar className="h-8 w-8 text-clean-green-500" />,
    },
    {
      title: "Product Sales",
      value: "$12,876",
      change: "+8%",
      icon: <ShoppingCart className="h-8 w-8 text-clean-blue-500" />,
    },
    {
      title: "Revenue",
      value: "$87,432",
      change: "+17%",
      icon: <TrendingUp className="h-8 w-8 text-clean-green-500" />,
    },
  ];

  // Mock recent bookings
  const recentBookings = [
    {
      id: "BK-7829",
      customer: "Jane Smith",
      service: "Home Cleaning",
      date: "2023-05-10",
      status: "Completed",
    },
    {
      id: "BK-7830",
      customer: "John Doe",
      service: "Window Cleaning",
      date: "2023-05-11",
      status: "Scheduled",
    },
    {
      id: "BK-7831",
      customer: "Alice Johnson",
      service: "Office Cleaning",
      date: "2023-05-12",
      status: "In Progress",
    },
    {
      id: "BK-7832",
      customer: "Robert Brown",
      service: "Building Cleaning",
      date: "2023-05-13",
      status: "Scheduled",
    },
  ];

  // Mock recent orders
  const recentOrders = [
    {
      id: "ORD-5271",
      customer: "Michael Wilson",
      product: "Eco-Friendly All-Purpose Cleaner",
      date: "2023-05-09",
      amount: "$24.99",
    },
    {
      id: "ORD-5272",
      customer: "Sarah Lee",
      product: "Premium Microfiber Cloth Set",
      date: "2023-05-10",
      amount: "$15.99",
    },
    {
      id: "ORD-5273",
      customer: "David Miller",
      product: "Industrial Strength Degreaser",
      date: "2023-05-10",
      amount: "$19.99",
    },
    {
      id: "ORD-5274",
      customer: "Elizabeth Taylor",
      product: "Glass & Window Cleaner",
      date: "2023-05-11",
      amount: "$9.99",
    },
  ];

  // Function to determine status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome to your admin dashboard.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                    <span className="text-gray-500 text-sm ml-1">from last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-full bg-gray-100">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Bookings */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Bookings</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/bookings" className="flex items-center text-clean-green-500">
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Service</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b last:border-b-0">
                      <td className="py-3 text-sm">{booking.id}</td>
                      <td className="py-3 text-sm">{booking.customer}</td>
                      <td className="py-3 text-sm">{booking.service}</td>
                      <td className="py-3 text-sm">{booking.date}</td>
                      <td className="py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/products/orders" className="flex items-center text-clean-green-500">
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Product</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-b-0">
                      <td className="py-3 text-sm">{order.id}</td>
                      <td className="py-3 text-sm">{order.customer}</td>
                      <td className="py-3 text-sm">{order.product}</td>
                      <td className="py-3 text-sm">{order.date}</td>
                      <td className="py-3 text-sm font-medium">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
