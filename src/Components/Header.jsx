import React, { useContext,useEffect } from "react";
import Styles from "../Styles/header.module.css";
import { IoMdClose } from "react-icons/io";
import { DataContext } from "../Context/ContextAPI";

const Header = () => {
  const {
    data,
    setJobLists,
    filterTabs,
    handleRemoveFilters,
    handleClearAllFilters,
  } = useContext(DataContext);

  useEffect(() => {
    const { role, languages, level, tools } = filterTabs;
    let filteredJobs = data;

    if (role.length > 0) {
      filteredJobs = filteredJobs.filter((job) => role.includes(job.role));
    }
    if (level.length > 0) {
      filteredJobs = filteredJobs.filter((job) => level.includes(job.level));
    }

    if (languages.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        languages.every((lan) => job.languages.includes(lan))
      );
    }

    if (tools.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        tools.every((lan) => job.tools.includes(lan))
      );
    }

    setJobLists(filteredJobs);
  }, [filterTabs, data, setJobLists]);

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
