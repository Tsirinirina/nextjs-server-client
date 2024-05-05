"use client";

import style from "./page.module.css";

const error = ({}) => {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorContent}>
        <div className={style.errorMessage}>
          <div>Une erreur est survenue.</div>
          <div>S'il vous plaît, veuillez contacter le service technique.</div>
        </div>
      </div>
    </div>
  );
};

export default error;
