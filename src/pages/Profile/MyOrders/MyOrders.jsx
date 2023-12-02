import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { BsCartPlus } from "react-icons/bs";
import TableHeader from "../../../components/shared/table/TableHeader";

const MyOrders = () => {
  const headers = ["ID", "Name", "Quantity", "Price", "Status"];

  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header="My Orders"
        icon={<BsCartPlus className="text-2xl lg:text-3xl" />}
      />
      <div className="min-h-[70vh] bg-white mt-5">
        <table>
          <TableHeader headers={headers} />
        </table>
      </div>
    </DashboardProfileContainer>
  );
};

export default MyOrders;
