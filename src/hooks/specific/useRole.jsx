import React from "react";
import useGetSecure from "../apiSecure/useGetSecure";
import useAuth from "../auth/useAuth";

const useRole = () => {
  const { user } = useAuth();
  const { data: userRole } = useGetSecure(
    ["Role"],
    `/user/role/${user?.email}`
  );

  return userRole;
};

export default useRole;
