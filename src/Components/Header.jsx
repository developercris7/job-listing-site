import React from "react";
import Styles from "../Styles/header.module.css";
import { IoMdClose } from "react-icons/io";

const Header = ({ filterTabs, handleRemoveFilters, handleClearAllFilters }) => {
  return (
    <header>
      {filterTabs.role.length ||
      filterTabs.level.length ||
      filterTabs.languages.length ||
      filterTabs.tools.length ? (
        <div className={`${Styles.filterTabSection}`}>
          <section className={`${Styles.tabsSection}`}>
            {filterTabs.role.map((role, index) => (
              <div className={Styles.filterTab} key={index}>
                <span>{role}</span>
                <IoMdClose
                  className={Styles.removeBtn}
                  onClick={() => handleRemoveFilters("role", index)}
                />
              </div>
            ))}

            {filterTabs.level.length > 0 &&
              filterTabs.level.map((level, index) => (
                <div className={Styles.filterTab} key={index}>
                  <span>{level}</span>
                  <IoMdClose
                    className={Styles.removeBtn}
                    onClick={() => handleRemoveFilters("level", index)}
                  />
                </div>
              ))}

            {filterTabs.languages.length > 0 &&
              filterTabs.languages.map((language, index) => (
                <div className={Styles.filterTab} key={index}>
                  <span>{language}</span>
                  <IoMdClose
                    className={Styles.removeBtn}
                    onClick={() => handleRemoveFilters("languages", index)}
                  />
                </div>
              ))}

            {filterTabs.tools.length > 0 &&
              filterTabs.tools.map((tool, index) => (
                <div className={Styles.filterTab} key={index}>
                  <span>{tool}</span>
                  <IoMdClose
                    className={Styles.removeBtn}
                    onClick={() => handleRemoveFilters("tools", index)}
                  />
                </div>
              ))}
          </section>
          <section
            className={Styles.clearSection}
            onClick={handleClearAllFilters}
          >
            <button className={Styles.clearButton}>Clear</button>
          </section>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
