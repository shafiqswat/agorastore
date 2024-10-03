/** @format */

import React from "react";
import Header from "../components/layout/Header";
import TabsComponent from "../components/Tabs";
import MainWrapper from "../components/common/MainWrapper";

const Settings = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <div className=' justify-between block'>
          <TabsComponent />
        </div>
      </MainWrapper>
    </div>
  );
};

export default Settings;
