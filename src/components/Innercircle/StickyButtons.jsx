import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

function StickyButtons() {
  const handleContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+918550882882";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918550882882", "_blank");
  };

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-[500px] mx-auto flex gap-2 p-3">
        <button
          onClick={handleContact}
          className="flex-1 premium-gold glow-border bg-[#104D39] hover:bg-[#0d3d2d] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span className="text-sm uppercase">Contact</span>
        </button>

        <button
          onClick={handleCall}
          className="flex-1 premium-gold glow-border bg-[#104D39] hover:bg-[#0d3d2d] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm uppercase">Call</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 premium-gold glow-border bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm uppercase">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default StickyButtons;