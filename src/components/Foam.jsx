import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
   
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const validate = () => {
  if (!formData.email.includes("@")) {
    return { email: "Enter a valid email" };
  }
  if (!formData.name.trim()) {
    return { name: "Name is required" };
  }
  if (formData.password.length < 6) {
    return { password: "Password must be at least 6 characters" };
  }
  return {};            // no errors
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    let hasError = false;
    for (let key in validationErrors) {
      hasError = true;
      break;
    }

    if (hasError) {
      setErrors(validationErrors);
    } else {
      console.log("Valid form data:", formData);
      alert("Registration successful! (Check console)");
      navigate("/counter");
      setFormData({ email: "", name: "", password: "" });
      setErrors({});
    }
  };

  const inputClasses =
    "w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 sm:p-10 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Ali Ahmad"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="•••••••"
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
