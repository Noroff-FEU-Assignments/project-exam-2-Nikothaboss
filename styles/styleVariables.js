export const colors = {
  primary: "#fff",
  secondary: "gray",
  thirdColor: "",
  cta: "#be7171",
};

export const boxShadows = {
  card: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  card_hover: `${colors.cta} 0px 3px 8px;`,
};

export const padding = {
  desktop: "1.5rem",
  tablet: "1.2rem",
  mobile: "1rem",
};

export const fonts = {
  lato: "'Lato', sans-serif",
  poppins: "'Poppins', sans-serif",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};
