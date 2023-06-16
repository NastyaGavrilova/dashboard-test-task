import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../elements/Logo/Logo";
import Tabs from "../Tabs/Tabs";
import UserInfo from "../UserInfo/UserInfo";
import "./_sideMenu.scss";
const MobileSideMenu = (props) => {
  return (
    <AnimatePresence>
      {props.sideBar && (
        <>
          <motion.section
            className="mobile-side-menu "
            initial={{ x: "-100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
          >
            <div className="mobile-side-menu__wrapper">
              <header className="mobile-side-menu__header">
                <Logo />
              </header>
              <Tabs
                tabs={props.tabs}
                onTabClick={props.onTabClick}
                activeTabId={props.activeTabId}
              />
              <footer className="mobile-side-menu__footer">
                <UserInfo />
              </footer>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSideMenu;
