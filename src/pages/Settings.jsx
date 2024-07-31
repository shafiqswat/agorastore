/** @format */

import React from "react";
import { TabsComponent } from "../components/Tabs";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";
import CustomButton from "../components/constant/customButton";

const Settings = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className='md:flex justify-between block'>
          <TabsComponent />
          <CustomButton
            BtnText='Log out'
            className='w-fit'
          />
        </div>
      </Container>
    </div>
  );
};

export default Settings;
