import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Feedback = ({ isVisible }) => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigation = useNavigation();
  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSubmitFeedback = async () => {
    try {
      setIsSubmitting(true);

      const response = await fetch("http://192.168.1.4:3000/Feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          navigation.goBack();
        }, 3000);
      } else {
        console.error("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFeedback("");
    setSubmitSuccess(false);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
        {submitSuccess ? (
          <>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Thank You for Your Feedback!
            </Text>
            <Text>Your feedback has been submitted successfully.</Text>
            <Button title="Close" onPress={handleClose} />
          </>
        ) : (
          <>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Thank You for Your Order!
            </Text>
            <Text>
              Your order has been successfully processed and is on its way to
              you.
            </Text>
            <Text>
              We would love to hear your feedback to improve our services:
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 5,
                padding: 5,
                marginVertical: 10,
              }}
              placeholder="Your feedback"
              onChangeText={handleFeedbackChange}
              value={feedback}
              multiline
            />
            <Button
              title="Submit Feedback"
              onPress={handleSubmitFeedback}
              disabled={isSubmitting}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Feedback;
