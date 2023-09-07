import React from "react";
import "./custom.css";
import { Link } from "react-router-dom";
const Post = ({ data }) => {
  return (
    <div className="container-post row d-flex justify-content-center m-auto bg-white rounded shadow-lg mt-5">
      <div className="col mb-3">
        <h4 className="text-center">{data.title}</h4>
        <p className="text-left">{data.body}</p>

        <Link aria-current="page" to="/posts">
          <button className="btn btn-primary">Вернуться</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
