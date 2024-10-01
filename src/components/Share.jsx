/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "./Context/ListContext";
import Header from "./layout/Header";
import Container from "./layout/container";
import { Card } from "./ui/card";
import CustomButton from "./constant/customButton";

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
      <Container>
        <Card className='px-5 pt-5 pb-14 flex justify-between items-center shadow-none'>
          <div></div>
          <h2 className='text-2xl font-semibold'>{item.name}</h2>
          <CustomButton
            BtnText='Share list'
            onClick={handleShare}
          />
        </Card>
      </Container>
    </div>
  );
};

export default Share;
