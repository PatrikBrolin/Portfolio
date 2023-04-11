import { useState } from "react";
const Redux = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  return (
    <svg
      height={size}
      viewBox="0 0 70 67"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
    >
      <title>Reduz</title>
      {realColor ? (
        <>
          <path
            d="M48.5026 46.7923C51.0858 46.5226 53.0455 44.2775 52.9564 41.583C52.8675 38.8887 50.6403 36.7332 47.968 36.7332H47.79C45.0283 36.8231 42.8906 39.1581 42.9797 41.9422C43.0689 43.2895 43.6032 44.457 44.4049 45.2653C41.3763 51.2828 36.7443 55.6835 29.7962 59.3658C25.075 61.8806 20.1759 62.7788 15.2767 62.1502C11.2681 61.6113 8.15035 59.8152 6.19035 56.8511C3.34004 52.4504 3.07289 47.6902 5.47804 42.9302C7.17062 39.5173 9.84265 37.0025 11.5352 35.7451C11.1789 34.5776 10.6444 32.6018 10.3772 31.165C-2.53914 40.5952 -1.20285 53.3485 2.7166 59.3658C5.65605 63.8567 11.6244 66.6408 18.2161 66.6408C19.9976 66.6408 21.779 66.461 23.5607 66.0122C34.9628 63.7668 43.6034 56.9409 48.5026 46.7923ZM64.1804 35.6556C57.4104 27.6622 47.4337 23.2615 36.0317 23.2615H34.6065C33.8048 21.6449 32.1122 20.5669 30.2416 20.5669H30.0634C27.3022 20.6568 25.1644 22.9918 25.2533 25.7762C25.3425 28.4705 27.5693 30.626 30.2416 30.626H30.4196C32.3794 30.5361 34.0719 29.2788 34.7845 27.5723H36.388C43.158 27.5723 49.5715 29.5481 55.3618 33.4101C59.8155 36.374 63.0224 40.236 64.8039 44.9061C66.3182 48.6782 66.229 52.3605 64.6256 55.5041C62.1316 60.264 57.9449 62.8686 52.4221 62.8686C48.8589 62.8686 45.474 61.7907 43.6923 60.9824C42.7126 61.8806 40.9309 63.3174 39.6837 64.2159C43.5143 66.012 47.4337 67 51.1749 67C59.7264 67 66.051 62.2398 68.4562 57.4799C71.0393 52.2706 70.861 43.2895 64.1804 35.6556ZM18.9287 48.3187C19.0178 51.0132 21.2447 53.1685 23.917 53.1685H24.0953C26.8568 53.0789 28.9945 50.7436 28.9053 47.9595C28.8165 45.265 26.5893 43.1097 23.917 43.1097H23.739C23.5607 43.1097 23.2933 43.1097 23.1156 43.1993C19.4633 37.0921 17.949 30.4463 18.4835 23.2612C18.8396 17.8724 20.6213 13.2021 23.739 9.34009C26.3222 6.01703 31.3105 4.40043 34.6957 4.31083C44.1377 4.13109 48.146 15.9862 48.4135 20.7464C49.5715 21.0158 51.5312 21.6446 52.8675 22.0937C51.7983 7.5443 42.8906 0 34.3394 0C26.3222 0 18.9287 5.83783 15.989 14.4598C11.8915 25.9557 14.5638 37.0025 19.5521 45.7143C19.107 46.3429 18.8396 47.3307 18.9287 48.3187Z"
            fill="#764ABC"
          />
        </>
      ) : (
        <>
          <path
            d="M48.5026 46.7923C51.0858 46.5226 53.0455 44.2775 52.9564 41.583C52.8675 38.8887 50.6403 36.7332 47.968 36.7332H47.79C45.0283 36.8231 42.8906 39.1581 42.9797 41.9422C43.0689 43.2895 43.6032 44.457 44.4049 45.2653C41.3763 51.2828 36.7443 55.6835 29.7962 59.3658C25.075 61.8806 20.1759 62.7788 15.2767 62.1502C11.2681 61.6113 8.15035 59.8152 6.19035 56.8511C3.34004 52.4504 3.07289 47.6902 5.47804 42.9302C7.17062 39.5173 9.84265 37.0025 11.5352 35.7451C11.1789 34.5776 10.6444 32.6018 10.3772 31.165C-2.53914 40.5952 -1.20285 53.3485 2.7166 59.3658C5.65605 63.8567 11.6244 66.6408 18.2161 66.6408C19.9976 66.6408 21.779 66.461 23.5607 66.0122C34.9628 63.7668 43.6034 56.9409 48.5026 46.7923ZM64.1804 35.6556C57.4104 27.6622 47.4337 23.2615 36.0317 23.2615H34.6065C33.8048 21.6449 32.1122 20.5669 30.2416 20.5669H30.0634C27.3022 20.6568 25.1644 22.9918 25.2533 25.7762C25.3425 28.4705 27.5693 30.626 30.2416 30.626H30.4196C32.3794 30.5361 34.0719 29.2788 34.7845 27.5723H36.388C43.158 27.5723 49.5715 29.5481 55.3618 33.4101C59.8155 36.374 63.0224 40.236 64.8039 44.9061C66.3182 48.6782 66.229 52.3605 64.6256 55.5041C62.1316 60.264 57.9449 62.8686 52.4221 62.8686C48.8589 62.8686 45.474 61.7907 43.6923 60.9824C42.7126 61.8806 40.9309 63.3174 39.6837 64.2159C43.5143 66.012 47.4337 67 51.1749 67C59.7264 67 66.051 62.2398 68.4562 57.4799C71.0393 52.2706 70.861 43.2895 64.1804 35.6556ZM18.9287 48.3187C19.0178 51.0132 21.2447 53.1685 23.917 53.1685H24.0953C26.8568 53.0789 28.9945 50.7436 28.9053 47.9595C28.8165 45.265 26.5893 43.1097 23.917 43.1097H23.739C23.5607 43.1097 23.2933 43.1097 23.1156 43.1993C19.4633 37.0921 17.949 30.4463 18.4835 23.2612C18.8396 17.8724 20.6213 13.2021 23.739 9.34009C26.3222 6.01703 31.3105 4.40043 34.6957 4.31083C44.1377 4.13109 48.146 15.9862 48.4135 20.7464C49.5715 21.0158 51.5312 21.6446 52.8675 22.0937C51.7983 7.5443 42.8906 0 34.3394 0C26.3222 0 18.9287 5.83783 15.989 14.4598C11.8915 25.9557 14.5638 37.0025 19.5521 45.7143C19.107 46.3429 18.8396 47.3307 18.9287 48.3187Z"
            fill="#fff"
          />
        </>
      )}
    </svg>
  );
};

export default Redux;