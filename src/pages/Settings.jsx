/** @format */

import React from "react";
import { TabsComponent } from "../components/Tabs";
import Header from "../components/layout/Header";
import Container from "../components/layout/container";

const Settings = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className=' justify-between block'>
          <TabsComponent />
        </div>
      </Container>
    </div>
  );
};

export default Settings;
