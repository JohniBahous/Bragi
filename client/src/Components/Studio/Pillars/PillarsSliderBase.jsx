const PillarsSliderBase = ({ volume }) => {
  const WIDTH = 100;
  const HEIGHT = 400;

  const v = Math.max(0, Math.min(1, volume));
  const fillHeight = HEIGHT * v;
  const fillY = HEIGHT - fillHeight;
  const thumbY = 375 - volume * 375;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={WIDTH} height={HEIGHT}>
      <defs>
        <clipPath id="volume-layer">
          <rect x={0} y={fillY} width={WIDTH} height={fillHeight} />
        </clipPath>
      </defs>

      <rect
        width={WIDTH}
        height={HEIGHT}
        fill="#1b1b1b"
        stroke="#ff9f1c"
        strokeWidth={5}
      />
      <g>
        <path
          fill="#1b1b1b"
          stroke="#ff9f1c"
          stroke-width="5"
          d="M0 0h100v400H0z"
        />
        <path stroke="#ff9f1c" stroke-width="2" d="M0 10h10M0 20h10M0 30h10" />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 40h15" />
        <path stroke="#ff9f1c" stroke-width="2" d="M0 50h10M0 60h10M0 70h10" />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 80h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 90h10M0 100h10M0 110h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 120h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 130h10M0 140h10M0 150h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 160h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 170h10M0 180h10M0 190h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 200h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 210h10M0 220h10M0 230h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 240h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 250h10M0 260h10M0 270h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 280h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 290h10M0 300h10M0 310h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 320h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 330h10M0 340h10M0 350h10"
        />
        <path stroke="#ff9f1c" stroke-width="3" d="M0 360h15" />
        <path
          stroke="#ff9f1c"
          stroke-width="2"
          d="M0 370h10M0 380h10M0 390h10"
        />
        <text x="25" y="45" fill="#ff9f1c">
          {" "}
          90{" "}
        </text>
        <text x="25" y="85" fill="#ff9f1c">
          {" "}
          80{" "}
        </text>
        <text x="25" y="125" fill="#ff9f1c">
          {" "}
          70{" "}
        </text>
        <text x="25" y="165" fill="#ff9f1c">
          {" "}
          60{" "}
        </text>
        <text x="25" y="205" fill="#ff9f1c">
          {" "}
          50{" "}
        </text>
        <text x="25" y="245" fill="#ff9f1c">
          {" "}
          40{" "}
        </text>
        <text x="25" y="285" fill="#ff9f1c">
          {" "}
          30{" "}
        </text>
        <text x="25" y="325" fill="#ff9f1c">
          {" "}
          20{" "}
        </text>
        <text x="25" y="365" fill="#ff9f1c">
          {" "}
          10{" "}
        </text>
      </g>

      <g clipPath="url(#volume-layer)">
        <rect width={WIDTH} height={HEIGHT} fill="#ff9f1c" />

        <g fill="#1b1b1b" fontSize={75} textAnchor="middle" fontWeight="800">
          <text x={50} y={70}>
            V
          </text>
          <text x={50} y={135}>
            O
          </text>
          <text x={50} y={200}>
            L
          </text>
          <text x={50} y={265}>
            U
          </text>
          <text x={50} y={320}>
            M
          </text>
          <text x={50} y={385}>
            E
          </text>
        </g>
      </g>
      <rect
        x={0}
        y={thumbY}
        width={100}
        height={25}
        fill="#ff9f1c"
        stroke="#1b1b1b"
        strokeWidth={3}
      />
    </svg>
  );
};

export default PillarsSliderBase;
