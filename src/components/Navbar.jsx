import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="imgtop">
            <img src="/public/gamer (2).png" alt="" />
            <h3>Swapnil</h3>
          </div>
        </motion.span>
        <div className="social">
          <a href="https://github.com/SwapnilPal12?tab=repositories">
            <img src="/public/github (1).png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/swapnil-pal-657b8b230/">
            <img src="/public/linkedin (1).png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
