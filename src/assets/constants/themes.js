import colors from './colors';

export const facebook_d =  "M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z";
export const instagram_d = "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"

export const zIndex = {
  zIndex: {
    popover: 9001,
    layer: 9000
  }
};

export const theme1 = {
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
export const theme2 = {};
export const theme3 = {};

export default {
  zIndex,
  theme1,
  theme2,
  theme3
};
