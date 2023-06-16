import React from "react";
import "./_tableHead.scss";
const TableHead = () => {
  const tableHeadCells = [
    "Customer Name",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status",
  ];
  return (
    <thead className="table-head">
      <tr className="table-head__row">
        {tableHeadCells.map((item, i) => (
          <th
            className="table-head__cell"
            style={{
              width: `${
                i === 0
                  ? "210px"
                  : i === 1
                  ? "131px"
                  : i === 2
                  ? "156px"
                  : i === 3
                  ? "207px"
                  : i === 4
                  ? "140px"
                  : ""
              }`,
            }}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
