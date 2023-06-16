import React from "react";
import _ from "lodash";
import "./_paginate.scss";
const Paginate = (props) => {
  const { active, size, step, onClickHandler } = props;

  const showingNumbers = step + 1;
  let startNumber = 2;
  let startArrayNumber = props.step;

  let needStartDots = false;
  let needEndDots = false;

  if (active > step) {
    startArrayNumber = active - step;

    needStartDots = active > step + startNumber ? true : false;
  }

  if (size > showingNumbers) {
    needEndDots = size > active + step + 1 ? true : false;

    if (size < active + step + 1) {
      startArrayNumber = size - showingNumbers;
    }
  }

  let contentNumber;
  return (
    <ul className="pagination-list">
      {active > 1 ? (
        <li
          className="pagination-list__item prev arrow-icon"
          onClick={() => onClickHandler(active - 1)}
        >
          &#60;
        </li>
      ) : (
        <li className="pagination-list__item prev arrow-icon disabled">
          &#x2039;
        </li>
      )}
      {size > showingNumbers + startNumber ? (
        <React.Fragment>
          <li
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            className={`pagination-list__item ${active === 1 && "active"}`}
          >
            1
          </li>
          {needStartDots && <span>...</span>}
          {_.times(showingNumbers, (i) => (
            <li
              key={i++}
              {...(contentNumber = needStartDots
                ? startArrayNumber
                : startNumber)}
              {...startNumber++}
              {...startArrayNumber++}
              className={`pagination-list__item ${
                active === contentNumber && "active"
              }`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {contentNumber}
            </li>
          ))}
          {needEndDots && <span className="pagination-list__dots">...</span>}
          <li
            className={`pagination-list__item ${active === size && "active"}`}
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
          >
            {size}
          </li>
        </React.Fragment>
      ) : (
        ((startArrayNumber = 1),
        _.times(size, (i) => (
          <li
            key={i++}
            className={`pagination-list__item ${
              active === startArrayNumber && "active"
            }`}
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
          >
            {startArrayNumber++}
          </li>
        )))
      )}
      {active < size ? (
        <li
          className="pagination-list__item next arrow-icon"
          onClick={() => onClickHandler(active + 1)}
        >
          &#62;
        </li>
      ) : (
        <li className="pagination-list__item next arrow-icon disabled">
          &#x203A;
        </li>
      )}
    </ul>
  );
};

export default Paginate;
