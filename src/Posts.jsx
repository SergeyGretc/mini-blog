import React from "react";

import { useNavigate } from "react-router-dom";
const Posts = ({ data }) => {
  let navigate = useNavigate();
  function handleClick(id) {
    navigate(`${id}`);
  }
  return (
    <div className="container row d-flex justify-content-between mt-5 m-auto">
      {data.map((el) => (
        <div key={el.id} className="col-5 mb-3">
          <h4 className="text-center">{el.title}</h4>
          <p className="text-left">
            {el.body.length >= 300
              ? el.body.substring(0, 300) + "..."
              : el.body}
          </p>

          <button
            className="btn btn-primary"
            onClick={() => {
              handleClick(el.id);
            }}
          >
            Перейти
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
