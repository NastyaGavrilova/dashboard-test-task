import React from "react";
import { ReactComponent as Chevron } from "../../assets/icons/chevron-right-2.svg";
import "./_listItem.scss";
const ListItem = ({ children, itemName, itemId, activeTabId, onTabClick }) => {
  return (
    <li
      className={`tabs__item ${activeTabId === itemId ? "active" : ""}`}
      onClick={onTabClick}
    >
      <div
        className={`tabs__item-wrapper ${
          activeTabId === itemId ? "active" : ""
        }`}
      >
        {children}
        <p
          className={`tabs__item-name  ${
            activeTabId === itemId ? "active" : ""
          }`}
        >
          {itemName}
        </p>
      </div>
      {itemId === 1 ? (
        ""
      ) : (
        <Chevron
          className={`tabs__item-chevron  ${
            activeTabId === itemId ? "active" : ""
          }`}
        />
      )}
    </li>
  );
};

export default ListItem;
