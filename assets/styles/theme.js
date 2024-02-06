import { Poppins, Cairo } from "next/font/google";

const fontPoppins900 = Poppins({ weight: "900", subsets: ["latin"] });
const fontPoppins800 = Poppins({ weight: "800", subsets: ["latin"] });
const fontPoppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const fontPoppins600 = Poppins({ weight: "600", subsets: ["latin"] });
const fontPoppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const fontPoppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const fontPoppins300 = Poppins({ weight: "300", subsets: ["latin"] });

// =================================================================

const fontCairo900 = Cairo({ weight: "900", subsets: ["latin"] });
const fontCairo800 = Cairo({ weight: "800", subsets: ["latin"] });
const fontCairo700 = Cairo({ weight: "700", subsets: ["latin"] });
const fontCairo600 = Cairo({ weight: "600", subsets: ["latin"] });
const fontCairo500 = Cairo({ weight: "500", subsets: ["latin"] });
const fontCairo400 = Cairo({ weight: "400", subsets: ["latin"] });
const fontCairo300 = Cairo({ weight: "300", subsets: ["latin"] });
const fontCairo200 = Cairo({ weight: "200", subsets: ["latin"] });

// ############# fonts #################

const fonts = {
  poppins: {
    weight900: { ...fontPoppins900.style },
    weight800: { ...fontPoppins800.style },
    weight700: { ...fontPoppins700.style },
    weight600: { ...fontPoppins600.style },
    weight500: { ...fontPoppins500.style },
    weight400: { ...fontPoppins400.style },
    weight300: { ...fontPoppins300.style },
    VeryLarge: { fontSize: 75 },
    MidLarge: { fontSize: 64 },
    heading1: { fontSize: 56 },
    heading2: { fontSize: 48 },
    heading3: { fontSize: 40 },
    heading34: { fontSize: 36 },
    heading4: { fontSize: 32 },
    heading5: { fontSize: 24 },
    heading56: { fontSize: 20 },
    largeText: { fontSize: 18 },
    heading6: { fontSize: 16 },
    normalText: { fontSize: 16 },
    smallText: { fontSize: 14 },
    labelText: { fontSize: 12 },
    extrasmall: { fontSize: 10 },
    verySmall: { fontSize: 8 },
  },
  cairo: {
    weight900: { ...fontCairo900.style },
    weight800: { ...fontCairo800.style },
    weight700: { ...fontCairo700.style },
    weight600: { ...fontCairo600.style },
    weight500: { ...fontCairo500.style },
    weight400: { ...fontCairo400.style },
    weight300: { ...fontCairo300.style },
    weight200: { ...fontCairo200.style },
    heading1: { fontSize: 56 },
    heading2: { fontSize: 48 },
    heading3: { fontSize: 40 },
    heading4: { fontSize: 32 },
    heading5: { fontSize: 24 },
    heading6: { fontSize: 16 },
    largeText: { fontSize: 18 },
    normalText: { fontSize: 16 },
    smallText: { fontSize: 14 },
    labelText: { fontSize: 12 },
    extrasmall: { fontSize: 10 },
    verySmall: { fontSize: 8 },
  },
};

// ############# colors #################
const colors = {
  white: "#FFFFFF",
  black: "#040404",
  primary: "#FECB00",
  secondary: "#005293",
  title: "#002a93",
  navBarItems: "#404040",
  greyColor: "#B2B2B2",
  LightGreyColor: "#b2b2b263",
  disabledColor: "#D5D5D5",
  success: "#059825",
  info: "#2AB0FC",
  warning: "#FCC132",
  error: "#FF3819",
  primaryFont: "#2A2A2A",
  secondaryFont: "#6C6C6C",
  logoColor: "",
};

const theme = {
  fonts,
  colors,
};

export default theme;
