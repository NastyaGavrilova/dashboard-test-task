import React from "react";
import Button from "../ButtonCell/Button";
import "./_tableRow.scss";
const TableRow = ({
  customerName,
  company,
  phone,
  email,
  country,
  status,
  count,
}) => {
  const cellContent = [customerName, company, phone, email, country];
  return (
    <>
      <tr className="table-body__row">
        {cellContent.map((item, i) => (
          <td
            className={`table-body__cell ${
              i === 0 ? "table-body__cell-1" : ""
            }`}
            key={item}
          >
            {item}
          </td>
        ))}
        <td className="table-body__cell-btn">
          <Button status={status} count={count} />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
