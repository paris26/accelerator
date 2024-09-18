import React from "react";


interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps ) => {
  return (
    <button
      onClick={handleClick}
      className={`
        shadow-[inset_0_0_0_1px_#616467] 
        text-black 
        px-8 
        py-3 
        rounded-xl 
        tracking-wide 
        uppercase 
        font-semibold 
        text-sm
        bg-transparent 
        hover:bg-[#616467] 
        hover:text-white 
        dark:text-neutral-200 
        transition 
        duration-200
        ${otherClasses}
      `}
    >
      {icon && (
        <span
          className={`inline-block ${position === "left" ? "mr-2" : "ml-2"}`}
        >
          {position === "left" && icon}
        </span>
      )}
      {title}
      {icon && (
        <span
          className={`inline-block ${position === "right" ? "ml-2" : "mr-2"}`}
        >
          {position === "right" && icon}
        </span>
      )}
    </button>
  );
};

export default MagicButton;
