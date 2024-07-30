/** @format */

import CustomButton from "../constant/customButton";
import InputComponent from "../FormItems/Input";
import LabelComponent from "../FormItems/label";
import SelectComponent from "../FormItems/select";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AddressModal = ({ isOpen, onOpenChange }) => {
  const states = [
    { value: "AL", text: "Alabama" },
    { value: "AK", text: "Alaska" },
    { value: "AZ", text: "Arizona" },
    { value: "AR", text: "Arkansas" },
    { value: "CA", text: "California" },
    { value: "CO", text: "Colorado" },
    { value: "CT", text: "Connecticut" },
    { value: "DE", text: "Delaware" },
    { value: "FL", text: "Florida" },
    { value: "GA", text: "Georgia" },
    { value: "HI", text: "Hawaii" },
    { value: "ID", text: "Idaho" },
    { value: "IL", text: "Illinois" },
    { value: "IN", text: "Indiana" },
    { value: "IA", text: "Iowa" },
    { value: "KS", text: "Kansas" },
    { value: "KY", text: "Kentucky" },
    { value: "LA", text: "Louisiana" },
    { value: "ME", text: "Maine" },
    { value: "MD", text: "Maryland" },
    { value: "MA", text: "Massachusetts" },
    { value: "MI", text: "Michigan" },
    { value: "MN", text: "Minnesota" },
    { value: "MS", text: "Mississippi" },
    { value: "MO", text: "Missouri" },
    { value: "MT", text: "Montana" },
    { value: "NE", text: "Nebraska" },
    { value: "NV", text: "Nevada" },
    { value: "NH", text: "New Hampshire" },
    { value: "NJ", text: "New Jersey" },
    { value: "NM", text: "New Mexico" },
    { value: "NY", text: "New York" },
    { value: "NC", text: "North Carolina" },
    { value: "ND", text: "North Dakota" },
    { value: "OH", text: "Ohio" },
    { value: "OK", text: "Oklahoma" },
    { value: "OR", text: "Oregon" },
    { value: "PA", text: "Pennsylvania" },
    { value: "RI", text: "Rhode Island" },
    { value: "SC", text: "South Carolina" },
    { value: "SD", text: "South Dakota" },
    { value: "TN", text: "Tennessee" },
    { value: "TX", text: "Texas" },
    { value: "UT", text: "Utah" },
    { value: "VT", text: "Vermont" },
    { value: "VA", text: "Virginia" },
    { value: "WA", text: "Washington" },
    { value: "WV", text: "West Virginia" },
    { value: "WI", text: "Wisconsin" },
    { value: "WY", text: "Wyoming" },
  ];
  const country = [
    {
      value: "US",
      text: "United States",
    },
  ];
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}
      className='h-screen'>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add a new shipping address</DialogTitle>
          <DialogDescription>
            Fill in the details to add the shipping address.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          <LabelComponent text='Full Name' />
          <InputComponent />
          <LabelComponent text='Address' />
          <InputComponent />
          <LabelComponent text='Address Line two' />
          <InputComponent />
          <LabelComponent text='City' />
          <InputComponent />
          <LabelComponent text='State' />
          <SelectComponent
            options={states}
            placeholder='Select state'
          />
          <LabelComponent text='Zip Code' />
          <InputComponent />
          <LabelComponent text='Country' />
          <SelectComponent
            placeholder='Select country'
            options={country}
          />
        </div>
        <DialogFooter className='sm:justify-end'>
          <CustomButton BtnText='Add address' />
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
              className='rounded-full'>
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddressModal;
