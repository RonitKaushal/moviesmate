import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet-async";


const MainLayout = () => {
  return (
    <div>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Your website description here." />
  <meta name="keywords" content="React, Vite, SEO, Web Development" />
  <meta name="author" content="Your Name" />


  <meta property="og:title" content="Your Website Title" />
  <meta property="og:description" content="Your website description here." />
  <meta property="og:image" content="/public/your-image.png" />
  <meta property="og:url" content="https://yourwebsite.com" />
  <meta property="og:type" content="website" />


  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Website Title" />
  <meta name="twitter:description" content="Your website description here." />
  <meta name="twitter:image" content="/public/your-image.png" />
</head>
        <Navbar />
        <Outlet />
    </div>
  );
};

export default MainLayout;
