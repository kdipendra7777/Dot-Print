// src/pages/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtp } from "../../services/authApi";
import { setToken, getUser } from "../../utils/token";

function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSend = async () => {
    if (!email) return alert("Enter email");

    try {
      setLoading(true);
      await sendOtp(email);
      setStep(2);
    } catch (err) {
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!otp) return alert("Enter OTP");

    try {
      setLoading(true);
      const res = await verifyOtp(email, otp);

      // ✅ token save
      setToken(res.data.token);

      // 🔥 role decode
      const user = getUser();

      // ✅ role-based redirect
      if (user?.role === "admin") {
        navigate("/dashboard"); // 👑 admin
      } else {
        navigate("/"); // 👤 normal user
      }

    } catch (err) {
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-[350px]">
        <h2 className="text-xl font-bold mb-4 text-center">
          {step === 1 ? "Login with Email" : "Enter OTP"}
        </h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              className="w-full p-2 border rounded mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              className="w-full p-2 border rounded mb-3 text-center tracking-widest"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerify}
              disabled={loading}
              className="w-full bg-green-600 text-white p-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;