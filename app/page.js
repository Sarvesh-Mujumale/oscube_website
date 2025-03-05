"use client";
import React from "react";
import { Link } from "react-scroll";
import * as framerMotion from "framer-motion";
const motion = framerMotion.motion;
import { FaLaptopCode, FaMobileAlt, FaPalette, FaTools } from "react-icons/fa";

const Navbar = () => (
  <motion.nav initial={{ y: -50 }} animate={{ y: 0 }} className="bg-white p-6 text-black flex justify-between shadow-lg md:flex-row flex-col items-center text-center fixed top-0 left-0 w-full z-50">
    <h1 className="text-xl font-bold">OScube</h1>
    <div className="flex flex-wrap justify-center mt-2 md:mt-0 ">
      <Link className="mr-7 cursor-pointer hover:text-blue-600" to="home" smooth={true} duration={1000}>Home</Link>
      <Link className="mr-7 cursor-pointer hover:text-blue-600" to="about" smooth={true} duration={800}>About Us</Link>
      <Link className="mr-7 cursor-pointer hover:text-blue-600" to="services" smooth={true} duration={800}>Services</Link>
      <Link className="cursor-pointer hover:text-blue-600" to="contact" smooth={true} duration={800}>Contact</Link>
    </div>
  </motion.nav>
);

const HeroSection = () => (
  <motion.section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative flex flex-col md:flex-row justify-center items-center min-h-screen p-6 md:p-12 bg-[#1A2B6D] text-blue-800 text-center md:text-left">
    <img src="bg-image.avif" alt="Hero Image" className="absolute top-[37px] left-0 w-[100%] h-[95%] object-cover z-0" />
    <div className="relative md:w-1/2 p-6 md:text-left mt-[150px] bg-white bg-opacity-70 rounded-lg shadow-lg z-10 md:max-w-2xl md:ml-auto animate-slideRight">
      <motion.h1 className="text-3xl md:text-5xl font-extrabold tracking-wide" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
        Empowering Businesses with Technology
      </motion.h1>
      <motion.p className="mt-4 text-xl md:text-xl max-w-2xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      Transform your business with Technological services, software development, Web Designing, UI/UX design, App Development, Maintenance & support.
      </motion.p>
    </div>
  </motion.section>
);

const AboutUs = () => (
  <motion.section 
    id="about" 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }} 
    className="flex flex-col md:flex-row items-center min-h-screen p-8 bg-blue-100 text-blue-800">
    <motion.div 
      className="md:w-1/2 text-left pr-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="mt-[100px] text-5xl font-extrabold mb-6">About Us</h2>
      <p className="text-xl">
        OScube is a dynamic company dedicated to delivering top-notch technical services to businesses, organizations, and others in need of innovative solutions. 
        We specialize in creating powerful web and mobile applications that help businesses thrive in a fast-paced digital world. 
        Our mission is to empower companies with cutting-edge technology, enabling them to reach their goals and beyond.
      </p>
    </motion.div>
    <motion.div 
      className="md:w-1/2 flex justify-center mt-6 md:mt-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src="about.jpg" 
        alt="Tech Team" 
        className="w-full max-w-lg rounded-xl shadow-lg" 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  </motion.section>
);

const Services = () => {
  return (
    <motion.section id="services" className="flex flex-col items-center text-center min-h-screen p-12 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mt-20 mb-4 text-cyan-400">Our Services</h2>
      <p className="text-lg md:text-2xl mb-12 text-gray-300">What We Provide</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div key={index} className="p-6 bg-[#1a1a2e] rounded-xl shadow-xl flex flex-col items-center justify-center border border-gray-700 hover:border-pink-500 transition-all duration-300" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }}>
            <motion.div className="text-4xl md:text-5xl mb-4 text-pink-400">{service.icon}</motion.div>
            <h3 className="text-lg md:text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const services = [
  { title: "Web Development", icon: <FaLaptopCode />, description: "We build modern, responsive, and high-performance websites using the latest technologies to ensure your online presence stands out." },
  { title: "UI/UX Design", icon: <FaPalette />, description: "We craft visually stunning and intuitive designs to enhance user experience, ensuring your product is both functional and aesthetically pleasing." },
  { title: "Maintenance & Support", icon: <FaTools />, description: "We provide ongoing maintenance and support to keep your applications running smoothly, ensuring security, updates, and performance optimization." },
  { title: "App Development", icon: <FaMobileAlt />, description: "Our team creates powerful and user-friendly mobile applications tailored to your business needs, ensuring seamless performance across devices." },
];

const ContactForm = () => {
  const openWhatsApp = () => {
    const phoneNumber = "7558241438";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const openEmail = () => {
    const email = "oscube142023@gmail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  const openInstagram = () => {
    const instagramHandle = "oscube_14";
    window.open(`https://www.instagram.com/${instagramHandle}`, "_blank");
  };

  const openCall = () => {
    const phoneNumber = "7558241438";
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-blue-200 text-blue-900 font-sans px-6 py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mt-[90px] mb-6 tracking-wide font-extrabold text-blue-700 drop-shadow-lg"
      >
        CONTACT US
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl text-center mb-10 text-gray-800"
      >
        Get In Touch With Us Now
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {contactOptions.slice(0, 2).map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-all cursor-pointer border border-gray-300 hover:shadow-xl hover:border-blue-400 w-full"
            onClick={option.title === "WhatsApp" ? openWhatsApp : option.title === "Call Us" ? openCall : undefined}
          >
            <img src={option.icon} alt={option.title} className="w-10 h-10 mb-3 drop-shadow-md" />
            <p className="text-lg font-semibold text-blue-700">{option.title}</p>
            <span className="text-xs text-gray-700">{option.contact}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-12 w-full max-w-4xl justify-center">
        {[contactOptions[2], contactOptions[3]].map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-1/2 flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-all cursor-pointer border border-gray-300 hover:shadow-xl hover:border-blue-400"
            onClick={option.title === "Email Us" ? openEmail : option.title === "Instagram" ? openInstagram : undefined}
          >
            <img src={option.icon} alt={option.title} className="w-10 h-10 mb-3 drop-shadow-md" />
            <p className="text-lg font-semibold text-blue-700">{option.title}</p>
            <span className="text-xs text-gray-700">{option.contact}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const contactOptions = [
  {
    title: "Call Us",
    contact: "7558241438",
    icon: "telephone.png",
  },
  {
    title: "WhatsApp",
    contact: "7558241438",
    icon: "whatsapp.png",
  },
  {
    title: "Instagram",
    contact: "oscube_14",
    icon: "instagram.png",
  },
  {
    title: "Email Us",
    contact: "oscube142023@gmail.com",
    icon: "gmail.png",
  },
];

const Footer = () => (
  <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-gray-900 text-white text-center p-4">
    <p>&copy; 2025 OScube. All rights reserved.</p>
  </motion.footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}
