/** @format */

import React, { useContext } from "react";
import Reviews from "../constant/ProductsReview";
import Hurt from "../constant/Hurt";
import { CartContext } from "../Context/CartContext";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import SelectComponent from "../FormItems/select";
import LabelComponent from "../FormItems/label";
import CustomButton from "../constant/customButton";

export function ProductDetailsCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const router = useNavigate();
  const handleBrandClick = () => {
    const formattedBrandName = product.brand.trim().replace(/\s+/g, "-");
    router(`/brand/${formattedBrandName}`);
  };

  const handleCart = () => {
    toast("Product added to cart", {
      icon: <i className='fa-solid fa-circle-check'></i>,
      description: product.description,
      action: {
        label: "View Cart",
        onClick: () => router("/cart"),
      },
    });

    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].count += 1;
      setCart(newCart);
    } else {
      const updatedCart = [...cart, { ...product, count: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <div className='lg:m-auto lg:mt-0 lg:w-[371px]'>
      <button
        className='text-neutral-700 text-sm font-medium px-1.5 py-0.5 rounded bg-neutral-100 w-max capitalize'
        o
        onClick={handleBrandClick}>
        {product.brand}
      </button>
      <Toaster />
      <div className='flex flex-col space-y-1.5'>
        <div className='flex justify-between items-start'>
          <h1 className='text-2xl font-semibold lg:max-w-[307px] text-black capitalize'>
            {product.name}
          </h1>
          <Hurt className='h-8 w-8 stroke-gray-400' />
        </div>
        <Reviews rating={product.rating?.toFixed(2)} />
        <p>{product.description}</p>
        <div className='prose-p:my-1 prose-ul:my-2 w-full md:max-w-[50ch] my-2 prose-sm prose text-gray-600'></div>
        <div className='grid gap-2'>
          <LabelComponent text='Color' />
          <SelectComponent
            placeholder='Black'
            options={[
              {
                value: "Black",
                text: "Black",
              },
            ]}
          />
          <LabelComponent text='Size' />
          <SelectComponent
            placeholder='Large'
            options={[
              {
                value: "Large",
                text: "Large",
              },
            ]}
          />
          <p className='font-semibold text-black my-6'>${product.price}</p>
          <div className='w-full hidden md:grid grid-cols-2 lg:grid-cols-1 items-center justify-center gap-5'>
            <CustomButton
              onClick={handleCart}
              BtnText='Add to cart'
              className='bg-lightbrown hover:bg-amber-700 my-2 w-full box-border md:block'
            />
            <CustomButton BtnText='Visit store' />
          </div>
        </div>
      </div>
    </div>
  );
}
