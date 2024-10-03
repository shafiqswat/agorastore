/** @format */

import React from "react";

export const SearchIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-search w-5 h-5'>
    <circle
      cx='11'
      cy='11'
      r='8'></circle>
    <path d='m21 21-4.3-4.3'></path>
  </svg>
);

export const ChatIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-messages-square w-5 h-5'>
    <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z'></path>
    <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1'></path>
  </svg>
);

export const CameraIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth='1.5'
    aria-hidden='true'
    className='aspect-square h-5'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'></path>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'></path>
  </svg>
);

export const ArrowRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-arrow-right aspect-square h-5'>
    <path d='M5 12h14'></path>
    <path d='m12 5 7 7-7 7'></path>
  </svg>
);

export const SettingsIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-settings w-5 h-5'>
    <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'></path>
    <circle
      cx='12'
      cy='12'
      r='3'></circle>
  </svg>
);

export const ShoppingCartIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='200'
    height='200'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`lucide lucide-shopping-cart w-5 h-5 ${className}`}>
    <circle
      cx='8'
      cy='21'
      r='1'></circle>
    <circle
      cx='19'
      cy='21'
      r='1'></circle>
    <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'></path>
  </svg>
);
export const MenuIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-menu w-6 h-6'>
    <line
      x1='4'
      x2='20'
      y1='12'
      y2='12'></line>
    <line
      x1='4'
      x2='20'
      y1='6'
      y2='6'></line>
    <line
      x1='4'
      x2='20'
      y1='18'
      y2='18'></line>
  </svg>
);

export const LayoutGridIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-layout-grid w-5 h-5'>
    <rect
      width='7'
      height='7'
      x='3'
      y='3'
      rx='1'></rect>
    <rect
      width='7'
      height='7'
      x='14'
      y='3'
      rx='1'></rect>
    <rect
      width='7'
      height='7'
      x='14'
      y='14'
      rx='1'></rect>
    <rect
      width='7'
      height='7'
      x='3'
      y='14'
      rx='1'></rect>
  </svg>
);
export const PackageIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    class='lucide lucide-package w-5 h-5'>
    <path d='m7.5 4.27 9 5.15'></path>
    <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'></path>
    <path d='m3.3 7 8.7 5 8.7-5'></path>
    <path d='M12 22V12'></path>
  </svg>
);
export const CrossIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-x h-4 w-4'>
    <path d='M18 6 6 18'></path>
    <path d='m6 6 12 12'></path>
  </svg>
);

export const AddIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    aria-hidden='true'
    data-slot='icon'
    className='w-8 h-8'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path>
  </svg>
);

export const RemoveIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    fill='currentColor'
    aria-hidden='true'
    data-slot='icon'
    className='w-4 h-4'>
    <path d='M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'></path>
  </svg>
);

export const HurtIcon = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={`lucide lucide-heart w-5 h-5 ${className}`}>
    <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
  </svg>
);

export const GoogleIcon = () => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 48 48'
    className='w-4 h-4 col-span-1 ms-2'>
    <g>
      <path
        fill='#EA4335'
        d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'></path>
      <path
        fill='#4285F4'
        d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'></path>
      <path
        fill='#FBBC05'
        d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'></path>
      <path
        fill='#34A853'
        d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'></path>
      <path
        fill='none'
        d='M0 0h48v48H0z'></path>
    </g>
  </svg>
);

export const MinusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-minus w-4 h-4'>
    <path d='M5 12h14'></path>
  </svg>
);

export const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-trash2 w-4 h-4'>
    <path d='M3 6h18'></path>
    <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
    <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
    <line
      x1='10'
      x2='10'
      y1='11'
      y2='17'></line>
    <line
      x1='14'
      x2='14'
      y1='11'
      y2='17'></line>
  </svg>
);

export const PlusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-plus w-4 h-4'>
    <path d='M5 12h14'></path>
    <path d='M12 5v14'></path>
  </svg>
);

export const SelectedIcons = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
      data-slot='icon'
      className={`absolute top-1 right-1 w-6 h-6 text-white ${className}`}>
      <path
        fill-rule='evenodd'
        d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z'
        clip-rule='evenodd'></path>
    </svg>
  );
};
export const StarIcon = ({ className, filled, onClick, index }) => {
  return (
    <svg
      onClick={() => onClick(index + 1)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-neutral-300"} ${className} cursor-pointer`}
      aria-hidden='true'>
      <path
        fillRule='evenodd'
        d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674 4.914.015c.969.003 1.372 1.241.588 1.81l-3.936 2.85 1.518 4.674c.3.921-.755 1.688-1.539 1.104L10 14.347l-3.914 2.707c-.784.584-1.839-.183-1.539-1.104l1.518-4.674-3.936-2.85c-.784-.57-.381-1.807.588-1.81l4.914-.015L9.049 2.927z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export const Circle = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-circle w-5 h-5 text-black'>
      <circle
        cx='12'
        cy='12'
        r='10'></circle>
    </svg>
  );
};

export const CircleFilled = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-circle-check text-rose-500 w-5 h-5'>
      <circle
        cx='12'
        cy='12'
        r='10'></circle>
      <path d='m9 12 2 2 4-4'></path>
    </svg>
  );
};
export const IncreaseCartIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#2b2b2b'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-shopping-cart'>
      <circle
        cx='8'
        cy='21'
        r='1'
      />
      <circle
        cx='19'
        cy='21'
        r='1'
      />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
};
export const ShareIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#000000'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-share'>
      <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
      <polyline points='16 6 12 2 8 6' />
      <line
        x1='12'
        x2='12'
        y1='2'
        y2='15'
      />
    </svg>
  );
};

export const CommissionIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#2b2b2b'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-circle-percent'>
      <circle
        cx='12'
        cy='12'
        r='10'
      />
      <path d='m15 9-6 6' />
      <path d='M9 9h.01' />
      <path d='M15 15h.01' />
    </svg>
  );
};
export const RefreshIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#2b2b2b'
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
      class='lucide lucide-refresh-cw'>
      <path d='M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' />
      <path d='M21 3v5h-5' />
      <path d='M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' />
      <path d='M8 16H3v5' />
    </svg>
  );
};

export const RegisterSvgIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='8'
      viewBox='0 0 22 8'
      className='inline-block'
      fill='none'>
      <path
        d='M22 4L18 8V5H5.83C5.42 6.17 4.31 7 3 7C2.20435 7 1.44129 6.68393 0.87868 6.12132C0.31607 5.55871 0 4.79565 0 4C0 3.20435 0.31607 2.44129 0.87868 1.87868C1.44129 1.31607 2.20435 1 3 1C4.31 1 5.42 1.83 5.83 3H18V0L22 4Z'
        fill='white'
      />
    </svg>
  );
};
export const SpinnerIcon = () => {
  return (
    <svg
      aria-hidden='true'
      className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 '
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
  );
};

export const HidePasswordIcon = () => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='eye-invisible'
      width='1em'
      height='1em'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z'></path>
      <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z'></path>
    </svg>
  );
};

export const DisplayPasswordIcon = () => {
  return (
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='eye'
      width='1em'
      height='1em'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
    </svg>
  );
};
