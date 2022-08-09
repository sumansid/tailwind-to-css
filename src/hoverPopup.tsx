import React, { useEffect, useState } from "react";
import "./index.css";

type directionProps = {
  leftDir: string;
  topDir: string;
  convertedClass: string;
};

const HoverPopup = (props: directionProps) => {
  const [convertedTailwind, setConvertedTailwind] = useState(
    props.convertedClass
  );

  useEffect(() => {
    setConvertedTailwind(props.convertedClass);
  }, [props.convertedClass]);

  return (
    <div
      style={{
        left: props.leftDir,
        top: props.topDir,
        position: "absolute",
        transform: "translateX(-50%)",
      }}
      className=" flex flex-col z-50 items-center bg-black h-fit w-60"
    >
      <p className="text-white text-xs text-left">{convertedTailwind}</p>
    </div>
  );
};

export default HoverPopup;
