// src/config/menuConfig.js
const menuConfig = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
   {
    title: "Luxury Villas",
    path: "/villa",
    children: [
      { title: "Kaira", path: "/kaira-2" },
      { title: "Bilvadara", path: "/bilvadhara" },
      { title: "Niharika(Coming soon)", path: "/niharika" },
    ],
  },
  { title: "Revenue Generation", path: "/revenue" },
  {
    title: "Managed Farmlands",
    path: "/farmland",
  },
 
  // { title: "Contact Us", path: "/contact" },
];

export default menuConfig;
