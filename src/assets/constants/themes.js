import colors from './colors';

const zIndex = {
  zIndex: {
    popover: 9001,
    layer: 9000
  }
};

const theme1 = {
  lighterColor: colors.lightBlueLighten4,
  lightColor: colors.tealLighten2,
  mediumColor: colors.cyanDarken2,
  darkColor: colors.tealDarken4,
  contrastColor: colors.salmon,

  appBar: {
        "color": colors.tealLighten2,
        "textColor": "white"
        // ,
        // "height": 180,
        // "titleFontWeight": 20,
        // "padding": 23
    }
};
const theme2 = {};
const theme3 = {};

export default {
  zIndex,
  theme1,
  theme2,
  theme3
};
