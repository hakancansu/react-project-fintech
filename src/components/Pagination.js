import React, { useState, useEffect } from "react";

const getPaginationData = (numberOfPages, currentButton, setCurrentButton, arrOfCurrButton, setArrOfCurrButton) => {
  let tempNumberOfpages = [...numberOfPages];
  let dotsInitial = "...";
  let dotsLeft = "... ";
  let dotsRight = " ...";
  if (currentButton >= 1 && currentButton <= 3) {
    tempNumberOfpages = [1, 2, 3, 4, "...", numberOfPages.length];
  } else if (currentButton === 4) {
    const sliced = numberOfPages.slice(0, 5);
    tempNumberOfpages = [...sliced, "...", numberOfPages.length];
  } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
    const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
    const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
    tempNumberOfpages = [
      1,
      dotsLeft,
      ...sliced1,
      ...sliced2,
      dotsRight,
      numberOfPages.length,
    ];
  } else if (currentButton > numberOfPages.length - 3) {
    // > 7
    const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
    tempNumberOfpages = [1, dotsLeft, ...sliced];
  } else if (currentButton === dotsInitial) {
    setCurrentButton(arrOfCurrButton[arrOfCurrButton.length - 3] + 1);
  } else if (currentButton === dotsRight) {
    setCurrentButton(arrOfCurrButton[3] + 2);
  } else if (currentButton === dotsLeft) {
    setCurrentButton(arrOfCurrButton[3] - 2);
  }

  setArrOfCurrButton(tempNumberOfpages);
}

const Pagination = ({ pages, currentButton, setCurrentButton }) => {
  const [arrOfCurrButton, setArrOfCurrButton] = useState([]);

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  useEffect(() => {
    getPaginationData(numberOfPages, currentButton, setCurrentButton, arrOfCurrButton, setArrOfCurrButton);
  }, [arrOfCurrButton, pages]);

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
