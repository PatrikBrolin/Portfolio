import { useState } from "react";
const Postman = ({ size }) => {
  const [realColor, setRealColor] = useState(false);
  return (
    <svg
      height={size}
      viewBox="0 0 800 800"
      onMouseEnter={() => setRealColor(true)}
      onMouseLeave={() => setRealColor(false)}
    >
      <title>Postman</title>
      {realColor ? (
        <>
          <path
            d="M796.729 450.791C824.723 231.63 669.951 31.2665 451.191 3.2715C232.43 -24.7234 31.2665 130.049 3.2715 348.809C-24.7234 567.57 130.049 768.334 348.809 796.729C567.97 824.723 768.334 669.951 796.729 450.791Z"
            fill="#FF6C37"
          />
          <path
            d="M544.374 256.826L375.605 425.595L328.013 378.004C493.983 212.034 510.38 226.431 544.374 256.826Z"
            fill="white"
          />
          <path
            d="M375.604 429.595C374.405 429.595 373.605 429.195 372.805 428.395L324.814 380.803C323.214 379.204 323.214 376.804 324.814 375.204C493.583 206.435 511.18 222.432 546.774 254.426C547.573 255.226 547.973 256.026 547.973 257.226C547.973 258.425 547.573 259.225 546.774 260.025L378.004 428.395C377.604 429.195 376.404 429.595 375.604 429.595ZM333.612 378.004L375.604 419.996L538.375 257.226C508.78 230.83 488.784 222.832 333.612 378.004Z"
            fill="#FF6C37"
          />
          <path
            d="M423.996 473.987L378.004 427.995L546.773 259.225C591.965 304.817 524.378 378.804 423.996 473.987Z"
            fill="white"
          />
          <path
            d="M423.996 477.986C422.796 477.986 421.996 477.586 421.196 476.786L375.205 430.794C374.405 429.995 374.405 429.195 374.405 427.995C374.405 426.795 374.805 425.995 375.605 425.195L544.374 256.426C545.974 254.826 548.373 254.826 549.973 256.426C560.371 266.024 565.97 279.622 565.57 293.619C564.77 338.011 514.38 394.401 427.195 476.786C425.996 477.586 424.796 477.986 423.996 477.986ZM383.603 427.995C409.199 453.99 419.997 464.388 423.996 468.388C491.184 404.399 556.372 338.811 556.772 293.619C557.172 283.221 553.173 272.823 546.374 264.824L383.603 427.995Z"
            fill="#FF6C37"
          />
          <path
            d="M328.813 379.204L362.807 413.198C363.607 413.998 363.607 414.797 362.807 415.597C362.407 415.997 362.407 415.997 362.007 415.997L291.62 431.194C288.02 431.594 284.821 429.195 284.021 425.595C283.621 423.596 284.421 421.596 285.621 420.396L326.413 379.604C327.213 378.804 328.413 378.404 328.813 379.204Z"
            fill="white"
          />
          <path
            d="M290.42 435.194C284.421 435.194 280.021 430.395 280.021 424.396C280.021 421.596 281.221 418.797 283.221 416.797L324.014 376.004C326.413 374.005 329.613 374.005 332.012 376.004L366.006 409.998C368.406 411.998 368.406 415.597 366.006 417.997C365.206 418.797 364.406 419.197 363.207 419.597L292.819 434.794C292.019 434.794 291.219 435.194 290.42 435.194ZM327.613 383.603L288.42 422.796C287.62 423.596 287.22 424.796 288.02 425.995C288.42 427.195 289.62 427.595 290.82 427.195L356.808 412.798L327.613 383.603Z"
            fill="#FF6C37"
          />
          <path
            d="M633.558 163.243C607.963 138.447 566.77 139.247 541.975 165.242C517.179 191.238 517.979 232.03 543.974 256.826C565.17 277.222 597.165 280.822 622.36 265.624L576.768 220.033L633.558 163.243Z"
            fill="white"
          />
          <path
            d="M588.766 278.822C550.773 278.822 519.979 248.027 519.979 210.034C519.979 172.041 550.773 141.247 588.766 141.247C606.363 141.247 623.56 148.045 636.358 160.443C637.157 161.243 637.557 162.043 637.557 163.243C637.557 164.442 637.157 165.242 636.358 166.042L582.367 220.032L624.76 262.425C626.359 264.024 626.359 266.424 624.76 268.024C624.36 268.424 624.36 268.424 623.96 268.824C613.562 275.222 601.164 278.822 588.766 278.822ZM588.766 149.645C555.172 149.645 527.977 176.84 528.377 210.434C528.377 244.028 555.572 271.223 589.166 270.823C598.364 270.823 607.563 268.824 615.961 264.424L573.969 222.832C573.169 222.032 572.769 221.232 572.769 220.032C572.769 218.833 573.169 218.033 573.969 217.233L627.559 163.643C616.761 154.444 603.164 149.645 588.766 149.645Z"
            fill="#FF6C37"
          />
          <path
            d="M634.758 164.442L633.958 163.643L576.768 220.032L621.96 265.224C626.359 262.425 630.759 259.225 634.358 255.626C659.953 230.431 659.953 189.638 634.758 164.442Z"
            fill="white"
          />
          <path
            d="M622.36 269.624C621.16 269.624 620.36 269.224 619.561 268.424L573.969 222.832C573.169 222.032 572.769 221.232 572.769 220.032C572.769 218.833 573.169 218.033 573.969 217.233L630.759 160.443C632.358 158.843 634.758 158.843 636.358 160.443L637.557 161.243C664.353 188.038 664.353 231.23 637.957 258.426C633.958 262.425 629.559 266.024 624.76 268.824C623.56 269.224 622.76 269.624 622.36 269.624ZM582.367 220.032L622.76 260.425C625.959 258.426 629.159 255.626 631.558 253.226C654.354 230.431 655.554 193.237 633.558 169.242L582.367 220.032Z"
            fill="#FF6C37"
          />
          <path
            d="M551.173 264.024C541.575 254.426 525.978 254.426 516.379 264.024L365.606 414.797L390.802 439.993L550.373 300.018C560.771 291.219 561.571 275.622 552.773 265.224C551.973 264.824 551.573 264.424 551.173 264.024Z"
            fill="white"
          />
          <path
            d="M390.402 443.992C389.202 443.992 388.402 443.592 387.602 442.792L362.407 417.597C360.807 415.997 360.807 413.597 362.407 411.998L513.18 261.225C524.378 250.027 542.374 250.027 553.572 261.225C564.77 272.423 564.77 290.42 553.572 301.618C553.172 302.018 552.773 302.417 552.373 302.817L392.801 442.792C392.401 443.592 391.602 443.992 390.402 443.992ZM371.205 414.797L390.802 434.394L547.573 296.818C556.372 289.62 557.172 276.422 549.973 267.624C542.774 258.825 529.577 258.025 520.778 265.224C520.378 265.624 519.978 266.024 519.179 266.424L371.205 414.797Z"
            fill="#FF6C37"
          />
          <path
            d="M250.027 586.366C248.428 587.166 247.628 588.766 248.028 590.366L254.826 619.16C256.426 623.16 254.027 627.959 249.627 629.159C246.428 630.358 242.829 629.159 240.829 626.759L196.837 583.167L340.411 439.593L390.002 440.393L423.596 473.987C415.597 480.785 367.206 527.577 250.027 586.366Z"
            fill="white"
          />
          <path
            d="M246.828 633.158C243.628 633.158 240.429 631.958 238.429 629.559L194.837 585.966C194.037 585.167 193.637 584.367 193.637 583.167C193.637 581.967 194.037 581.167 194.837 580.367L338.411 436.793C339.211 435.993 340.411 435.594 341.211 435.594L390.802 436.393C392.001 436.393 392.801 436.793 393.601 437.593L427.195 471.187C427.995 471.987 428.395 473.187 428.395 474.387C428.395 475.586 427.995 476.386 426.795 477.186L423.996 479.586C381.603 516.779 324.014 553.972 252.427 589.566L259.225 617.961C260.425 623.16 258.026 628.759 253.226 631.558C250.827 632.758 248.827 633.158 246.828 633.158ZM202.836 583.167L244.028 623.96C245.228 625.959 247.627 626.759 249.627 625.559C251.627 624.359 252.427 621.96 251.227 619.96L244.428 591.165C243.628 587.566 245.228 584.367 248.427 582.767C319.215 547.173 376.404 510.38 418.397 473.987L388.802 444.392L342.81 443.592L202.836 583.167Z"
            fill="#FF6C37"
          />
          <path
            d="M162.843 617.561L197.237 583.167L248.427 634.358L166.842 628.759C163.243 628.359 160.843 625.159 161.243 621.56C161.243 619.96 161.643 618.361 162.843 617.561Z"
            fill="white"
          />
          <path
            d="M248.427 637.957L166.442 632.358C160.443 631.958 156.444 626.759 156.844 620.76C157.244 618.361 158.044 615.961 160.043 614.361L194.437 579.968C196.037 578.368 198.436 578.368 200.036 579.968L251.227 631.158C252.427 632.358 252.827 633.958 252.027 635.558C251.227 637.157 250.027 637.957 248.427 637.957ZM197.237 588.766L165.642 620.36C164.443 621.16 164.443 623.16 165.642 623.96C166.042 624.36 166.442 624.759 167.242 624.759L238.029 629.559L197.237 588.766Z"
            fill="#FF6C37"
          />
          <path
            d="M326.413 457.99C324.014 457.99 322.414 455.99 322.414 453.99C322.414 452.791 322.814 451.991 323.614 451.191L362.407 412.398C364.007 410.798 366.406 410.798 368.006 412.398L393.201 437.593C394.401 438.793 394.801 439.993 394.401 441.593C394.001 442.792 392.801 443.992 391.202 444.392L327.213 457.99C326.813 457.99 326.413 457.99 326.413 457.99ZM365.206 420.796L338.811 447.191L382.003 437.993L365.206 420.796Z"
            fill="#FF6C37"
          />
          <path
            d="M390.002 440.393L346.01 449.991C342.811 450.791 339.611 448.791 338.811 445.592C338.411 443.592 338.811 441.592 340.411 439.993L364.807 415.597L390.002 440.393Z"
            fill="white"
          />
          <path
            d="M345.21 453.99C339.611 453.99 335.212 449.591 335.212 443.992C335.212 441.193 336.412 438.793 338.011 436.793L362.407 412.398C364.007 410.798 366.406 410.798 368.006 412.398L393.201 437.593C394.401 438.793 394.801 439.993 394.401 441.593C394.001 442.792 392.802 443.992 391.202 444.392L347.21 453.99C346.41 453.99 345.61 453.99 345.21 453.99ZM365.207 420.796L343.61 442.392C342.811 443.192 342.811 443.992 343.21 444.792C343.61 445.592 344.41 445.992 345.61 445.992L382.403 437.993L365.207 420.796Z"
            fill="#FF6C37"
          />
          <path
            d="M635.158 202.836C634.358 200.436 631.558 199.236 629.159 200.036C626.759 200.836 625.559 203.635 626.359 206.035C626.359 206.435 626.759 206.835 626.759 207.235C629.159 212.034 628.359 218.033 625.159 222.432C623.56 224.432 623.96 227.231 625.559 228.831C627.559 230.431 630.359 230.031 631.958 228.031C637.957 220.432 639.157 210.834 635.158 202.836Z"
            fill="#FF6C37"
          />
        </>
      ) : (
        <>
          <path
            d="M796.729 450.791C824.723 231.63 669.951 31.2665 451.191 3.2715C232.43 -24.7234 31.2665 130.049 3.2715 348.809C-24.7234 567.57 130.049 768.334 348.809 796.729C567.97 824.723 768.334 669.951 796.729 450.791Z"
            fill="#fff"
          />
          <path
            d="M544.374 256.826L375.605 425.595L328.013 378.004C493.983 212.034 510.38 226.431 544.374 256.826Z"
            fill="#000000"
          />
          <path
            d="M375.604 429.595C374.405 429.595 373.605 429.195 372.805 428.395L324.814 380.803C323.214 379.204 323.214 376.804 324.814 375.204C493.583 206.435 511.18 222.432 546.774 254.426C547.573 255.226 547.973 256.026 547.973 257.226C547.973 258.425 547.573 259.225 546.774 260.025L378.004 428.395C377.604 429.195 376.404 429.595 375.604 429.595ZM333.612 378.004L375.604 419.996L538.375 257.226C508.78 230.83 488.784 222.832 333.612 378.004Z"
            fill="#fff"
          />
          <path
            d="M423.996 473.987L378.004 427.995L546.773 259.225C591.965 304.817 524.378 378.804 423.996 473.987Z"
            fill="#000000"
          />
          <path
            d="M423.996 477.986C422.796 477.986 421.996 477.586 421.196 476.786L375.205 430.794C374.405 429.995 374.405 429.195 374.405 427.995C374.405 426.795 374.805 425.995 375.605 425.195L544.374 256.426C545.974 254.826 548.373 254.826 549.973 256.426C560.371 266.024 565.97 279.622 565.57 293.619C564.77 338.011 514.38 394.401 427.195 476.786C425.996 477.586 424.796 477.986 423.996 477.986ZM383.603 427.995C409.199 453.99 419.997 464.388 423.996 468.388C491.184 404.399 556.372 338.811 556.772 293.619C557.172 283.221 553.173 272.823 546.374 264.824L383.603 427.995Z"
            fill="#fff"
          />
          <path
            d="M328.813 379.204L362.807 413.198C363.607 413.998 363.607 414.797 362.807 415.597C362.407 415.997 362.407 415.997 362.007 415.997L291.62 431.194C288.02 431.594 284.821 429.195 284.021 425.595C283.621 423.596 284.421 421.596 285.621 420.396L326.413 379.604C327.213 378.804 328.413 378.404 328.813 379.204Z"
            fill="#000000"
          />
          <path
            d="M290.42 435.194C284.421 435.194 280.021 430.395 280.021 424.396C280.021 421.596 281.221 418.797 283.221 416.797L324.014 376.004C326.413 374.005 329.613 374.005 332.012 376.004L366.006 409.998C368.406 411.998 368.406 415.597 366.006 417.997C365.206 418.797 364.406 419.197 363.207 419.597L292.819 434.794C292.019 434.794 291.219 435.194 290.42 435.194ZM327.613 383.603L288.42 422.796C287.62 423.596 287.22 424.796 288.02 425.995C288.42 427.195 289.62 427.595 290.82 427.195L356.808 412.798L327.613 383.603Z"
            fill="#fff"
          />
          <path
            d="M633.558 163.243C607.963 138.447 566.77 139.247 541.975 165.242C517.179 191.238 517.979 232.03 543.974 256.826C565.17 277.222 597.165 280.822 622.36 265.624L576.768 220.033L633.558 163.243Z"
            fill="#000000"
          />
          <path
            d="M588.766 278.822C550.773 278.822 519.979 248.027 519.979 210.034C519.979 172.041 550.773 141.247 588.766 141.247C606.363 141.247 623.56 148.045 636.358 160.443C637.157 161.243 637.557 162.043 637.557 163.243C637.557 164.442 637.157 165.242 636.358 166.042L582.367 220.032L624.76 262.425C626.359 264.024 626.359 266.424 624.76 268.024C624.36 268.424 624.36 268.424 623.96 268.824C613.562 275.222 601.164 278.822 588.766 278.822ZM588.766 149.645C555.172 149.645 527.977 176.84 528.377 210.434C528.377 244.028 555.572 271.223 589.166 270.823C598.364 270.823 607.563 268.824 615.961 264.424L573.969 222.832C573.169 222.032 572.769 221.232 572.769 220.032C572.769 218.833 573.169 218.033 573.969 217.233L627.559 163.643C616.761 154.444 603.164 149.645 588.766 149.645Z"
            fill="#fff"
          />
          <path
            d="M634.758 164.442L633.958 163.643L576.768 220.032L621.96 265.224C626.359 262.425 630.759 259.225 634.358 255.626C659.953 230.431 659.953 189.638 634.758 164.442Z"
            fill="#000000"
          />
          <path
            d="M622.36 269.624C621.16 269.624 620.36 269.224 619.561 268.424L573.969 222.832C573.169 222.032 572.769 221.232 572.769 220.032C572.769 218.833 573.169 218.033 573.969 217.233L630.759 160.443C632.358 158.843 634.758 158.843 636.358 160.443L637.557 161.243C664.353 188.038 664.353 231.23 637.957 258.426C633.958 262.425 629.559 266.024 624.76 268.824C623.56 269.224 622.76 269.624 622.36 269.624ZM582.367 220.032L622.76 260.425C625.959 258.426 629.159 255.626 631.558 253.226C654.354 230.431 655.554 193.237 633.558 169.242L582.367 220.032Z"
            fill="#fff"
          />
          <path
            d="M551.173 264.024C541.575 254.426 525.978 254.426 516.379 264.024L365.606 414.797L390.802 439.993L550.373 300.018C560.771 291.219 561.571 275.622 552.773 265.224C551.973 264.824 551.573 264.424 551.173 264.024Z"
            fill="#000000"
          />
          <path
            d="M390.402 443.992C389.202 443.992 388.402 443.592 387.602 442.792L362.407 417.597C360.807 415.997 360.807 413.597 362.407 411.998L513.18 261.225C524.378 250.027 542.374 250.027 553.572 261.225C564.77 272.423 564.77 290.42 553.572 301.618C553.172 302.018 552.773 302.417 552.373 302.817L392.801 442.792C392.401 443.592 391.602 443.992 390.402 443.992ZM371.205 414.797L390.802 434.394L547.573 296.818C556.372 289.62 557.172 276.422 549.973 267.624C542.774 258.825 529.577 258.025 520.778 265.224C520.378 265.624 519.978 266.024 519.179 266.424L371.205 414.797Z"
            fill="#fff"
          />
          <path
            d="M250.027 586.366C248.428 587.166 247.628 588.766 248.028 590.366L254.826 619.16C256.426 623.16 254.027 627.959 249.627 629.159C246.428 630.358 242.829 629.159 240.829 626.759L196.837 583.167L340.411 439.593L390.002 440.393L423.596 473.987C415.597 480.785 367.206 527.577 250.027 586.366Z"
            fill="#000000"
          />
          <path
            d="M246.828 633.158C243.628 633.158 240.429 631.958 238.429 629.559L194.837 585.966C194.037 585.167 193.637 584.367 193.637 583.167C193.637 581.967 194.037 581.167 194.837 580.367L338.411 436.793C339.211 435.993 340.411 435.594 341.211 435.594L390.802 436.393C392.001 436.393 392.801 436.793 393.601 437.593L427.195 471.187C427.995 471.987 428.395 473.187 428.395 474.387C428.395 475.586 427.995 476.386 426.795 477.186L423.996 479.586C381.603 516.779 324.014 553.972 252.427 589.566L259.225 617.961C260.425 623.16 258.026 628.759 253.226 631.558C250.827 632.758 248.827 633.158 246.828 633.158ZM202.836 583.167L244.028 623.96C245.228 625.959 247.627 626.759 249.627 625.559C251.627 624.359 252.427 621.96 251.227 619.96L244.428 591.165C243.628 587.566 245.228 584.367 248.427 582.767C319.215 547.173 376.404 510.38 418.397 473.987L388.802 444.392L342.81 443.592L202.836 583.167Z"
            fill="#fff"
          />
          <path
            d="M162.843 617.561L197.237 583.167L248.427 634.358L166.842 628.759C163.243 628.359 160.843 625.159 161.243 621.56C161.243 619.96 161.643 618.361 162.843 617.561Z"
            fill="#000000"
          />
          <path
            d="M248.427 637.957L166.442 632.358C160.443 631.958 156.444 626.759 156.844 620.76C157.244 618.361 158.044 615.961 160.043 614.361L194.437 579.968C196.037 578.368 198.436 578.368 200.036 579.968L251.227 631.158C252.427 632.358 252.827 633.958 252.027 635.558C251.227 637.157 250.027 637.957 248.427 637.957ZM197.237 588.766L165.642 620.36C164.443 621.16 164.443 623.16 165.642 623.96C166.042 624.36 166.442 624.759 167.242 624.759L238.029 629.559L197.237 588.766Z"
            fill="#fff"
          />
          <path
            d="M326.413 457.99C324.014 457.99 322.414 455.99 322.414 453.99C322.414 452.791 322.814 451.991 323.614 451.191L362.407 412.398C364.007 410.798 366.406 410.798 368.006 412.398L393.201 437.593C394.401 438.793 394.801 439.993 394.401 441.593C394.001 442.792 392.801 443.992 391.202 444.392L327.213 457.99C326.813 457.99 326.413 457.99 326.413 457.99ZM365.206 420.796L338.811 447.191L382.003 437.993L365.206 420.796Z"
            fill="#fff"
          />
          <path
            d="M390.002 440.393L346.01 449.991C342.811 450.791 339.611 448.791 338.811 445.592C338.411 443.592 338.811 441.592 340.411 439.993L364.807 415.597L390.002 440.393Z"
            fill="#000000"
          />
          <path
            d="M345.21 453.99C339.611 453.99 335.212 449.591 335.212 443.992C335.212 441.193 336.412 438.793 338.011 436.793L362.407 412.398C364.007 410.798 366.406 410.798 368.006 412.398L393.201 437.593C394.401 438.793 394.801 439.993 394.401 441.593C394.001 442.792 392.802 443.992 391.202 444.392L347.21 453.99C346.41 453.99 345.61 453.99 345.21 453.99ZM365.207 420.796L343.61 442.392C342.811 443.192 342.811 443.992 343.21 444.792C343.61 445.592 344.41 445.992 345.61 445.992L382.403 437.993L365.207 420.796Z"
            fill="#fff"
          />
          <path
            d="M635.158 202.836C634.358 200.436 631.558 199.236 629.159 200.036C626.759 200.836 625.559 203.635 626.359 206.035C626.359 206.435 626.759 206.835 626.759 207.235C629.159 212.034 628.359 218.033 625.159 222.432C623.56 224.432 623.96 227.231 625.559 228.831C627.559 230.431 630.359 230.031 631.958 228.031C637.957 220.432 639.157 210.834 635.158 202.836Z"
            fill="#fff"
          />
        </>
      )}
    </svg>
  );
};

export default Postman;