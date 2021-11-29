import PropTypes from "prop-types";

const WIDTH = 123;
const HEIGHT = 74;
const ASPECT_RATIO = WIDTH / HEIGHT;

export const DeviceAgnosticUILogo = ({ width, units = "em" }) => {
  const height = width / ASPECT_RATIO;
  return (
    <svg
      width={`${width}${units}`}
      height={`${height}${units}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Device Agnostic UI logo</title>
      <defs>
        <rect id="l" x="23" y="-28" width="76" height="97" rx="10" />
        <mask id="l-mask">
          <use xlinkHref="#l" fill="white" transform="translate(8, -8)" />
        </mask>
        <rect id="m" x="40" y="6" width="83" height="50" rx="10" />
        <mask id="m-mask">
          <use xlinkHref="#m" fill="white" transform="translate(8, -8)" />
        </mask>
        <rect id="s" x="56" y="-16" width="34" height="57" rx="10" />
      </defs>
      <g transform="translate(0, 50) scale(1, .5773) rotate(-45)">
        <use
          xlinkHref="#l"
          fill="hsla(0, 0%, 0%, 0.06)"
          transform="translate(-8, 8)"
        />
        <use xlinkHref="#l" fill="#2979FF" />
        <use
          xlinkHref="#m"
          fill="hsla(0, 0%, 0%, 0.12)"
          transform="translate(-8, 8)"
          mask="url(#l-mask)"
        />
        <use xlinkHref="#m" fill="#FF0266" />
        <use
          xlinkHref="#s"
          fill="hsla(0, 0%, 0%, 0.12)"
          transform="translate(-8, 8)"
          mask="url(#m-mask)"
        />
        <use xlinkHref="#s" fill="#00E676" />
      </g>
    </svg>
  );
};

DeviceAgnosticUILogo.propTypes = {
  width: PropTypes.number.isRequired,
  units: PropTypes.string,
};
