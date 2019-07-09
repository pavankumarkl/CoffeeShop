import { StyleSheet, Platform } from "react-native";
export const TOOLBAR_HEIGHT = 1;
export const SLIDER_HEIGHT = 5;
export const APP_LIST_HEIGHT = 5;
export const TOTAL_PARTS = TOOLBAR_HEIGHT + SLIDER_HEIGHT + APP_LIST_HEIGHT;
export const CONTENT_HEIGHT = SLIDER_HEIGHT + APP_LIST_HEIGHT;
export const MU_SIGMA_RED = "rgb(128,0,0)";
export const MU_SIGMA_RED_UNDERLAY = "rgb(160,20,0)";
export const MUCAB_THEME_COLOR = "rgb(6,68,89)";
export const THEME_COLOR = "#186EC8";
export const MUSIGMA_TEAL = "rgb(0,128,128)";
export const FONT_FAMILY = "Helvetica";
export const FLOATING_LABEL_COLOR = "#673AB7";
import ResponsiveStyle from "../Styling/ResponsiveStyle";
const CommonStyling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  },

  title: {
    fontSize: 30,
    color: MU_SIGMA_RED
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
    width: 250,
    height: 50,
    marginBottom: 15
  },

  label: {
    color: "#fff",
    alignItems: "stretch",
    fontSize: ResponsiveStyle.FONT_SIZE,
    borderBottomColor: "white"
  },

  billDetails: {
    flex: 2,
    marginTop: 1,
    flexDirection: "row",
    backgroundColor: "rgb(235,245,255)",
    alignItems: "center",
    padding: 3
    //height:ResponsiveStyle.DEVICE_HEIGHT/12,
  },
  bill: {
    alignSelf: "flex-start",
    fontSize: ResponsiveStyle.FONT_SIZE,
    fontWeight: "bold"
  },
  amount: {
    color: "rgb(10,133,213)",
    fontSize: ResponsiveStyle.FONT_SIZE
  },

  billAmount: {
    flex: 1,
    alignItems: "center",
    // marginRight:ResponsiveStyle.DEVICE_WIDTH/50,
    justifyContent: "center",
    marginRight: 5
  },
  numericOption: {
    flex: 1,
    alignItems: "flex-end",
    //   marginRight:ResponsiveStyle.DEVICE_WIDTH/25,
    justifyContent: "center"
  }
});

export default CommonStyling;
