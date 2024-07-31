/** @format */

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export function TabsComponent() {
  return (
    <Tabs
      defaultValue='Payment methods'
      className='w-[540px]'>
      <TabsList className='w-full flex justify-start rounded-2xl'>
        <TabsTrigger
          value='Payment methods'
          className='grid-cols-1'>
          Payment methods
        </TabsTrigger>
        <TabsTrigger value='Shipping addresses'>Shipping addresses</TabsTrigger>
        <TabsTrigger value='Credits'>Credits</TabsTrigger>
        <TabsTrigger value='Profile'>Profile</TabsTrigger>
        <TabsTrigger value='Personalization'>Personalization</TabsTrigger>
      </TabsList>
      <TabsContent value='Payment methods'></TabsContent>
      <TabsContent value='Shipping addresses'></TabsContent>
      <TabsContent value='Credits'></TabsContent>
      <TabsContent value='Profile'></TabsContent>
      <TabsContent value='Personalization'></TabsContent>
    </Tabs>
  );
}
