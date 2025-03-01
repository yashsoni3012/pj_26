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
