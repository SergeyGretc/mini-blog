import React, { useEffect, useState } from "react";
import { paginate } from "./utils/paginate";
import Pagination from "./Pagination";
import Posts from "./Posts";
import { useParams } from "react-router";
import Post from "./Post";

const PostsPage = () => {
  const [data, setData] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const onPageChangeBack = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onPageChangeForward = (pages) => {
    if (currentPage === pages.length) {
      setCurrentPage(pages.length);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  if (data) {
    const count = data.length;
    const paginatedData = paginate(data, currentPage, pageSize);
    if (!param.postId) {
      return (
        <>
          <div>
            <Posts data={paginatedData} />
          </div>
          <Pagination
            currentPage={currentPage}
            count={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            onPageChangeBack={onPageChangeBack}
            onPageChangeForward={onPageChangeForward}
          />
        </>
      );
    } else if (param.postId) {
      const choosenPost = data.find((el) => el.id === +param.postId);

      return <Post data={choosenPost} />;
    }
  }
};

export default PostsPage;
