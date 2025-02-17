import React, { useState } from "react";
import { Plus, Edit, Trash2, MapPin, X } from "lucide-react";

const AddressModal = ({ isOpen, onClose, address, onSave }) => {
  const [formData, setFormData] = useState(
    address || {
      type: "Home",
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      isDefault: false,
    }
  );

  // Reset form data when modal opens with new address
  React.useEffect(() => {
    setFormData(
      address || {
        type: "Home",
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        phone: "",
        isDefault: false,
      }
    );
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {address ? "Edit Address" : "Add New Address"}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Address Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="Home">Home</option>
              <option value="Office">Office</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-600">Street Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">PIN Code</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
                pattern="[0-9]{6}"
                title="Please enter a valid 6-digit PIN code"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              id="isDefault"
            />
            <label htmlFor="isDefault" className="text-sm text-gray-600">
              Set as default address
            </label>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {address ? "Save Changes" : "Add Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const DeliveryAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "Mayank Kataria",
      address: "123 Park Street, Green Park",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
      phone: "7060067719",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Mayank Kataria",
      address: "456 Business Complex, Sector 4",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122001",
      phone: "7060067719",
      isDefault: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleAddNew = () => {
    setEditingAddress(null);
    setIsModalOpen(true);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      const deletedAddress = addresses.find(addr => addr.id === id);
      const remainingAddresses = addresses.filter(addr => addr.id !== id);
      
      // If we're deleting the default address and there are other addresses
      if (deletedAddress.isDefault && remainingAddresses.length > 0) {
        // Set the first remaining address as default
        remainingAddresses[0].isDefault = true;
      }
      
      setAddresses(remainingAddresses);
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleSave = (formData) => {
    if (editingAddress) {
      // Update existing address
      setAddresses(prevAddresses => {
        const updatedAddresses = prevAddresses.map(addr => {
          if (addr.id === editingAddress.id) {
            // If this is the edited address
            return { ...formData, id: editingAddress.id };
          }
          // If formData.isDefault is true, set all other addresses to not default
          if (formData.isDefault) {
            return { ...addr, isDefault: false };
          }
          // If we're removing default status from the only address, make sure at least one address is default
          if (addr.id !== editingAddress.id && !formData.isDefault && editingAddress.isDefault) {
            return { ...addr, isDefault: addr === prevAddresses[0] };
          }
          return addr;
        });
        return updatedAddresses;
      });
    } else {
      // Add new address
      const newId = Math.max(...addresses.map((addr) => addr.id), 0) + 1;
      setAddresses(prevAddresses => {
        const newAddress = { ...formData, id: newId };
        // If this is the first address, make it default
        if (prevAddresses.length === 0) {
          newAddress.isDefault = true;
        }
        // If new address is set as default, update other addresses
        if (newAddress.isDefault) {
          return [...prevAddresses.map(addr => ({ ...addr, isDefault: false })), newAddress];
        }
        return [...prevAddresses, newAddress];
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8 mb-16">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow p-6 relative mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Delivery Addresses</h2>
              <p className="text-sm text-gray-500">Manage your delivery locations</p>
            </div>
          </div>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </button>
        </div>
      </div>

      {/* Address Cards */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white rounded-lg shadow p-6 relative">
            {address.isDefault && (
              <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                Default
              </span>
            )}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{address.type}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    +91 {address.phone}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{address.name}</p>
                <p className="text-sm text-gray-600 mb-1">{address.address}</p>
                <p className="text-sm text-gray-600">
                  {address.city}, {address.state} - {address.pincode}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => handleEdit(address)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm">Delete</span>
                  </button>
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                    >
                      <span className="text-sm">Set as Default</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {addresses.length === 0 && (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Addresses Found</h3>
          <p className="text-gray-500 mb-4">
            You haven't added any delivery addresses yet
          </p>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Address</span>
          </button>
        </div>
      )}

      {/* Address Modal */}
      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        address={editingAddress}
        onSave={handleSave}
      />
    </div>
  );
};

export default DeliveryAddress;