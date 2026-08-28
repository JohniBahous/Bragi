const MetadataTagGenre = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 65"
    fill="none"
    {...props}
  >
    <rect width="100" height="65" rx="2" fill="#5200ff" />
    <rect x="3" y="3" width="94" height="59" fill="#e6e3f0" />
    <rect x="5" y="5" width="90" height="40" fill="#5200ff" stroke="#6f33ff" />

    <path
      d="M30 9h60"
      stroke="#b39dff"
      strokeWidth="2"
      strokeDasharray="1 7 3"
    />
    <path d="M10 42h80" stroke="#b39dff" strokeWidth="2" />

    <rect x="5" y="48" width="90" height="12" fill="#b39dff" stroke="#6f33ff" />

    <g transform="translate(6 7) scale(0.9)" fill="#e6e3f0">
      <path
        d="M18 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM2 7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M2 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM1 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0-12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        fill="#e6e3f0"
      />
    </g>
    <text x="7" y="37" fontSize="8" fontFamily="Sonara" fill="#e6e3f0">
      {props.label}
    </text>
  </svg>
);

export default MetadataTagGenre;
