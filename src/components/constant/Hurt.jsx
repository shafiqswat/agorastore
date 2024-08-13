/** @format */

import { useState } from "react";
import FavoriteModal from "../Modals/FavoriteModal";
import { HurtIcon } from "./SvgIcons";

const Hurt = ({ className, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        type='button'
        aria-haspopup='dialog'
        aria-expanded='false'
        aria-controls='radix-:rc:'
        data-state='closed'
        onClick={() => setShowModal(true)}>
        <HurtIcon className={className} />
      </button>
      <FavoriteModal
        isOpen={showModal}
        onOpenChange={setShowModal}
      />
    </>
  );
};
export default Hurt;
