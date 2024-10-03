/** @format */

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Adjust the import path based on your project structure
import FavoriteModal from "../../modals/FavoriteModal";
import { HurtIcon } from "../../assets/SvgIcons";
import Modal from "../../modals/SigninModal";

const Hurt = ({ className }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      setShowFavoriteModal(true);
    } else {
      setShowSigninModal(true);
    }
  };

  return (
    <>
      <button
        type='button'
        aria-haspopup='dialog'
        aria-expanded='false'
        aria-controls='radix-:rc:'
        data-state='closed'
        onClick={handleButtonClick}>
        <HurtIcon className={className} />
      </button>

      <FavoriteModal
        isOpen={showFavoriteModal}
        onOpenChange={setShowFavoriteModal}
      />

      <Modal
        isOpen={showSigninModal}
        setIsOpen={setShowSigninModal}
      />
    </>
  );
};

export default Hurt;
