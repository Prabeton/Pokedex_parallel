/* eslint-disable-next-line */
function SvgExample({ size, fill, stroke }) {
  const pathStyle1 = { fill: "#FFDD09" };
  const pathStyle2 = { fill: "#FFFFFF" };
  const pathStyle3 = { fill: "#FD9808" };

  return (
    <svg
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve">
      <g transform="translate(0 1)">
        <path
          style={pathStyle1}
          d="M392.708,178.2H275.802L384.175,7.533H247.642l-128,256h100.693L119.642,502.467L392.708,178.2z"
        />
        <path
          style={pathStyle2}
          d="M281.775,7.533h-34.133l-128,256h34.133L281.775,7.533z"
        />
        <path
          style={pathStyle3}
          d="M350.042,178.2l-204.8,243.2l-34.133,81.067L384.175,178.2H350.042z"
        />
        <path
          d="M119.642,511c-1.707,0-3.413,0-4.267-0.853c-3.413-2.56-5.12-6.827-3.413-10.24l95.573-227.84h-87.893
		c-2.56,0-5.973-1.707-7.68-4.267s-1.707-5.973,0-8.533l128-256c1.707-2.56,4.267-4.267,7.68-4.267h136.533
		c3.413,0-2.56,5.12,0.853,7.68l-99.84,157.867h100.693c3.413,0-2.56,5.12-0.853,7.68L126.468,508.44
        c124.762,510.147,122.202,511,119.642,511z M133.295,255h87.04
		c2.56,0-2.56,5.12-0.853,7.68l-78.507,187.733l225.28-267.093h-98.987
		c-3.413,0-5.973-1.707-7.68-4.267s-1.707-5.973,0-8.533L368.815,16.067H252.762L133.295,255z"
        />
      </g>
    </svg>
  );
}

export default SvgExample;
