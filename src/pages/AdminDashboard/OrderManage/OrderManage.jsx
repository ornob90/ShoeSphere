import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import OrderCount from "./OrderCount";

const OrderManage = () => {
  return (
    <DashboardProfileContainer>
      <OrderCount />
    </DashboardProfileContainer>
  );
};

export default OrderManage;
