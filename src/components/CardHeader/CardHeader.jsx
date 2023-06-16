import React from "react";
import "./_cardHeader.scss";
const CardHeader = ({ cardTitle, isCustomersCard }) => {
  return (
    <header className="card-header">
      <div className="card-header__wrapper">
        <h4 className="card-header__title">{cardTitle}</h4>
        {isCustomersCard ? (
          <p className="card-header__description">Active Members</p>
        ) : null}
      </div>
      {isCustomersCard ? (
        <form className="card-header__search-form">
          <input
            type="search"
            className="card-header__search-input"
            placeholder="Search"
          />
        </form>
      ) : null}
    </header>
  );
};

export default CardHeader;
