import React from "react";
import Footer from "../../components/Footer/Footer";
import ViewItemCard from "../../components/ViewItemCard/ViewItemCard";

const ViewItem = () => {

  return (
    <div className="w-full min-w-[350px] pt-[100px]">
      <ViewItemCard/>
      <Footer/>
    </div>
  );
};

export default ViewItem;
