// import React from "react";
// import "../App.css";
// import Carousel from "../components/Carousel/Carousel";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar/Navbar";
// import Cards from "../components/Cards/Cards";
// import Benifits from "../components/Benifits/Benifits";
// import Experience from "../components/Experience/Experience";

// const Home = () => {
//   return (
//     <div>
//       <Carousel />
//       <Cards />
//       <Benifits />
//       <Experience/>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "../App.css";
import Carousel from "../components/Carousel/Carousel";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";
import Benifits from "../components/Benifits/Benifits";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const Home = () => {
  return (
    <div>

      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Carousel />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Cards />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Benifits />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Experience />
      </motion.div>

      <Footer/>
    </div>
  );
};

export default Home;

// import React from "react";
// import "../App.css";
// import Carousel from "../components/Carousel/Carousel";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar/Navbar";
// import Cards from "../components/Cards/Cards";
// import Benifits from "../components/Benifits/Benifits";
// import Experience from "../components/Experience/Experience";
// import Footer from "../components/Footer/Footer";

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const smoothZoom = {
//   hidden: { opacity: 0, scale: 0.98 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const slightDelay = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
// };

// const slowSlideUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
// };

// const fadeOnly = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
// };

// const Home = () => {
//   return (
//     <div>
//       {/* Carousel - Gentle Fade-in with Slight Lift */}
//       <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//         <Carousel />
//       </motion.div>

//       {/* Cards - Soft Zoom-in Effect */}
//       <motion.div variants={smoothZoom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//         <Cards />
//       </motion.div>

//       {/* Benefits - Minimal Fade-in with Slight Delay */}
//       <motion.div variants={slightDelay} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//         <Benifits />
//       </motion.div>

//       {/* Experience - Slow Slide-up Effect */}
//       <motion.div variants={slowSlideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//         <Experience />
//       </motion.div>

     
//       <Footer />
//     </div>
//   );
// };

// export default Home;
