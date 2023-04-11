import { useState } from "react";
const Mongo = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  return (
    <svg
      height={size}
      viewBox="0 0 5 11"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
    >
      <title>Mongo</title>
      {realColor ? (
        <>
          <path
            d="M4.90825 4.37938C4.32205 1.82188 2.93634 0.981292 2.78747 0.66C2.65761 0.479417 2.54167 0.22275 2.4466 0C2.42991 0.226875 2.4211 0.313958 2.20406 0.542667C1.86876 0.802083 0.145883 2.23025 0.00582713 5.13517C-0.124954 7.84483 1.98609 9.45954 2.27269 9.66533L2.30516 9.68825C2.36484 10.1245 2.41586 10.5618 2.4582 11H2.68127C2.7341 10.5271 2.81306 10.0573 2.91778 9.59292C3.11117 9.45725 3.1979 9.38071 3.31198 9.27529C3.85225 8.78134 4.28161 8.18084 4.57231 7.5126C4.86301 6.84437 5.00858 6.12328 4.99961 5.39596C5.00425 5.02287 4.95184 4.63421 4.90825 4.37938ZM2.43362 8.13542C2.43362 8.13542 2.43362 4.33538 2.56115 4.33583C2.65993 4.33583 2.7884 9.23771 2.7884 9.23771C2.6117 9.21708 2.43362 8.43104 2.43362 8.13542Z"
            fill="#4EA94C"
          />
        </>
      ) : (
        <>
          <path
            d="M4.90825 4.37938C4.32205 1.82188 2.93634 0.981292 2.78747 0.66C2.65761 0.479417 2.54167 0.22275 2.4466 0C2.42991 0.226875 2.4211 0.313958 2.20406 0.542667C1.86876 0.802083 0.145883 2.23025 0.00582713 5.13517C-0.124954 7.84483 1.98609 9.45954 2.27269 9.66533L2.30516 9.68825C2.36484 10.1245 2.41586 10.5618 2.4582 11H2.68127C2.7341 10.5271 2.81306 10.0573 2.91778 9.59292C3.11117 9.45725 3.1979 9.38071 3.31198 9.27529C3.85225 8.78134 4.28161 8.18084 4.57231 7.5126C4.86301 6.84437 5.00858 6.12328 4.99961 5.39596C5.00425 5.02287 4.95184 4.63421 4.90825 4.37938ZM2.43362 8.13542C2.43362 8.13542 2.43362 4.33538 2.56115 4.33583C2.65993 4.33583 2.7884 9.23771 2.7884 9.23771C2.6117 9.21708 2.43362 8.43104 2.43362 8.13542Z"
            fill="#fff"
          />
        </>
      )}
    </svg>
  );
};

export default Mongo;
