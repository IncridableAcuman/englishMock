import { Sun, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Auth = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-16 bg-white flex justify-between items-center px-6 shadow-md z-50"
      >
        <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">⚡</span>
        <div className="flex items-center gap-6">
          <Sun size={24} className="cursor-pointer" />
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            <p className="font-semibold" onClick={()=>navigate('/login')}>Login</p>
            <ArrowRight />
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="mt-16 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-5"
        >
          Empower your future with the <br />
          courses designed to fit your choice.
        </motion.h1>
        <p className="text-gray-500 max-w-2xl">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>

        {/* Input Section */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-5 w-full max-w-lg bg-gray-50 py-2 px-4 rounded flex shadow-md"
        >
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="flex-1 px-2 border-none outline-none bg-transparent" 
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Trusted Companies */}
      <p className="text-gray-600 font-semibold text-center">Trusted by learners from</p>
      <div className="flex justify-center items-center gap-5 mt-5 flex-wrap">
        {["google", "microsoft", "meta", "dropbox", "paypal"].map((brand, index) => (
          <motion.img 
            key={index}
            src={`./${brand}.svg`} 
            alt={brand}
            className="w-16 h-16"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      {/* Courses Section */}
      <div className="bg-gray-100 py-16 px-4">
        <h1 className="text-center text-3xl font-semibold pb-4">Learn from the best</h1>
        <p className="font-semibold text-gray-500 text-center max-w-3xl mx-auto">
          Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
        </p>
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img src="./england.png" alt="course" className="rounded w-full" />
              <h2 className="text-2xl font-semibold pt-3">Speaking</h2>
              <p className="text-gray-500 font-semibold">Learn to speak confidently in any situation with our speaking course.</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="font-semibold">5</p>
                <p className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</p>
                <p>(105)</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p 
          whileHover={{ scale: 1.05 }}
          className="text-center mt-10 border px-5 py-2.5 text-xs text-gray-400 cursor-pointer rounded-md w-max mx-auto"
        >Show all</motion.p>
      </div>
      {/* Testimonials */}
      <div className="">
        <h1 className="text-center text-3xl font-semibold py-10">What our learners say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <img src="./image.png" alt="user" className="w-12 h-12 rounded-full" />
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <p className="text-gray-500">Student</p>
                </div>
              </div>
              <p className="text-gray-500 font-semibold pt-3">
                "I have been learning with English for a while now and I have to say that I am very happy with the results."
              </p>
              <p className="text-blue-400 hover:underline cursor-pointer">Read more</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get started
        </button>
        <button className="flex items-center text-gray-700 font-semibold hover:text-gray-900 transition">
          Learn more <span className="ml-2">
            <ArrowRight size={24} />
          </span>
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Auth;
