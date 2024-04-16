import { NavLink } from "react-router-dom";
import classes from "../UI/Header.module.css";
import menu from "../Images/menu-removebg-preview.png";
import {motion , AnimatePresence , Variants} from 'framer-motion'
import { useEffect, useState } from "react";
function Header() {
  const [display, setdisplay] = useState(false);

  const displayHam = () => {
    setdisplay((prev) => {
      return !prev;
    });
  };

  const [active, setActive] = useState(true);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 680) {
      setActive(true);
    }
  });

  const variants= {
    close: {opacity:0,
      y:'-100%'},
    open:{
      y:'0%',
      opacity : 1,

    }
    
  };
  

  return (
    <AnimatePresence>
      <motion.div
        
      className={classes.main_header}>


        {active && <motion.div
    
        
        className={classes.ham} onClick={displayHam}>
          </motion.div>}

        {display && (
          <motion.div
            
         
          

            className={classes.hamMenu}>
            <motion.div
             
            className={classes.headMenu}>PHOTON</motion.div>
            <div
       
          
            className={classes.content}>
              <NavLink
                to="/root/about"
         
                className={(isA) => (isA ? classes.content : classes.content)}
              >
                About
              </NavLink>
            </div>
            <div
           
            className={classes.content}>
              <NavLink
                to="/"
                onClick={displayHam}
             
                className={(isA) => (isA ? classes.content : classes.content)}
              >
                Home
              </NavLink>
            </div>

            <div
             
            Variants={variants}
            className={classes.content} onClick={displayHam}>
              Exit
            </div>
          </motion.div>
        )}

        <div className={classes.logo_container}>
          <NavLink
            to="/"
            className={(isActive) => (isActive ? classes.logo : classes.logo)}
          >
            PHOTON
          </NavLink>
        </div>

        <motion.ul className={classes.menu_container}>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/root/about">About</NavLink>
        </motion.ul>

        <div className={classes.search}>
          <button className={classes.search_btn}>SignUp</button>
        </div>
      </motion.div>
    
    </AnimatePresence>
  );
}

export default Header;
