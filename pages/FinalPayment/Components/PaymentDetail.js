// RatingScreen/components/PaymentDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentDetail = ({ payment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Payment Detail</Text>
      <View style={styles.paymentItems}>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Trip Expense</Text>
          <Text style={styles.paymentValue}>${payment.tripExpense.toFixed(2)}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Discount Voucher</Text>
          <Text style={styles.paymentValue}>-${payment.discount.toFixed(2)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.paymentRow}>
          <Text style={[styles.paymentLabel, styles.totalLabel]}>Total</Text>
          <Text style={[styles.paymentValue, styles.totalValue]}>
            ${payment.total.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  paymentItems: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  paymentLabel: {
    fontSize: 16,
    color: '#333',
  },
  paymentValue: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 8,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
  },
});

export default PaymentDetail;