import React from "react";
import Logo from "../../elements/Logo/Logo";
import Tabs from "../Tabs/Tabs";

import "./_sideMenu.scss";
import UserInfo from "../UserInfo/UserInfo";

const SideMenu = (props) => {
  return (
    <section className={`side-menu`}>
      <div className="side-menu__wrapper">
        <header className="side-menu__header">
          <Logo />
        </header>
        <Tabs
          tabs={props.tabs}
          onTabClick={props.onTabClick}
          activeTabId={props.activeTabId}
        />
        <footer className="side-menu__footer">
          <UserInfo />
        </footer>
      </div>
    </section>
  );
};

export default SideMenu;
