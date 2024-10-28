import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

const Button = ({ classname, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "bg-white text-black" : "text- black"} ${classname || ""}`;

  const spanClasses = "relative z-10 ";
  const renderClasses = `relative <z-10></z-10>`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={renderClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
