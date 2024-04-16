import { NavLink } from "react-router-dom";
import classes from "../UI/Header.module.css";
import styles from "../UI/HeroBanner.module.css";
export default function About() {
  const s = () => {
    console.log("About");
  };

  return (
    <div className={styles.con}>
      {" "}
      <div className={styles.main_header_bottom}>
        <div className={styles.bt}>
          <NavLink
            to="https://www.linkedin.com/in/aditya-bhatt-a8010224b"
            className={(isActive) =>
              isActive ? styles.banner_desc : styles.banner_desc
            }
          >
            Developed By Aditya Bhatt
          </NavLink>
          This is a project enables users to search and create AI images using a
          prompt. The project runs on React , redux, JSX , HTML and CSS, netlify
          app hosting. The project utilizes API calling that fosters image
          package transfer.
        </div>
      </div>
    </div>
  );
}
