import React, { useState } from "react";

const Pagination = ({ pages, currentButton, setCurrentButton }) => {
  const [arrOfCurrButton, setArrOfCurrButton] = useState([]);

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  return (
    <div>
      <div className="pagination-container">
        <a
          href="!#"
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          prev
        </a>

        {arrOfCurrButton.map((page, index) => {
          return (
            <a
              key={index}
              onClick={() => setCurrentButton(page)}
              href="!#"
              className={currentButton === page ? "active" : ""}
            >
              {page}
            </a>
          );
        })}
        <a
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
