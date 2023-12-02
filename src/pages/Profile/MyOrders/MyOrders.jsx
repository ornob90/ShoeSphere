import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { BsCartPlus } from "react-icons/bs";
import TableHeader from "../../../components/shared/table/TableHeader";
import Table from "../../../components/shared/Table/Table";
import TableBody from "../../../components/shared/Table/TableBody";
import TableRow from "../../../components/shared/table/TableRow";

const MyOrders = () => {
  const headers = ["ID", "Name", "Quantity", "Price", "Status"];
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
    <DashboardProfileContainer>
      <ProfileHeader
        header="My Orders"
        icon={<BsCartPlus className="text-2xl lg:text-3xl" />}
      />
      <div className="min-h-[400px] bg-white mt-5 pt-5">
        <Table>
          <TableHeader headers={headers} cellWidth="35%" />
          <TableBody>
            {orders?.map((row) => (
              <>
                <TableRow
                  key={row?.ID}
                  cells={Object.values(row).slice(0, -1)}
                  cellWidth="35%"
                >
                  <th className="text-start w-[35%]">"last"</th>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardProfileContainer>
  );
};

export default MyOrders;
