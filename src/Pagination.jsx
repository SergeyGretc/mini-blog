import React from "react";
import _ from "lodash";
const Pagination = ({
  pageSize,
  count,
  onPageChange,
  currentPage,
  onPageChangeBack,
  onPageChangeForward,
}) => {
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li class="page-item">
          <button className="page-link" onClick={() => onPageChangeBack()}>
            {"Предыдущая"}
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={"page-item" + (currentPage === page ? " active" : "")}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li class="page-item">
          <button
            className="page-link"
            onClick={() => onPageChangeForward(pages)}
          >
            {"Следующая"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
