import React from "react";
import Styles from "../Styles/header.module.css";
import { IoMdClose } from "react-icons/io";

const Header = ({ filterTabs }) => {
  return (
    <header>
      <div className={`${Styles.filterTabSection}`}>
        <section className={`${Styles.tabsSection}`}>

          {
            filterTabs.role.map((role) => (
              <div className={Styles.filterTab}>
                <span>{role}</span>
                <IoMdClose className={Styles.removeBtn} />
              </div>
            ))}

          {filterTabs.level.length > 0 &&
            filterTabs.level.map((level) => (
              <div className={Styles.filterTab}>
                <span>{level}</span>
                <IoMdClose className={Styles.removeBtn} />
              </div>
            ))}

          {filterTabs.languages.length > 0 &&
            filterTabs.languages.map((language) => (
              <div className={Styles.filterTab}>
                <span>{language}</span>
                <IoMdClose className={Styles.removeBtn} />
              </div>
            ))}

          {filterTabs.tools.length > 0 &&
            filterTabs.tools.map((tool) => (
              <div className={Styles.filterTab}>
                <span>{tool}</span>
                <IoMdClose className={Styles.removeBtn} />
              </div>
            ))}

          {/* <div className={Styles.filterTab}>
            <span>CSS</span>
            <IoMdClose className={Styles.removeBtn} />
          </div>
          <div className={Styles.filterTab}>
            {" "}
            <span>Javascript</span>
            <IoMdClose className={Styles.removeBtn} />
          </div> */}
        </section>
        <section className={Styles.clearSection}>
          <button className={Styles.clearButton}>Clear</button>
        </section>
      </div>
    </header>
  );
};

export default Header;
