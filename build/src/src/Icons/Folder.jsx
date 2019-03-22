import React from "react";

// MdFolder

export default function(props) {
  const scale = props.scale || 1;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24 * scale}
      height={24 * scale}
      viewBox="2 2 20 20"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path
        fill="currentColor"
        d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
      />
    </svg>
  );
}
