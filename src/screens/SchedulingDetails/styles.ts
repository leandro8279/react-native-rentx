import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background_secondary,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      marginTop: getStatusBarHeight() + 12,
      marginLeft: 24,
    },
    carImage: {
      marginTop: getStatusBarHeight() + 32,
    },
    content: {
      alignItems: "center",
      padding: 24,
    },
    details: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
    },
    brand: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(13),
      textTransform: "uppercase",
    },
    name: {
      fontFamily: fonts.secondary_500,
      color: colors.title,
      fontSize: RFValue(23),
    },
    period: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(13),
      textTransform: "uppercase",
    },
    price: {
      fontFamily: fonts.secondary_500,
      color: colors.main,
      fontSize: RFValue(23),
    },
    accessories: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 16,
    },
    rentalPeriod: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
      paddingBottom: 16,
    },
    calendarIcon: {
      width: 48,
      height: 48,
      backgroundColor: colors.main,
      justifyContent: "center",
      alignItems: "center",
    },
    dateTitle: {
      fontFamily: fonts.primary_500,
      color: colors.text_detail,
      fontSize: RFValue(16),
      textTransform: "uppercase",
    },
    dateValue: {
      fontFamily: fonts.primary_500,
      color: colors.title,
      fontSize: RFValue(15),
    },
    rentalPrice: {
      width: "100%",
      marginTop: 16,
    },
    rentalPriceLabel: {
      fontFamily: fonts.primary_500,
      color: colors.text_detail,
      fontSize: RFValue(15),
      textTransform: "uppercase",
    },
    rentalPriceDetails: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rentalPriceQuota: {
      fontFamily: fonts.primary_500,
      color: colors.title,
      fontSize: RFValue(15),
    },
    rentalPriceTotal: {
      fontFamily: fonts.secondary_500,
      color: colors.success,
      fontSize: RFValue(22),
    },
    footer: {
      width: "100%",
      paddingTop: 24,
      paddingHorizontal: 24,
      paddingBottom: getBottomSpace() + 24,
      backgroundColor: colors.background_secondary,
    },
  });
