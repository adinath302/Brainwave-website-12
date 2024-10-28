import React from "react";
import Tagline from "./Tagline";

const Heading = ({ title, className, text, tag }) => {
  return (
    <div className={` ${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-3 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
