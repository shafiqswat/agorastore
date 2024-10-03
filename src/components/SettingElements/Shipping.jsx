/** @format */
import React, { useContext, useState } from "react";
import CustomButton from "../common/CustomButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../elements/Table";
import { ShippingContext } from "../../context/ShippingContext";
import AddressModal from "../../modals/AddressModal";

// Component for displaying the table headers
const ShippingTableHeader = () => {
  return (
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Address</TableHead>
      <TableHead>Address Line 2</TableHead>
      <TableHead>City</TableHead>
      <TableHead>State</TableHead>
      <TableHead>Zip Code</TableHead>
      <TableHead>Country</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  );
};

// Component for rendering each address row
const ShippingRow = ({ address, onEdit, onDelete }) => {
  return (
    <TableRow key={address._id}>
      <TableCell className='text-sm'>{address.name}</TableCell>
      <TableCell>{address.addressFirst}</TableCell>
      <TableCell>{address.addressSecond}</TableCell>
      <TableCell>{address.city}</TableCell>
      <TableCell>{address.state}</TableCell>
      <TableCell>{address.zipCode}</TableCell>
      <TableCell>{address.country}</TableCell>
      <TableCell>
        <button
          className='text-blue-500 me-3'
          onClick={() => onEdit(address)}>
          Edit
        </button>
        <button
          className='text-red-500'
          onClick={() => onDelete(address._id)}>
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
};

// Component for rendering loading state
const LoadingState = () => {
  return <p>Loading shipping addresses...</p>;
};

// Component for rendering error state
const ErrorState = ({ error }) => {
  return <p className='text-red-500'>Error: {error}</p>;
};

// Main Shipping Component
const Shipping = () => {
  const {
    addresses,
    loading,
    error,
    removeShippingAddress,
    updateShippingAddress,
  } = useContext(ShippingContext); // Use context
  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  // Handle delete functionality
  const handleDelete = async (addressId) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      await removeShippingAddress(addressId);
    }
  };

  // Handle edit functionality
  const handleEdit = (address) => {
    setEditingAddress(address); // Set the address to edit
    setShowModal(true);
  };

  // Handle modal close and update action
  const handleModalClose = (updatedAddress) => {
    if (updatedAddress) {
      updateShippingAddress(editingAddress._id, updatedAddress);
    }
    setShowModal(false);
    setEditingAddress(null);
  };

  return (
    <div className='border rounded-xl p-5 mt-10'>
      <h2 className='text-2xl font-semibold'>Shipping Addresses</h2>
      <p className='text-sm text-neutral-500 mb-5'>
        Manage your shipping addresses below.
      </p>

      <Table className='w-full table-auto'>
        <ShippingTableHeader />
        <TableBody>
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <ShippingRow
                key={address._id}
                address={address}
                onEdit={handleEdit} // Pass edit handler
                onDelete={handleDelete}
              />
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={8}
                className='text-center'>
                No shipping addresses available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <CustomButton
        BtnText='Add New Address'
        className='w-fit my-3'
        onClick={() => {
          setEditingAddress(null); // Clear editingAddress for new address
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddressModal
          isOpen={showModal}
          onOpenChange={handleModalClose}
          address={editingAddress} // Pass the editing address
        />
      )}
    </div>
  );
};

export default Shipping;
