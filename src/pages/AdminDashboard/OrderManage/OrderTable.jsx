import React from "react";
import Table from "../../../components/shared/Table/Table";
import TableHeader from "../../../components/shared/table/TableHeader";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";
import { AiFillDelete } from "react-icons/ai";

const OrderTable = () => {
  const headers = ["ID", "Name", "Quantity", "Price", "Status", "Action"];
  const orders = [
    {
      ID: "1",
      Name: "Apples",
      Quantity: 10,
      Price: 2.99,
      Status: "In Stock",
    },
    {
      ID: "2",
      Name: "Orangesasdfadfadfasfadsf",
      Quantity: 5,
      Price: 3.49,
      Status: "In Stock",
    },
    {
      ID: "3",
      Name: "Bread",
      Quantity: 8,
      Price: 2.5,
      Status: "Out of Stock",
    },
    {
      ID: "4",
      Name: "Milk",
      Quantity: 15,
      Price: 1.99,
      Status: "In Stock",
    },
    {
      ID: "5",
      Name: "Cheese",
      Quantity: 3,
      Price: 4.99,
      Status: "In Stock",
    },
  ];
  return (
    <div className="min-h-[400px] bg-white mt-5 pt-5 overflow-x-auto">
      <Table>
        <TableHeader headers={headers} cellWidth="35%" />
        <TableBody>
          {orders?.map((row, idx) => (
            <>
              <TableRow
                className=" font-[300] text-gray-700 text-sm"
                key={row.ID}
                cells={Object.values(row).slice(0, -1)}
                cellWidth="35%"
              >
                <th className="text-start w-[35%]">Pending</th>
                <th className="text-start w-[35%]">
                  <AiFillDelete className="text-red-500 text-2xl" />
                </th>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
