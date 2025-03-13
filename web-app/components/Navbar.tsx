import React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "FAQs", id: "faq" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smoother easing
        opacity: { duration: 0.6 },
      }}
      className={`fixed ${hasScrolled ? "top-4" : "top-10"} left-0 right-0 z-999999 w-[90vw] mx-auto
        bg-[rgba(25,28,28,0.36)] backdrop-blur-sm transition-all duration-300 
        border-[1px] border-[#99728D] rounded-[5px]`}
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="flex-shrink-0">
              <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.2441 16.0762L5.75348 8.36206C5.31605 8.11307 4.83343 7.95193 4.33319 7.88784C3.83294 7.82376 3.32485 7.85798 2.83795 7.98857C2.35105 8.11915 1.89486 8.34355 1.49543 8.64893C1.096 8.95431 0.761141 9.33469 0.509989 9.76837C0.258837 10.202 0.0963014 10.6805 0.0316651 11.1765C-0.0329713 11.6724 0.00156277 12.1762 0.133283 12.6589C0.265002 13.1416 0.491331 13.5939 0.799354 13.9899C1.10738 14.3859 1.49106 14.7179 1.92849 14.9669L15.4191 22.681C16.3004 23.1854 17.3478 23.3221 18.3308 23.0609C19.3137 22.7998 20.1518 22.1622 20.6606 21.2884C21.1694 20.4147 21.3073 19.3763 21.0438 18.4017C20.7804 17.4272 20.1373 16.5963 19.256 16.0919L19.2441 16.0762Z"
                  fill="white"
                />
                <path
                  d="M46.1143 8.36239L32.6237 0.652184C31.7423 0.147748 30.695 0.0110862 29.712 0.272241C28.7291 0.533395 27.891 1.17099 27.3822 2.04475C26.8734 2.91852 26.7355 3.95687 26.9989 4.93141C27.2624 5.90594 27.9055 6.73681 28.7868 7.24125L42.2774 14.9514C43.1587 15.4559 44.2061 15.5926 45.189 15.3314C46.172 15.0702 47.0101 14.4326 47.5189 13.5589C48.0277 12.6851 48.1656 11.6468 47.9022 10.6722C47.6387 9.69769 46.9956 8.86682 46.1143 8.36239Z"
                  fill="white"
                />
                <path
                  d="M41.7455 15.8679L35.4565 12.2686L28.8024 16.0764C28.366 16.3262 27.9835 16.6588 27.6768 17.0551C27.37 17.4514 27.145 17.9037 27.0146 18.3863C26.8841 18.8688 26.8508 19.3721 26.9166 19.8674C26.9824 20.3627 27.1459 20.8403 27.3978 21.273C27.6497 21.7056 27.9852 22.0848 28.3849 22.3889C28.7847 22.6931 29.2409 22.9161 29.7276 23.0455C30.2144 23.1748 30.722 23.2078 31.2216 23.1426C31.7212 23.0774 32.2029 22.9153 32.6393 22.6655L43.4715 16.4659C42.8635 16.3751 42.2781 16.1723 41.7455 15.8679V15.8679Z"
                  fill="white"
                />
                <path
                  d="M6.29307 7.44574L12.59 11.0333L19.2441 7.22545C19.7179 6.99721 20.1392 6.67468 20.4819 6.27795C20.8245 5.88122 21.081 5.41881 21.2355 4.9195C21.39 4.42019 21.4391 3.89467 21.3798 3.37571C21.3205 2.85676 21.154 2.35549 20.8908 1.9031C20.6276 1.4507 20.2732 1.05689 19.8497 0.746207C19.4263 0.435528 18.9428 0.21464 18.4295 0.0972813C17.9162 -0.020077 17.384 -0.0313817 16.866 0.0640758C16.3481 0.159533 15.8556 0.359696 15.4191 0.652112L4.58691 6.85174C5.18766 6.94397 5.76606 7.14535 6.29307 7.44574V7.44574Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className=" md:block">
              <div className="text-white">
                <div className="font-[productsans] text-sm font-medium">Google Developer Student Clubs</div>
                <div className="font-[productsans] text-xs opacity-90 font-">Vellore Institute of Technology</div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-white hover:text-gray-300 transition-colors text-sm md:text-lg xl:text-xl font-raleway"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-3 space-y-3">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: isOpen ? 0.1 * index : 0,
                ease: "easeOut",
              }}
              className="block text-white/90 hover:text-white transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

