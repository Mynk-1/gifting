import React, { useState } from "react";
import {
  User,
  MapPin,
  ShoppingBag,
  Wallet,
  Gift,
  Heart,
  Clock,
  Users,
  Lock,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Edit,
  PowerIcon,
  Save,
  X
} from "lucide-react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });
  const [formData, setFormData] = useState({
    firstName: "Mayank",
    lastName: "Kataria",
    email: "mayankkataria1628@gmail.com",
    phone: "+917060067719",
    day: "",
    month: "",
    year: "",
    gender: ""
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+91[6-9]\d{9}$/;
    if (!phone) {
      return "Phone number is required";
    }
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid Indian phone number (+91 followed by 10 digits)";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "email" || name === "phone") {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSave = () => {
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      email: emailError,
      phone: phoneError
    });

    if (!emailError && !phoneError) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: "Mayank",
      lastName: "Kataria",
      email: "mayankkataria1628@gmail.com",
      phone: "+917060067719",
      day: "",
      month: "",
      year: "",
      gender: ""
    });
    setErrors({
      email: "",
      phone: ""
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8 mb-8">
      <div className="bg-white rounded-lg shadow p-6 relative mt-16 mb-8 lg:mb-0">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            MK
          </div>
          <h2 className="text-lg font-semibold">Good Evening!</h2>
          <p className="text-sm font-semibold">Mayank</p>
        </div>

        {isEditing ? (
          <>
            <button
              onClick={handleCancel}
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={handleSave}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-50 rounded-full transition-colors"
            >
              <Save className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Edit className="w-5 h-5" />
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          <div>
            <label className="block text-sm text-gray-600 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${
                isEditing 
                  ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  : "bg-gray-50 border-gray-200"
              }`}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${
                isEditing 
                  ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  : "bg-gray-50 border-gray-200"
              }`}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${
                isEditing 
                  ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  : "bg-gray-50 border-gray-200"
              } ${errors.email ? "border-red-500" : ""}`}
              readOnly={!isEditing}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${
                isEditing 
                  ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  : "bg-gray-50 border-gray-200"
              } ${errors.phone ? "border-red-500" : ""}`}
              readOnly={!isEditing}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Birthdate</label>
            <div className="flex gap-4">
              <input
                type="text"
                name="day"
                placeholder="DD"
                value={formData.day}
                onChange={handleInputChange}
                className={`w-20 p-2 rounded border ${
                  isEditing 
                    ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    : "bg-gray-50 border-gray-200"
                }`}
                readOnly={!isEditing}
              />
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={formData.month}
                onChange={handleInputChange}
                className={`w-20 p-2 rounded border ${
                  isEditing 
                    ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    : "bg-gray-50 border-gray-200"
                }`}
                readOnly={!isEditing}
              />
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                value={formData.year}
                onChange={handleInputChange}
                className={`w-20 p-2 rounded border ${
                  isEditing 
                    ? "bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    : "bg-gray-50 border-gray-200"
                }`}
                readOnly={!isEditing}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="text-sm">Female</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;