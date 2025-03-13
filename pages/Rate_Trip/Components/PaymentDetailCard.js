import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentDetailCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Detail</Text>
      <Text style={styles.row}>Trip Expense: $9.00</Text>
      <Text style={styles.row}>Discount Voucher: $1.00</Text>
      <Text style={styles.total}>Total: $8.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    fontSize: 14,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default PaymentDetailCard;
