import { useState } from "react";
const VScode = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  return (
    <svg
      height={size}
      viewBox="0 0 29 29"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
    >
      <title>VScode</title>
      {realColor ? (
        <>
          <path
            d="M27.9747 3.06792L22.0033 0.179851C21.6661 0.016511 21.2867 -0.0373914 20.9176 0.0256162C20.5485 0.0886238 20.2081 0.26542 19.9435 0.531497L0.396095 18.4342C0.158928 18.6504 0.0169607 18.9524 0.00142339 19.2737C-0.0141139 19.5951 0.0980513 19.9094 0.313245 20.1477C0.339136 20.1758 0.365026 20.2028 0.392988 20.2278L1.98888 21.6843C2.19742 21.875 2.46585 21.9863 2.74754 21.9988C3.02924 22.0114 3.30641 21.9244 3.53093 21.753L27.0758 3.81699C27.2537 3.68142 27.4656 3.59841 27.6879 3.57731C27.9101 3.5562 28.1339 3.59784 28.3338 3.69753C28.5338 3.79722 28.7021 3.95101 28.8198 4.14158C28.9375 4.33215 28.9999 4.55194 29 4.77621V4.70651C29 4.36412 28.9037 4.0287 28.7224 3.73882C28.541 3.44895 28.2818 3.2164 27.9747 3.06792Z"
            fill="#0065A9"
          />
          <path
            d="M27.9747 25.9319L22.0033 28.8208C21.666 28.9837 21.2867 29.0373 20.9177 28.9743C20.5487 28.9114 20.2083 28.7349 19.9435 28.4692L0.396095 10.5668C0.158928 10.3506 0.0169607 10.0487 0.00142339 9.72736C-0.0141139 9.40605 0.0980513 9.09169 0.313245 8.85345C0.339136 8.82536 0.365026 8.79831 0.392988 8.77334L1.98888 7.31694C2.19763 7.12548 2.46667 7.01373 2.74906 7.00118C3.03146 6.98864 3.30927 7.07609 3.53403 7.24828L27.0758 25.1829C27.2537 25.3185 27.4656 25.4015 27.6879 25.4226C27.9101 25.4437 28.1339 25.4021 28.3338 25.3024C28.5338 25.2027 28.7021 25.0489 28.8198 24.8583C28.9375 24.6678 28.9999 24.448 29 24.2238V24.2987C28.9989 24.6401 28.9021 24.9744 28.7208 25.2632C28.5395 25.552 28.281 25.7837 27.9747 25.9319Z"
            fill="#007ACC"
          />
          <path
            d="M22.0502 28.8206C21.7151 28.9837 21.3383 29.0374 20.9718 28.9743C20.6053 28.9112 20.2672 28.7345 20.0041 28.4685C20.1518 28.6161 20.3393 28.7163 20.543 28.7565C20.7468 28.7968 20.9577 28.7752 21.1493 28.6945C21.341 28.6139 21.5049 28.4778 21.6205 28.3032C21.7361 28.1286 21.7983 27.9234 21.7992 27.7132V1.28667C21.7993 1.0755 21.7376 0.869028 21.6218 0.693411C21.506 0.517794 21.3414 0.380933 21.1487 0.300166C20.956 0.219398 20.744 0.198358 20.5395 0.239711C20.335 0.281063 20.1473 0.382948 20 0.532458C20.2629 0.266131 20.6009 0.0890929 20.9675 0.0258279C21.334 -0.0374372 21.7109 0.0161968 22.0461 0.179312L27.9765 3.06698C28.2825 3.21491 28.5409 3.44744 28.7221 3.73775C28.9032 4.02806 28.9995 4.36431 29 4.7077V24.2922C29.0001 24.6353 28.9044 24.9715 28.7241 25.2619C28.5437 25.5524 28.286 25.7853 27.9806 25.9339L22.0502 28.8206Z"
            fill="#1F9CF0"
          />
        </>
      ) : (
        <>
          <path
            d="M27.9747 3.06792L22.0033 0.179851C21.6661 0.016511 21.2867 -0.0373914 20.9176 0.0256162C20.5485 0.0886238 20.2081 0.26542 19.9435 0.531497L0.396095 18.4342C0.158928 18.6504 0.0169607 18.9524 0.00142339 19.2737C-0.0141139 19.5951 0.0980513 19.9094 0.313245 20.1477C0.339136 20.1758 0.365026 20.2028 0.392988 20.2278L1.98888 21.6843C2.19742 21.875 2.46585 21.9863 2.74754 21.9988C3.02924 22.0114 3.30641 21.9244 3.53093 21.753L27.0758 3.81699C27.2537 3.68142 27.4656 3.59841 27.6879 3.57731C27.9101 3.5562 28.1339 3.59784 28.3338 3.69753C28.5338 3.79722 28.7021 3.95101 28.8198 4.14158C28.9375 4.33215 28.9999 4.55194 29 4.77621V4.70651C29 4.36412 28.9037 4.0287 28.7224 3.73882C28.541 3.44895 28.2818 3.2164 27.9747 3.06792Z"
            fill="#fff"
          />
          <path
            d="M27.9747 25.9319L22.0033 28.8208C21.666 28.9837 21.2867 29.0373 20.9177 28.9743C20.5487 28.9114 20.2083 28.7349 19.9435 28.4692L0.396095 10.5668C0.158928 10.3506 0.0169607 10.0487 0.00142339 9.72736C-0.0141139 9.40605 0.0980513 9.09169 0.313245 8.85345C0.339136 8.82536 0.365026 8.79831 0.392988 8.77334L1.98888 7.31694C2.19763 7.12548 2.46667 7.01373 2.74906 7.00118C3.03146 6.98864 3.30927 7.07609 3.53403 7.24828L27.0758 25.1829C27.2537 25.3185 27.4656 25.4015 27.6879 25.4226C27.9101 25.4437 28.1339 25.4021 28.3338 25.3024C28.5338 25.2027 28.7021 25.0489 28.8198 24.8583C28.9375 24.6678 28.9999 24.448 29 24.2238V24.2987C28.9989 24.6401 28.9021 24.9744 28.7208 25.2632C28.5395 25.552 28.281 25.7837 27.9747 25.9319Z"
            fill="#fff"
          />
          <path
            d="M22.0502 28.8206C21.7151 28.9837 21.3383 29.0374 20.9718 28.9743C20.6053 28.9112 20.2672 28.7345 20.0041 28.4685C20.1518 28.6161 20.3393 28.7163 20.543 28.7565C20.7468 28.7968 20.9577 28.7752 21.1493 28.6945C21.341 28.6139 21.5049 28.4778 21.6205 28.3032C21.7361 28.1286 21.7983 27.9234 21.7992 27.7132V1.28667C21.7993 1.0755 21.7376 0.869028 21.6218 0.693411C21.506 0.517794 21.3414 0.380933 21.1487 0.300166C20.956 0.219398 20.744 0.198358 20.5395 0.239711C20.335 0.281063 20.1473 0.382948 20 0.532458C20.2629 0.266131 20.6009 0.0890929 20.9675 0.0258279C21.334 -0.0374372 21.7109 0.0161968 22.0461 0.179312L27.9765 3.06698C28.2825 3.21491 28.5409 3.44744 28.7221 3.73775C28.9032 4.02806 28.9995 4.36431 29 4.7077V24.2922C29.0001 24.6353 28.9044 24.9715 28.7241 25.2619C28.5437 25.5524 28.286 25.7853 27.9806 25.9339L22.0502 28.8206Z"
            fill="#fff"
          />
        </>
      )}
    </svg>
  );
};

export default VScode;
