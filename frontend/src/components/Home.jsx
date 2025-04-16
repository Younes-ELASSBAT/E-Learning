import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { FaHome, FaChalkboardTeacher, FaClipboardList, FaInfoCircle,FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Create refs for each section
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_no6a84k', 'template_ymido3w', e.target, 'x5QT_OXOQ2TopOfL0')
      .then(() => {
        alert("Message Sent Successfully");
        // Clear form inputs
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  }

  return (
    <>
    <div className="min-h-screen flex flex-col" ref={homeRef}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className=" sm:h-16 sm:w-16">
                  <DotLottieReact
                    src="https://lottie.host/d260bd00-7db4-477f-8a78-67b9addee382/kZGsKssDVC.lottie"
                    loop
                    autoplay
                  />
                </div>
                <span className="ml-3 text-lg sm:text-xl font-semibold text-gray-900">E-Learning</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex items-center justify-center flex-1">
              <div className="flex items-center justify-center space-x-4">
                <button onClick={() => scrollToSection(homeRef)} className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md transition duration-150">
                  <FaHome className="text-lg" />
                  <span>Home</span>
                </button>
                <button onClick={() => scrollToSection(coursesRef)} className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md transition duration-150">
                  <FaChalkboardTeacher className="text-lg" />
                  <span>Courses</span>
                </button>
                <button onClick={() => scrollToSection(contactRef)} className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md transition duration-150">
                  <FaClipboardList className="text-lg" />
                  <span>Contact</span>
                </button>
                <button onClick={() => scrollToSection(aboutRef)} className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md transition duration-150">
                  <FaInfoCircle className="text-lg" />
                  <span>About Us</span>
                </button>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-4">
              <Link to="/auth/Login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-150">
                Login
              </Link>
              <Link to="/auth/Register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-150">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection(homeRef)} className="flex items-center space-x-1 block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md w-full text-left">
                  <FaHome className="text-lg" />
                  <span>Home</span>
                </button>
                <button onClick={() => scrollToSection(coursesRef)} className="flex items-center space-x-1 block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md w-full text-left">
                  <FaChalkboardTeacher className="text-lg" />
                  <span>Courses</span>
                </button>
                <button onClick={() => scrollToSection(contactRef)} className="flex items-center space-x-1 block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md w-full text-left">
                  <FaClipboardList className="text-lg" />
                  <span>Contact</span>
                </button>
                <button onClick={() => scrollToSection(aboutRef)} className="flex items-center space-x-1 block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md w-full text-left">
                  <FaInfoCircle className="text-lg" />
                  <span>About Us</span>
                </button>
                <Link to="/auth/Login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md">
                  Login
                </Link>
                <Link to="/auth/Register" className="block px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-30 lg:px-30 py-12 mt-24">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Learn a <span className="text-blue-900 underline decoration-bg-[#6c63ff]">New Skill</span><br />
            Everyday, Anytime,<br />
            and Anywhere.
          </h2>
          <p className="text-gray-600">
            <strong>1000+</strong> Courses covering all tech domains for you to learn and explore new opportunities. 
            Learn from Industry Experts and land your Dream Job.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Start Trial</button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">How it Works</button>
          </div>

          {/* Stats */}
          <div className="flex space-x-8 pt-6">
            <div>
              <p className="text-yellow-500 font-bold text-lg">1000+</p>
              <p className="text-sm text-gray-600">Courses to choose from</p>
            </div>
            <div>
              <p className="text-blue-600 font-bold text-lg">5000+</p>
              <p className="text-sm text-gray-600">Students Trained</p>
            </div>
            <div>
              <p className="text-red-500 font-bold text-lg">200+</p>
              <p className="text-sm text-gray-600">Professional Trainers</p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          <DotLottieReact
            src="https://lottie.host/c6391129-8c26-464e-9cd2-1415c8440ba2/xxXtJNfWII.lottie"
            loop
            autoplay
            className="w-full max-w-[400px] h-[400px] mx-auto"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section ref={coursesRef} className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Courses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our wide range of courses designed to help you grow.
            </p>
          </div>
          
          {/* Add your courses content here */}
          <div className="text-center text-gray-500">
            Courses content will be displayed here
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} id="about" className="py-16">
        <div className="max-w-3xl mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              About Us
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed">
                E-Learning is a premier online education platform dedicated to transforming how people learn and grow. 
                Founded in 2013, we've helped thousands of students master new skills through our innovative approach to 
                digital education. Our team of expert instructors and cutting-edge technology create an engaging learning 
                environment accessible to everyone. We believe education should be available to all, regardless of location 
                or background. Join our community today and start your journey toward personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Contact Us
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-3xl shadow-lg">
      <form className="space-y-6" onSubmit={sendEmail}>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            rows="6"
            className="w-full pl-10 pr-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-50 text-gray-600 rounded-full hover:bg-blue-100 transition duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
             Send     <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </form>
    </div>
          </div>
       
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8">
                  <DotLottieReact
                    src="https://lottie.host/d260bd00-7db4-477f-8a78-67b9addee382/kZGsKssDVC.lottie"
                    loop
                    autoplay
                  />
                </div>
                <span className="text-xl font-semibold">E-Learning</span>
              </div>
              <p className="text-gray-400">
                Empowering learners worldwide with quality education and innovative learning solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/Courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/Contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@elearning.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Education St, Learning City</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and course offerings.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} E-Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}