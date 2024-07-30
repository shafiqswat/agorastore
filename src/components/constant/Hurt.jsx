/** @format */

import { HurtIcon } from "./SvgIcons";

const Hurt = ({ className }) => {
  return (
    <button
      type='button'
      aria-haspopup='dialog'
      aria-expanded='false'
      aria-controls='radix-:rc:'
      data-state='closed'>
      <HurtIcon className={className} />
    </button>
  );
};
export default Hurt;
