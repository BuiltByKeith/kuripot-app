import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputField from "../../components/ui/InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login({ email, password });

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    document.title = "Kuripot App - Login";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Kuripot App
            </h1>
            <p className="text-gray-600">Sign In</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              placeholder="Enter your email here"
              labelText="Email"
              htmlFor="email"
              id="email"
              inputType="email"
              value={email}
              onChange={setEmail}
              required
            />

            <InputField
              placeholder="Enter your password"
              labelText="Password"
              htmlFor="password"
              id="password"
              inputType="password"
              value={password}
              onChange={setPassword}
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primaryHover active:scale-[.98] transition-all"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-9 h-9 rounded-full border-4 border-gray-300 border-t-primary animate-spin"></div>
                  <p>Logging in ...</p>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
