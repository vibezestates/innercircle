import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { sendOtp, verifyOtp, saveLead } from "../../helpers/otp";

export default function ContactForm({
  buttonText = "Book A Private Consultation",
  showPhoneButton = true,
}) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();


  const submitForm = async (data) => {
    try {
      console.log("FORM VALUES:", data);
      setUserData(data);
      await saveLead(data);
      const otpRes = await sendOtp(data.mobile);
      console.log("OTP Send Response:", otpRes);
      setPhone(data.mobile);
      setStep(2);
    } catch {
      setError(true);
      // setStep(2);

    }
  };

  const verifyOtp1 = async (otpValue) => {
    try {

      console.log("OTP ENTERED:", otpValue);
      // await new Promise((res) => setTimeout(res, 800));
      const result = await verifyOtp(phone, otp);

      if (result?.description?.desc === "Code Matched successfully.") {
        
        setStep(3);
        reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const otpInputClass =
    "w-full bg-transparent border-b border-gray-600 text-gray-200 py-3 pl-0 pr-0 focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500";


  if (step === 1) {
    return (
      <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
        {/* NAME */}
        <div className="mb-1">
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="hidden"
              {...register("page", { value: "Vibez Inner Cirlce" })}
            />
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className={`w-full bg-transparent border-b ${errors.name ? "border-red-500" : "border-gray-600"
                } text-gray-200 py-3 pl-0 pr-0 focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500`}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}

        </div>

        {/* MOBILE */}
        <div className="mb-1">
          <div className="relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              className={`w-full bg-transparent border-b ${errors.mobile ? "border-red-500" : "border-gray-600"
                } text-gray-200 py-3 pl-12 pr-0 focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500`}
            />
          </div>

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-1">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full bg-transparent border-b ${errors.email ? "border-red-500" : "border-gray-600"
                } text-gray-200 py-3 pl-0 pr-0 focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500`}
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* CONSENT */}
        <div className="mb-1">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              {...register("consent", {
                required: "Please provide consent to continue",
              })}
              className="mt-1 mr-3 w-4 h-4 bg-transparent border border-gray-600 rounded cursor-pointer accent-emerald-600"
            />
            <span className="text-gray-400 text-sm leading-relaxed">
              I authorise Vibez and its representatives to call, SMS, Email or
              WhatsApp me about its products and offers.
            </span>
          </label>

          {errors.consent && (
            <p className="text-red-500 text-xs mt-1">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        {error && (
          <p className="text-red-500 text-xs mt-1">{"Something Went Wrong!"}</p>
        )}
        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-[#104D39] hover:bg-[#104d39a6] text-white font-medium py-4 px-6 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center"
          >
            {isSubmitting ? "SUBMITTING..." : buttonText}
          </button>

          {showPhoneButton && (
            <button
              type="button"
              onClick={() => (window.location.href = "tel:+91")}
              className="bg-[#104D39] hover:bg-[#104d39a6] text-white p-4 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>
    );
  }

  if (step === 2) {
    return (

      <div className="space-y-4">
        <p className="text-gray-300 text-sm">
          An OTP has been sent to <span className="text-white">{userData?.mobile}</span>
        </p>

        <input
          type="text"
          maxLength="6"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className={otpInputClass}
        />
        {error && (
          <p className="text-red-500 text-xs mt-1">{"Something Went Wrong!"}</p>
        )}
        <button
          onClick={() => verifyOtp1(otp)}
          className="w-full bg-[#104D39] hover:bg-[#104d39a6] text-white font-medium py-4 transition-colors cursor-pointer mt-4"
        >
          Verify OTP
        </button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="text-center py-6">
        <p className="text-emerald-400 text-lg font-semibold">
          ✔ Successfully Verified!
        </p>
        <p className="text-gray-400 mt-2 text-sm">
          Thank you! Our team will contact you shortly.
        </p>
      </div>
    );
  }
}
