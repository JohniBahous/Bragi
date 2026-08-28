const MetadataTagRelease = (props) => (
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

    <g transform="translate(8 5) scale(1.7)" fill="#e6e3f0">
      <path d="M11.882 3.187a.476.476 0 0 1 .475.475v11.063a.476.476 0 0 1-.475.475H1.118a.476.476 0 0 1-.475-.475V3.662a.476.476 0 0 1 .475-.475h1.328v.721a1.425 1.425 0 0 0 2.85 0v-.72H7.71v.72a1.425 1.425 0 0 0 2.85 0v-.72zm-.634 3.37H1.752v7.535h9.496zm-7.384.821H2.621V8.67h1.243zm0 2.292H2.621v1.292h1.243zm0 2.292H2.621v1.291h1.243zm.561-8.054V2.475a.554.554 0 1 0-1.108 0v1.433a.554.554 0 1 0 1.108 0m1.613 3.47H4.794V8.67h1.244zm0 2.292H4.794v1.292h1.244zm0 2.292H4.794v1.291h1.244zm2.174-4.584H6.968V8.67h1.244zm0 2.292H6.968v1.292h1.244zm0 2.292H6.968v1.291h1.244zm1.477-8.054V2.475a.554.554 0 0 0-1.108 0v1.433a.554.554 0 0 0 1.108 0m.696 3.47H9.142V8.67h1.243zm0 2.292H9.142v1.292h1.243zm0 2.292H9.142v1.291h1.243z" />
    </g>
    <text x="30" y="35" fontSize="12" fontFamily="Sonara" fill="#e6e3f0">
      {props.label}
    </text>
  </svg>
);

export default MetadataTagRelease;
