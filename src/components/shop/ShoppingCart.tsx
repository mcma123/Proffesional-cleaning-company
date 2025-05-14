
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingCart as CartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Mock cart data for demonstration
const initialCartItems = [
  {
    id: 1,
    name: 'Eco-Friendly All-Purpose Cleaner',
    price: 12.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    name: 'Microfiber Cleaning Cloth Set',
    price: 19.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 3,
    name: 'Premium Window Cleaning Kit',
    price: 34.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&q=80&w=300'
  }
];

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;
  
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <CartIcon className="h-8 w-8 text-clean-green-500" />
                Your Shopping Cart
              </h1>
              <span className="text-gray-500">{cartItems.length} items</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild className="bg-clean-green-500 hover:bg-clean-green-600">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden border border-gray-200">
                    <CardContent className="p-0">
                      <div className="flex items-center p-4">
                        <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-clean-green-500 font-semibold mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="ml-4 text-right">
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm mt-1"
                            aria-label="Remove item"
                          >
                            <X className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3">
            <Card className="sticky top-24 border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-clean-green-500 hover:bg-clean-green-600">
                  Proceed to Checkout
                </Button>
                <div className="mt-4 text-center">
                  <Link to="/shop" className="text-clean-green-500 hover:text-clean-green-600 inline-flex items-center gap-2">
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
