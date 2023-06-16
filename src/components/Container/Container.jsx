import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import ProductMenu from "../ProductMenu/ProductMenu";
import MobileSideMenu from "../SideMenu/MobileSideMenu";
import { motion } from "framer-motion";

import "./_container.scss";

const Path = (props, { isOpen }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
    initial={isOpen ? "" : "closed"}
    animate={isOpen ? "open" : ""}
  />
);
const Container = (props) => {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(
    () => props.tabs.find((tab) => tab.id === activeTabId),
    [activeTabId, props.tabs]
  );
  const [sideBar, setSideBar] = React.useState(false);
  return (
    <main className="container">
      <SideMenu
        tabs={props.tabs}
        onTabClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <MobileSideMenu
        tabs={props.tabs}
        onTabClick={setActiveTab}
        activeTabId={activeTabId}
        sideBar={sideBar}
      />
      <div
        className="container__mobile-filter"
        style={{ display: `${sideBar ? "block" : "none"}` }}
      ></div>

      <button
        onClick={() => setSideBar((sideBar) => !sideBar)}
        className="container__toggle-button"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            isOpen={sideBar}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            isOpen={sideBar}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            isOpen={sideBar}
          />
        </svg>
      </button>
      <ProductMenu tab={activeTab} />
    </main>
  );
};

export default Container;
