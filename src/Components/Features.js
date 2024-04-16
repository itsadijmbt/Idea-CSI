import { useEffect, useRef, useState } from "react";
import classes from "../UI/Features.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const [display, setdisplay] = useState("");
  window.addEventListener("resize", function () {
    if (window.innerWidth < 680) setdisplay(false);
    else setdisplay(true);
  });

  const dataArr = [
    {
      title: "Fast",
      describe:
        " With the all new model Photon is faster and secure.The new model boasts 37% better response rates",
    },
    {
      title: "Intelligence",
      describe:
        "New model Photon ensures the images are crisp clear and relevant that matches the description.",
    },

    {
      title: "Efficient",
      describe:
        "With the all new model Photon is more  secure than ever.The new model has lesser data leakage and image conussions",
    },
    {
      title: "Fast",
      describe:
        " With the all new model Photon is faster and secure.The new model boasts 37% better response rates",
    },
    {
      title: "Intelligence",
      describe:
        "New model Photon ensures the images are crisp clear and relevant that matches the description.",
    },

    {
      title: "Efficient",
      describe:
        "With the all new model Photon is more  secure than ever.The new model has lesser data leakage and image conussions",
    },
  ];
  const [ct, sct] = useState(0);
  const [title, stitle] = useState("Fast");

  setTimeout(() => {
    if (ct >= 0 && ct < 2) {
      sct((prev) => prev + 1);
    } else sct(0);
  }, 4000);

  return (
    <AnimatePresence>
      {display && (
        <motion.div key={"fast"} className={classes.features_cards}>
          <div className={classes.cards}>
            <h1 className={classes.feature_desc}>Fast</h1>
            <p className={classes.feature_details}>
              With the all new model Photon is faster and secure.The new model
              has 37% better response rates
            </p>
          </div>
          <div className={classes.cards}>
            <h1 className={classes.feature_desc}>Intelligent</h1>
            <p className={classes.feature_details}>
              New model Photon ensures the images are crisp clear and relevant
              that matches the description.
            </p>
          </div>
          <div className={classes.cards}>
            <h1 className={classes.feature_desc}>Reliable</h1>
            <p className={classes.feature_details}>
              With the all new model Photon is more secure than ever.The new
              model has 105% lesser data leakage and image conussions.
            </p>
          </div>
        </motion.div>
      )}

      {!display && (
        <motion.div className={classes.features_cards_2}>
          <div className={classes.featured}>Features</div>
          <div
          
        
            className={classes.cards_2}
          >
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: ["100%", "0%"],
              }}
              exit={{
                scale: 1,
                opacity: 0.8,
                x: ["0%", "-100%"],
              }}
              key={dataArr[ct].title}
              className={classes.feature_desc_2}
            >
              {ct <= 2 && dataArr[ct].title}
            </motion.h1>
            <motion.p 
             initial={{ scale: 0, opacity: 0 }}
             animate={{
               scale: 1,
               opacity: 1,
               x: ["100%", "0%"],
             }}
             exit={{
               scale: 1,
               opacity: 0.8,
               x: ["0%", "-100%"],
             }}
             key={dataArr[ct].describe}className={classes.feature_details_2}>
              {ct <= 2 && dataArr[ct].describe}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
