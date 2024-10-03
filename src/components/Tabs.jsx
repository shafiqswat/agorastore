/** @format */

import { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./elements/Tabs";
import CustomButton from "./common/CustomButton";
import Credit from "./settingElements/Credit";
import Payment from "./settingElements/Payment";
import Personalization from "./settingElements/Personalization";
import Profile from "./settingElements/Profile";
import Shipping from "./settingElements/Shipping";
import { AuthContext } from "../context/AuthContext";

const TabsComponent = () => {
  const { logout } = useContext(AuthContext);
  const handleClick = () => {
    logout();
  };
  return (
    <Tabs
      defaultValue='Payment methods'
      className='w-full overflow-visible'>
      <div className='md:flex justify-between'>
        <TabsList className='w-full md:w-[540px]  flex justify-start rounded-2xl overflow-x-auto'>
          <TabsTrigger
            value='Payment methods'
            className='flex-shrink-0'>
            Payment methods
          </TabsTrigger>
          <TabsTrigger
            value='Shipping addresses'
            className='flex-shrink-0'>
            Shipping addresses
          </TabsTrigger>
          <TabsTrigger
            value='Credits'
            className='flex-shrink-0'>
            Credits
          </TabsTrigger>
          <TabsTrigger
            value='Profile'
            className='flex-shrink-0'>
            Profile
          </TabsTrigger>
          <TabsTrigger
            value='Personalization'
            className='flex-shrink-0'>
            Personalization
          </TabsTrigger>
        </TabsList>
        <CustomButton
          BtnText='Log out'
          className='w-fit mt-10 md:mt-0'
          onClick={handleClick}
        />
      </div>
      <TabsContent
        value='Payment methods'
        className='p-0'>
        <Payment />
      </TabsContent>
      <TabsContent value='Shipping addresses'>
        <Shipping />
      </TabsContent>
      <TabsContent value='Credits'>
        <Credit />
      </TabsContent>
      <TabsContent value='Profile'>
        <Profile />
      </TabsContent>
      <TabsContent value='Personalization'>
        <Personalization />
      </TabsContent>
    </Tabs>
  );
};
export default TabsComponent;
