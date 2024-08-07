/** @format */

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import CustomButton from "./constant/customButton";
import Credit from "./SettingElements/Credit";
import Payment from "./SettingElements/Payment";
import Personalization from "./SettingElements/Personalization";
import Profile from "./SettingElements/Profile";
import Shipping from "./SettingElements/Shipping";

export function TabsComponent() {
  return (
    <Tabs
      defaultValue='Payment methods'
      className='w-full overflow-visible'>
      <div className='flex justify-between'>
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
          className='w-fit'
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
}
