import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PaymentMethodCard from "./Components/PaymentMethodCard";
import AddPaymentMethodCard from "./Components/AddPaymentMethodCard";
import ProceedButton from "./Components/ProceedButton";

// Sample payment methods
const paymentMethods = [
  { id: 1, title: "UPI", description: "Balance: $250.00", icon: require("assets/icon.png") },
  { id: 2, title: "Cash", description: "Prepare your cash", icon: require("assets/icon.png") },
  { id: 3, title: "Credit Card", description: "Visa or Master Card", icon: require("assets/icon.png") },
  { id: 4, title: "Paypal", description: "Pay with your PayPal balance", icon: require("assets/icon.png") },
];

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      <Text style={styles.subHeader}>Choose Payment Method</Text>

      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PaymentMethodCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            selected={selectedMethod === item.id}
            onSelect={() => setSelectedMethod(item.id)}
          />
        )}
        ListFooterComponent={() => (
          <>
            <AddPaymentMethodCard onPress={() => console.log("Add New Payment Method")} />
            <ProceedButton onPress={() => console.log("Proceed with Payment")} />
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 20,
  },
});

export default PaymentScreen;
