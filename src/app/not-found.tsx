import style from "./page.module.css";

function NotFoundPage() {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorContent}>
        <div className={style.errorMessage}>
          <div>Page non trouvé</div>
          <div>Veuillez consulter le service technique.</div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
