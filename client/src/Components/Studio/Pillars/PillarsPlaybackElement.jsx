import "../../../style/main-view/pillars.css";
const PillarsTest = ({ audioTime, audioDuration, songData }) => {
  return (
    <svg viewBox="0 0 750 250" xmlns="http://www.w3.org/2000/svg">
      <rect
        width={750}
        height={250}
        strokeWidth={5}
        fill="#1b1b1b"
        stroke="#ff9f1c"
      />

      <line x1={30} y1={17} x2={720} y2={17} stroke="#ff9f1c" strokeWidth={3} />
      <line x1="10" y1="10" x2="40" y2="10" stroke="#ff9f1c" strokeWidth="2" />
      <line x1="10" y1="10" x2="10" y2="40" stroke="#ff9f1c" strokeWidth="2" />

      <line
        x1="740"
        y1="10"
        x2="710"
        y2="10"
        stroke="#ff9f1c"
        strokeWidth="2"
      />
      <line
        x1="740"
        y1="10"
        x2="740"
        y2="40"
        stroke="#ff9f1c"
        strokeWidth="2"
      />

      <line
        x1="10"
        y1="240"
        x2="40"
        y2="240"
        stroke="#ff9f1c"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="240"
        x2="10"
        y2="210"
        stroke="#ff9f1c"
        strokeWidth="2"
      />

      <line
        x1="740"
        y1="240"
        x2="710"
        y2="240"
        stroke="#ff9f1c"
        strokeWidth="2"
      />
      <line
        x1="740"
        y1="240"
        x2="740"
        y2="210"
        stroke="#ff9f1c"
        strokeWidth="2"
      />

      <path
        transform="translate(30, 30)"
        fill="transparent"
        stroke="#ff9f1c"
        strokeWidth={3}
        d="m 0 15 L 0 135 L 15 150 L 135 150 L 150 135 L 150 15 L 135 0 L 15 0 l -15 15 m 135 20 L 15 35"
      />

      <path
        transform="translate(210, 30)"
        fill="transparent"
        stroke="#ff9f1c"
        strokeWidth={3}
        d="m 0 15 L 0 135 L 15 150 L 135 150 L 150 135 L 150 15 L 135 0 L 15 0 l -15 15 m 135 20 L 15 35"
      />

      <path
        transform="translate(385, 30)"
        fill="transparent"
        stroke="#ff9f1c"
        strokeWidth={3}
        d="m0 20.4188L0 183.7688 33.75 204.1875 303.75 204.1875 337.5 183.7688 337.5 20.4188 303.75 0 33.75 0l-33.75 20.4188m302.25 35.5812L34.5 56"
      />

      <line x1="45" y1="80" x2="165" y2="80" stroke="#ff9f1c" strokeWidth="2" />
      <line
        x1="225"
        y1="80"
        x2="345"
        y2="80"
        stroke="#ff9f1c"
        strokeWidth="2"
      />

      <line
        strokeDasharray="15,10,5,10,15"
        x1={30}
        y1={200}
        x2={363}
        y2={200}
        stroke="#ff9f1c"
        strokeWidth={1.5}
      />

      <line
        strokeDasharray="15,5,5,10,5"
        x1={30}
        y1={215}
        x2={363}
        y2={215}
        stroke="#ff9f1c"
        strokeWidth={1.5}
      />

      <line
        strokeDasharray="5,10,5,1,15"
        x1={30}
        y1={230}
        x2={363}
        y2={230}
        stroke="#ff9f1c"
        strokeWidth={1.5}
      />

      <text x={46} y={60} fontSize={24} fontFamily="Miratrix" fill="#ff9f1c">
        PLAY TIME
      </text>

      <text x={47} y={145} fontSize={45} fontFamily="Miratrix" fill="#ff9f1c">
        {audioTime}
      </text>

      <text x={224} y={60} fontSize={27} fontFamily="Miratrix" fill="#ff9f1c">
        DURATION
      </text>

      <text x={227} y={145} fontSize={45} fontFamily="Miratrix" fill="#ff9f1c">
        {audioDuration}
      </text>

      <text x={423} y={80} fontSize={45} fontFamily="Miratrix" fill="#ff9f1c">
        TRACK DATA
      </text>

      <line
        x1="415"
        y1="140"
        x2="700"
        y2="140"
        stroke="#ff9f1c"
        strokeWidth="1.5"
      />
      <line
        x1="415"
        y1="180"
        x2="700"
        y2="180"
        stroke="#ff9f1c"
        strokeWidth="1.5"
      />

      <text x={415} y={130} fontSize={30} fontFamily="Miratrix" fill="#ff9f1c">
        GENRE : {songData.genre}
      </text>

      <text x={415} y={175} fontSize={30} fontFamily="Miratrix" fill="#ff9f1c">
        BPM : {songData.bpm}
      </text>

      <text x={415} y={215} fontSize={30} fontFamily="Miratrix" fill="#ff9f1c">
        RELEASE : {songData.yor}
      </text>
    </svg>
  );
};
export default PillarsTest;
