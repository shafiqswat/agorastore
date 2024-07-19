/** @format */

import * as React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CustomButton from "../customButton";
import Reviews from "../reviews";
import Hurt from "../Hurt";

export function ProductDetailsCard() {
  return (
    <div className='mt-48 lg:m-auto lg:mt-0 lg:w-[371px]'>
      <button className='text-neutral-700 text-sm font-medium px-1.5 py-0.5 rounded bg-neutral-100 w-max'>
        Mac Duggal
      </button>
      <div className='flex flex-col space-y-1.5'>
        <div className='flex justify-between items-start'>
          <h1 className='text-2xl font-semibold lg:max-w-[307px] text-black'>
            Buckled Maxi Croco Black Leather Tote Bag with Detachable Strap
          </h1>
          <Hurt />
        </div>
        <Reviews rating='3.20' />
        <div className='prose-p:my-1 prose-ul:my-2 w-full md:max-w-[50ch] my-2 prose-sm prose text-gray-600'>
          <p>
            Embrace luxury with our Crocodile Leather Maxi Tote Bag. Crafted
            from premium leather, its spacious design offers both elegance and
            practicality, perfect for carrying your everyday essentials in
            style. Elevate your accessory game with this timeless statement
            piece.
          </p>
          <ul>
            <li>Mac Duggal</li>
            <li>Crocodile Embossed Leather Construction</li>
            <li>Croc-embossed and 24k Gold-plated hardware</li>
            <li>Two interior pockets</li>
            <li>Zipper closure</li>
            <li>Extra Large size: W 13.7 in x H 18.8 in x D 5.5 in</li>
            <li>Microfibre faille lining, 100% PU</li>
            <li>Fits up to: iPad, Airpods, Wallet, and Cosmetic bag </li>
            <li>Available in Black</li>
            <li>Style #H90020</li>
          </ul>
        </div>
        <form className='grid gap-2'>
          <Label
            htmlFor='color'
            className='text-sm font-medium font-sans'>
            Color
          </Label>
          <Select>
            <SelectTrigger id='color'>
              <SelectValue placeholder='Black' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='Black'>Black</SelectItem>
            </SelectContent>
          </Select>
          <Label
            htmlFor='size'
            className='text-sm font-medium font-sans'>
            Size
          </Label>
          <Select>
            <SelectTrigger id='size'>
              <SelectValue placeholder='Size' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='Large'>Large</SelectItem>
            </SelectContent>
          </Select>
          <p className='font-semibold text-black my-6'>$698.00</p>
          <div className='w-full relative'>
            <CustomButton
              BtnText='Add to cart'
              className='bg-lightbrown hover:bg-amber-700 my-2 w-full box-border'
            />
          </div>
          <CustomButton
            BtnText='Learn more'
            className='mb-2'
          />
        </form>
      </div>
    </div>
  );
}
