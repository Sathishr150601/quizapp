import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { usePhoneAuth } from "./PhoneAuth";

const LoginModule: React.FC = () => {
  const {
    phone,
    setPhone,
    otp,
    setOtp,
    error,
    success,
    resendTimer,
    requestOtp,
    verifyOtp,
  } = usePhoneAuth();

  const navigate = useNavigate();

  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      verifyOtp().then(() => navigate("/profile"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-5 bg-gray-300">
      {success ? (
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="border-gray-300" />
            <InputOTPSlot index={1} className="border-gray-300" />
            <InputOTPSlot index={2} className="border-gray-300" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} className="border-gray-300" />
            <InputOTPSlot index={4} className="border-gray-300" />
            <InputOTPSlot index={5} className="border-gray-300" />
          </InputOTPGroup>
        </InputOTP>
      ) : (
        <PhoneInput
          country={"in"}
          inputStyle={{ width: "100%" }}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      )}

      <Button
        disabled={!phone || resendTimer > 0}
        onClick={() => requestOtp()}
        className="w-full mt-5"
      >
        {resendTimer > 0 ? `Resend OTP in ${resendTimer}` : "Send OTP"}
      </Button>

      {otp.length === 6 && (
        <Button onClick={handleOtpSubmit} className="w-full mt-3">
          Verify OTP
        </Button>
      )}

      <div className="p-10 text-center">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>

      <div id="recaptcha-container" />
    </div>
  );
};

export default LoginModule;
