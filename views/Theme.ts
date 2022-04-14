import { createTheme, CreateThemeOptions } from "@rneui/themed";

const Theme: CreateThemeOptions = createTheme({
  Input: {
    inputStyle: {
      padding: 0,
      minHeight: 16,
    },
    inputContainerStyle: {
      borderWidth: 1,
      borderRadius: 4,
      padding: 16,
      paddingRight: 12,
    },
    leftIconContainerStyle: {
      padding: 0,
    },

    rightIconContainerStyle: {
      padding: 0,
    },
  },
});

export default Theme;