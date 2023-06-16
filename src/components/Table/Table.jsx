import React from "react";

import TableHead from "../../elements/TableHead/TableHead";
import TableRow from "../../elements/TableRow/TableRow";
import "./_table.scss";
const Table = (props) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {props.customers.map((item, i) => (
          <TableRow
            key={item.id}
            customerName={item.name}
            company={item.company}
            phone={item.phone}
            email={item.email}
            country={item.country}
            status={item.status}
            count={i}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
