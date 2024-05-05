import React from "react";
import Styles from "../Styles/jobpost.module.css";
import img1 from "../assets/photosnap.svg";
import img2 from "../assets/manage.svg";
import img3 from "../assets/account.svg";
import img4 from "../assets/myhome.svg";
import img5 from "../assets/loop-studios.svg";
import img6 from "../assets/faceit.svg";
import img7 from "../assets/shortly.svg";
import img8 from "../assets/insure.svg";
import img9 from "../assets/eyecam-co.svg";
import img10 from "../assets/the-air-filter-company.svg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Jobpost = ({ job, handleInsertFilters }) => {
  return (
    <div className={Styles.jobPostWrapper}>
      <section className={Styles.section1}>
        <img src={images[job.id - 1]} alt="" width={100} className={Styles.image} />

        <div className={Styles.jobDetailsSection}>
          <div className={Styles.details1}>
            <span className={Styles.company}>{job.company}</span>
            {job.new && <span className={Styles.newBanner}>New</span>}
            {job.featured && (
              <span className={Styles.featuresBanner}>Features</span>
            )}
          </div>

          <div>
            <span className={Styles.jobPosition}>{job.position}</span>
          </div>

          <div className={Styles.details3}>
            <span>{job.postedAt}</span>
            <span className={Styles.dot}></span>
            <span>{job.contract}</span>
            <span className={Styles.dot}></span>
            <span>{job.location}</span>
          </div>
        </div>
      </section>

      <section className={Styles.section2}>
        <span
          className={Styles.tabOption}
          onClick={() => handleInsertFilters(job.role,"role")}
        >
          {job.role}
        </span>
        <span
          className={Styles.tabOption}
          onClick={() => handleInsertFilters(job.level,"level")}
        >
          {job.level}
        </span>
        {job.languages.map((language, index) => (
          <span
            key={index}
            className={Styles.tabOption}
            onClick={() => handleInsertFilters(language,"languages")}
          >
            {language}
          </span>
        ))}
        {job.tools.length > 0 &&
          job.tools.map((tool, index) => (
            <span
              key={index}
              className={Styles.tabOption}
              onClick={() => handleInsertFilters(tool,"tools")}
            >
              {tool}
            </span>
          ))}
      </section>
    </div>
  );
};

export default Jobpost;
