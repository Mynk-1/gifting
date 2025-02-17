import React, { useState } from "react";
import { Package, ChevronDown, ChevronUp, ShoppingBag, Clock, CheckCircle, XCircle, Truck } from "lucide-react";

const OrderStatus = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-50 text-green-700';
      case 'cancelled':
        return 'bg-red-50 text-red-700';
      case 'processing':
        return 'bg-blue-50 text-blue-700';
      case 'shipped':
        return 'bg-purple-50 text-purple-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

const OrderItem = ({ item }) => (
  <div className="flex items-center gap-4 py-3 border-t border-gray-100 first:border-t-0">
    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <img 
        src={item.image || "/api/placeholder/64/64"} 
        alt={item.name} 
        className="w-12 h-12 object-cover rounded"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
      <p className="text-sm font-medium text-gray-900">₹{item.price.toFixed(2)}</p>
    </div>
  </div>
);

const Order = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-purple-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Order Header */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-gray-900">Order #{order.orderId}</h3>
              <OrderStatus status={order.status} />
            </div>
            <p className="text-sm text-gray-500">Placed on {order.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-900">₹{order.total.toFixed(2)}</p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="mt-4 flex items-center gap-2">
          {getStatusIcon(order.status)}
          <div className="text-sm text-gray-500">{order.statusMessage}</div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4 sm:p-6">
          <div className="space-y-4">
            {/* Delivery Address */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Address</h4>
              <div className="text-sm text-gray-500">
                <p>{order.deliveryAddress.name}</p>
                <p>{order.deliveryAddress.address}</p>
                <p>{order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.pincode}</p>
                <p>Phone: {order.deliveryAddress.phone}</p>
              </div>
            </div>

            {/* Order Items */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Order Items</h4>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span>₹{order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Tax</span>
                  <span>₹{order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MyOrders = () => {
  const [orders] = useState([
    {
      orderId: "ORD123456",
      date: "15 Feb 2025",
      status: "Delivered",
      statusMessage: "Delivered on 14 Feb 2025",
      total: 2499.00,
      subtotal: 2299.00,
      shipping: 100.00,
      tax: 100.00,
      items: [
        {
          name: "Cotton T-Shirt",
          quantity: 2,
          price: 999.00,
          image: "/api/placeholder/64/64"
        },
        {
          name: "Denim Jeans",
          quantity: 1,
          price: 1300.00,
          image: "/api/placeholder/64/64"
        }
      ],
      deliveryAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        phone: "9876543210"
      }
    },
    {
      orderId: "ORD123457",
      date: "14 Feb 2025",
      status: "Processing",
      statusMessage: "Order is being processed",
      total: 1599.00,
      subtotal: 1399.00,
      shipping: 100.00,
      tax: 100.00,
      items: [
        {
          name: "Running Shoes",
          quantity: 1,
          price: 1399.00,
          image: "/api/placeholder/64/64"
        }
      ],
      deliveryAddress: {
        name: "John Doe",
        address: "123 Main Street",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        phone: "9876543210"
      }
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8 mb-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">My Orders</h2>
            <p className="text-sm text-gray-500">View and track your orders</p>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <Order key={order.orderId} order={order} />
        ))}
      </div>

      {/* Empty State */}
      {orders.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Found</h3>
          <p className="text-gray-500 mb-4">
            You haven't placed any orders yet
          </p>
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span>Start Shopping</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;