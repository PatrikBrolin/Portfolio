import { useState } from "react";
const Vercel = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
    >
      <title>Vercel</title>
      {realColor ? (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#000000"
            d="M256,48,496,464H16Z"    
            stroke="#fff" stroke-width="2" stroke-linecap="square"   />
        </>
      ) : (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#fff"
            d="M256,48,496,464H16Z"
        
          />
        </>
      )}
    </svg>
  );
};

export default Vercel;
