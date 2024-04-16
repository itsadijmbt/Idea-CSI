import { useDispatch } from "react-redux";
import classes from "../UI/HeroBanner.module.css";
import { NavLink } from "react-router-dom";
import { TextActions } from "../redux/TextSlice";
import { useState } from "react";
import DataController from "./DataController";
import { motion, AnimatePresence, easeIn } from "framer-motion";

function HeroBanner() {
  const dispatch = useDispatch();
  const [promt, setp] = useState("");

  const input = (event) => {
    setp(event.target.value);
  };
  const [dropdown, sd] = useState(false);
  const drop = () => {
    sd((prev) => !prev);
  };

  const response = () => {
    //console.log('data sent to slicer ', promt);
    dispatch(TextActions.addText(promt));
  };

  return (
    <AnimatePresence>
      <div className={classes.hero_banner}>
        <div className={classes.banner}>
          <motion.div
          initial={{
            opacity:0,
        
          }}
          animate={{
            opacity:[0,.5,1],
            x:['-100%' , '20%', '0%'],
           
          }}
          transition={{duration:1.3}}  
          
          className={classes.banner_title}>
            <h1>
              <strong>Generative AI on steroids</strong>{" "}
            </h1>
          </motion.div>

          <motion.h1 
          initial={{
            opacity:0,
        
          }}
          animate={{
            opacity:[0,.5,1],
            x:['100%' , '-20%', '0%'],
     
          }}
          transition={{delay:.51 , duration:1.3}}      
          className={classes.banner_desc_small}>
            Explore new horizons in <strong>art</strong>,{" "}
            <strong>design</strong>, and in <strong>problem-solving</strong>{" "}
            with our cutting-edge generative AI platform.
          </motion.h1>
        </div>
        <div className={classes.explore_holder}>
           <motion.button
           initial={{
            opacity:0,
           }}
           animate={{
            opacity:[0,.4,.7, 1],
            y:['-600%', '200%', '0%']
           }}
           transition={{delay:1.1}}
  

            whileTap={{
              scale: [1, 1.1, 1.1, 1],
            }}
            onClick={drop}
            className={classes.explore}
          >
            Experience Photon
          </motion.button>
        </div>
 <AnimatePresence>
        {dropdown && (
         
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0,0.7,0.9,1],
                scale: [0, .4,.9,1],
                width: `90%`,
                y: [,0,0, 0],
              }}
              exit={{
                opacity: [1,0.5,0],
                scale: [1.1, .5,0],
                y: [0, -20,0],
            
              }}
              transition={{duration:1}}
              className={classes.input_feed}
            >
              <h1 className={classes.input_feed_title}>
                Enter <strong>Image</strong> Description
              </h1>
              <div className={classes.boxNbtn}>
                <input
                  type="text"
                  className={classes.input_box}
                  onChange={input}
                ></input>
                <NavLink to="/root/images">
                  <button
                    className={classes.submit_response}
                    onClick={response}
                  >
                    Generate
                  </button>
                </NavLink>
              </div>
            </motion.div>
         
        )}
 </AnimatePresence>
        <div className={classes.feature}>Feature</div>
      </div>
    </AnimatePresence>
  );
}

export default HeroBanner;

/**/
