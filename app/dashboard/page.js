import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import ClientsList from "../components/ClientsList";
import SubUsers from "../components/SubUsers";

const page = () => {
  return (
    <div>
      <Sidebar>
        <DashboardStats />
        <div className='flex flex-row space-x-4 mt-12'>
          <div className='w-1/2'>
            <ClientsList />
          </div>
          <div className='w-1/2'>
            <SubUsers />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default page;
