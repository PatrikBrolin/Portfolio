import { useState } from "react";
const LinkedIn = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-linkedin"
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>;
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
      fill="none"
    >
      <title>LinkedIn</title>
      {realColor ? (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke=" #ff4b4b"  strokeWidth="2"></path>
          <rect x="2" y="9" width="4" height="12" stroke=" #ff4b4b"  strokeWidth="2"></rect>
          <circle cx="4" cy="4" r="2" stroke=" #ff4b4b"  strokeWidth="2"></circle>
        </>

      ) : (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#120945"  strokeWidth="2"></path>
          <rect x="2" y="9" width="4" height="12" stroke="#120945"  strokeWidth="2"></rect>
          <circle cx="4" cy="4" r="2" stroke="#120945"   strokeWidth="2"> </circle>
          
        </>
      )}
    </svg>
  );
};

export default LinkedIn;
