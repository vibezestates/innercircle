import React from "react";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";

export default function ContactForm({
  buttonText = "Book A Private Consultation",
  showPhoneButton = true,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const submitForm = async (data) => {
    console.log("FORM VALUES:", data); // logs final values
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-2">

      {/* NAME */}
      <div className="mb-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
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

      {/* CONSENT CHECKBOX */}
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
            I authorise Vibez and its representatives to call, SMS, Email or WhatsApp me about its products and offers.
          </span>
        </label>

        {errors.consent && (
          <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-2 pt-4">
        <button
          type="Book A Private Consultation"
          disabled={isSubmitting}
          className="flex-1 bg-[#104D39] hover:bg-[#104d39a6] text-white font-medium py-4 px-6 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center"
        >
          {/* background: #104D39; */}

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
