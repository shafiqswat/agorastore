/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "../context/ListContext";
import Header from "./layout/Header";
import { Card } from "./elements/Card";
import CustomButton from "./common/CustomButton";
import MainWrapper from "./common/MainWrapper";

const Share = () => {
  const { shareId } = useParams();
  const { listName } = useContext(ListContext);
  const item = listName.find((s) => s._id === shareId);

  if (!item) {
    return <div>List not found</div>;
  }

  const handleShare = () => {
    const shareData = {
      title: item.name,
      text: `Here's a list I created: ${item.name}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard
        .writeText(shareData.url)
        .then(() => alert("Link copied to clipboard"))
        .catch((error) => console.log("Error copying link", error));
    }
  };

  return (
    <div>
      <Header />
      <MainWrapper>
        <Card className='px-5 pt-5 pb-14 flex justify-between items-center shadow-none'>
          <div></div>
          <h2 className='text-2xl font-semibold'>{item.name}</h2>
          <CustomButton
            BtnText='Share list'
            onClick={handleShare}
          />
        </Card>
      </MainWrapper>
    </div>
  );
};

export default Share;
