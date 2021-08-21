import React from "react";
import { connectPagination } from "react-instantsearch-dom";
import { Link } from "react-router-dom";

const CustomPagination = ({
  currentRefinement,
  nbPages,
  refine,
  createURL,
  padding,
  paginateHandl,
}) => (
  <div className="ais-Pagination">
    <ul className="ais-Pagination-list">
      {new Array(padding + 1).fill(null).map((_, index) => {
        const page = currentRefinement - padding + index;
        const style = {
          fontWeight: currentRefinement === page ? "bold" : "",
        };
        if (page > 0) {
          return (
            <li
              className="ais-Pagination-item ais-Pagination-item--page"
              key={index}
            >
              <Link
                className="ais-Pagination-link ais-Pagination-link--selected"
                to={createURL(page)}
                style={style}
                onClick={(event) => {
                  event.preventDefault();
                  paginateHandl(page);
                  refine(page);
                }}
              >
                {page}
              </Link>
            </li>
          );
        }
      })}
      {new Array(padding).fill(null).map((_, index) => {
        const page = currentRefinement + index + 1;
        const style = {
          fontWeight: currentRefinement === page ? "bold" : "",
        };

        return (
          <li
            className="ais-Pagination-item ais-Pagination-item--page"
            key={index}
          >
            <Link
              className="ais-Pagination-link"
              to={createURL(page)}
              style={style}
              onClick={(event) => {
                event.preventDefault();
                paginateHandl(page);
                refine(page);
              }}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default connectPagination(CustomPagination);
