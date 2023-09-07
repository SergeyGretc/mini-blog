import React from "react";

const AboutUs = () => {
  return (
    <div className="containerd-flex justify-content-between mt-5 m-auto">
      <h1 className="text-center">Данная страница находится в разработке</h1>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
