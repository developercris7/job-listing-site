import React from "react";
import Styles from "../Styles/header.module.css";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  return (
    <header>
    <div className={`${Styles.filterTabSection}`}>
      <section  className={`${Styles.tabsSection}`} >
        <div className={Styles.filterTab}>
          <span>HTML</span>
          <IoMdClose className={Styles.removeBtn} />
        </div>
        <div className={Styles.filterTab}>
          <span>Css</span>
          <IoMdClose className={Styles.removeBtn} />
        </div>
        <div className={Styles.filterTab}>
          {" "}
          <span>Javascript</span>
          <IoMdClose className={Styles.removeBtn} />
        </div>
      </section>
      <section className={Styles.clearSection}>
        <button className={Styles.clearButton}>Clear</button>
      </section>
      </div>
    </header>
  );
};

export default Header;
