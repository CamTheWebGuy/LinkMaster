import AddClientForm from "@/app/components/AddClientForm";
import Sidebar from "@/app/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <Sidebar>
        <AddClientForm />
      </Sidebar>
    </div>
  );
};

export default page;
