import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import OrderCount from "./OrderCount";
import OrderTable from "./OrderTable";

const OrderManage = () => {
  return (
    <DashboardProfileContainer>
      <OrderCount />
      <OrderTable />
    </DashboardProfileContainer>
  );
};

export default OrderManage;
