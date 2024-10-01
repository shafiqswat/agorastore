/** @format */
import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog"; // Adjust imports as necessary
import { ShippingContext } from "../Context/ShippingContext";
import LabelComponent from "../FormItems/label";
import InputComponent from "../FormItems/Input";
import SelectComponent from "../FormItems/select";
import { Button } from "../ui/button";
import CustomButton from "../constant/customButton";

const AddressModal = ({ isOpen, onOpenChange, address }) => {
  // States to hold form inputs
  const [name, setName] = useState(address ? address.name : "");
  const [addressFirst, setAddressFirst] = useState(
    address ? address.addressFirst : ""
  );
  const [addressSecond, setAddressSecond] = useState(
    address ? address.addressSecond : ""
  );
  const [city, setCity] = useState(address ? address.city : "");
  const [state, setState] = useState(address ? address.state : "");
  const [zipCode, setZipCode] = useState(address ? address.zipCode : "");
  const [country, setCountry] = useState(address ? address.country : "");

  const { addShippingAddress, updateShippingAddress } =
    useContext(ShippingContext);

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

  const countryOptions = [{ value: "US", text: "United States" }];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newAddress = {
      name,
      addressFirst,
      addressSecond,
      city,
      state,
      zipCode,
      country,
    };

    if (address) {
      updateShippingAddress(address._id, newAddress);
    } else {
      addShippingAddress(newAddress);
    }

    resetForm();
    onOpenChange(false);
  };

  const resetForm = () => {
    setName("");
    setAddressFirst("");
    setAddressSecond("");
    setCity("");
    setState("");
    setZipCode("");
    setCountry("US");
  };

  useEffect(() => {
    if (address) {
      setName(address.name);
      setAddressFirst(address.addressFirst);
      setAddressSecond(address.addressSecond);
      setCity(address.city);
      setState(address.state);
      setZipCode(address.zipCode);
      setCountry(address.country);
    } else {
      resetForm();
    }
  }, [address]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}
      className='h-screen'>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {address ? "Edit Shipping Address" : "Add a New Shipping Address"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details to {address ? "edit" : "add"} the shipping
              address.
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-2'>
            <LabelComponent text='Full Name' />
            <InputComponent
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <LabelComponent text='Address' />
            <InputComponent
              value={addressFirst}
              onChange={(e) => setAddressFirst(e.target.value)}
            />
            <LabelComponent text='Address Line Two' />
            <InputComponent
              value={addressSecond}
              onChange={(e) => setAddressSecond(e.target.value)}
            />
            <LabelComponent text='City' />
            <InputComponent
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <LabelComponent text='State' />
            <SelectComponent
              options={states}
              placeholder='Select state'
              value={state}
              onChange={(value) => setState(value)}
            />
            <LabelComponent text='Zip Code' />
            <InputComponent
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <LabelComponent text='Country' />
            <SelectComponent
              placeholder='Select country'
              options={countryOptions}
              value={country}
              onChange={(value) => setCountry(value)}
            />
          </div>
          <DialogFooter className='sm:justify-end mt-5'>
            <CustomButton
              BtnText={address ? "Update Address" : "Add Address"}
              type='submit' // Change button type to submit
            />
            <DialogClose asChild>
              <Button type='button'>Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
