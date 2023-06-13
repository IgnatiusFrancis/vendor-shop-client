import React, { useState } from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
const ShopDashboardPage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default ShopDashboardPage;
