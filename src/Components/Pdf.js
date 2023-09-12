import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Alert, Image } from "react-native";
import RNHTMLtoPDF from "react-native-html-to-pdf";

const Pdf = ({ route }) => {
  const { orderItems, orderTotal } = route.params;
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const generatePDF = async () => {
    try {
      setIsGeneratingPDF(true);
     const companyName = "Afiya Jewellery";
      const currentDate = new Date().toLocaleDateString();
      const orderStatus = "Completed";

      const html = `
        <html>
          <head>
            <style>
              body {
                font-family: 'Helvetica';
                font-size: 12px;
              }
              header,
              footer {
                height: 50px;
                background-color: #fff;
                color: #000;
                display: flex;
                justify-content: center;
                padding: 0 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th,
              td {
                border: 1px solid #000;
                padding: 5px;
              }
              th {
                background-color: #ccc;
              }
            </style>
          </head>
          <body>
            <header>
              <h1>${companyName}</h1>
            </header>
            <h1>Order Receipt</h1>
            <p>Date: ${currentDate}</p>
            <p>Order Status: ${orderStatus}</p>
            <table>
          <tr>
            
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Grams</th>
                <th>Product Price</th>
              </tr>
              ${orderItems
                .map(
                  (item) => `
                  <tr>
                 <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.grams}</td>
                    <td>$${item.price}</td>
                  </tr>
                `
                )
                .join("")}
            </table>
            <h2>Total Amount: $${orderTotal}</h2>
           </body>
        </html>
      `;

      const options = {
        html,
        fileName: `order_${orderItems[0].id}`,
        directory: "Documents",
      };

      const file = await RNHTMLtoPDF.convert(options);

      setIsGeneratingPDF(false);

      Alert.alert("Success", `PDF saved to ${file.filePath}`);
    } catch (error) {
      setIsGeneratingPDF(false);
      Alert.alert("Error", "Failed to generate PDF");
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/logo.jpg")}
        style={styles.logo}
      />
      <Pressable
        style={[styles.button, isGeneratingPDF && styles.disabledButton]}
        onPress={generatePDF}
        disabled={isGeneratingPDF}
      >
        <Text style={styles.text}>Generate PDF</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    backgroundColor: "#6c8ee3",
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  disabledButton: {
    opacity: 0.7,
  },
});

export default Pdf;
