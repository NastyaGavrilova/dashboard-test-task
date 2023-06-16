import React from "react";
import "./_productMenu.scss";
import CardHeader from "../CardHeader/CardHeader";
import Table from "../Table/Table";
import CardFooter from "../CardFooter/CardFooter";
export const customers = [
  {
    id: 11,
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    id: 22,
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    id: 33,
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    id: 44,
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    id: 55,
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    id: 66,
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    id: 77,
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    id: 88,
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];
const ProductMenu = (props) => {
  return (
    <section className={`product-menu`}>
      <div className="product-menu__wrapper">
        <h3 className="product-menu__greetings">
          Hello Evano<span>👋🏼,</span>{" "}
        </h3>
        <div className="product-menu__card">
          <CardHeader
            isCustomersCard={props.tab.name === "Customers" ? true : false}
            cardTitle={props.tab.tab}
          />
          <div className="product-menu__container">
            {props.tab.content === "Customers" ? (
              <Table customers={customers} />
            ) : (
              <div className="product-menu__content">
                <p className="product-menu__text">{props.tab.content}</p>
              </div>
            )}
          </div>
          {props.tab.content === "Customers" ? <CardFooter /> : null}
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
