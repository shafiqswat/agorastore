/** @format */

// /** @format */

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Container from "../components/container";
// import { Slider } from "../components/Slider";

// function About() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const ProductImages = [
//     "/images/handbag1.webp",
//     "/images/handbag2.webp",
//     "/images/handbag3.webp",
//     "/images/handbag4.webp",
//     "/images/handbag5.webp",
//     "/images/handbag6.webp",
//   ];

//   const handlePrev = () => {
//     setCurrentImage((prev) =>
//       prev === 0 ? ProductImages.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImage((prev) =>
//       prev === ProductImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <>
//       <Header />
//       <Container>
//         <div className='grid grid-cols-2'>
//           <div>
//             <Slider
//               currentImage={currentImage}
//               ProductImages={ProductImages}
//               handlePrev={handlePrev}
//               handleNext={handleNext}
//             />
//             <div className='flex gap-1 items-center mt-4'>
//               {ProductImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`Product Image ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className={`aspect-square cursor-pointer w-10 h-10 md:w-14 md:h-14 object-cover rounded-md border-2 transition-colors ${
//                     currentImage === index
//                       ? "border-lightbrown"
//                       : "border-transparent"
//                   }`}
//                   onClick={() => setCurrentImage(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default About;
