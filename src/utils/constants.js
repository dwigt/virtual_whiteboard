export const SIZES = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  ml: 48
};

export const COLORS = {
  dark: "#001233",
  light: "#0353A4",
  grey1: "#5C677D",
  white: "#fff"
};

const DEVICE_SIZE = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const DEVICE = {
  mobileS: `(min-width: ${DEVICE_SIZE.mobileS})`,
  mobileM: `(min-width: ${DEVICE_SIZE.mobileM})`,
  mobileL: `(min-width: ${DEVICE_SIZE.mobileL})`,
  laptop: `(min-width: ${DEVICE_SIZE.laptop})`,
  laptopL: `(min-width: ${DEVICE_SIZE.laptopL})`,
  desktop: `(min-width: ${DEVICE_SIZE.desktop})`,
  desktopL: `(min-width: ${DEVICE_SIZE.desktop})`,
};

