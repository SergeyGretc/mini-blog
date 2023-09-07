import React from "react";
import "./custom.css";
import { contactData as data } from "./utils/cantactData";

const Contakts = () => {
  return (
    <>
      <div className="container-my offset-md-3 shadow p-4 mx-auto mt-5 row d-flex justify-content-center m-auto">
        <h1 className="text-center">Контакты</h1>
        {data.map((el) => (
          <div className="d-flex justify-content-between mb-3" key={el.id}>
            <span>{el.title}</span>
            <a href={el.adress}>{el.text}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contakts;
