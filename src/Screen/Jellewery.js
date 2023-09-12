import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat ,Send} from 'react-native-gifted-chat';
import axios from 'axios';

export default function JewelryShopBot() {
  const [messages, setMessages] = useState([]);
  const Api_key = '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'; 

  const handleSend = async (newMessages = []) => {
    try {
      const userMessage = newMessages[0];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, userMessage)
      );

      const messageText = userMessage.text.toLowerCase();
      const keywords = ['jewelry', 'ring', 'necklace', 'bracelet'];

      if (!keywords.some((keyword) => messageText.includes(keyword))) {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: "I'm your jewelry shop bot. Feel free to ask me about jewelry items and more.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Jewelry Bot',
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessage)
        );
        return;
      }

      const response = await fetchJewelryInfo(messageText);

      if (response) {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: response,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Jewelry Bot',
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessage)
        );
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  const fetchJewelryInfo = async (messageText) => {
    try {
      
      const response = await axios.post(
        // 'https://api.openai.com/v1/engines/davinci/completions',
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
      prompt : `${messageText}`,
      max_tokens: 1200,
      temperature: 0.7,
      n: 1,
    },   {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Api_key}`,
        },
      }
    );
      
    if (response.data && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].text.trim();
      } else {
        return 'No jewellery .';
      }
    } catch (error) {
      console.error('An error occurred while fetching jewelry information:', error.message);
      return 'An error occurred while fetching jewelry information.';
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FDF5E6', }}>
  <View
    style={{
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    }}
  >
    <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#FF69B4', marginBottom: 20, marginTop: 70 }}>Jewelry Shop</Text>
  </View>
  <GiftedChat
    messages={messages}
    onSend={(newMessages) => handleSend(newMessages)}
    user={{ _id: 1 }}
    placeholder="Type your jewelry-related questions here..."
    renderSend={(props) => (
      <Send {...props}>
        <Text style={{ color: '#FF69B4', fontSize: 20, fontWeight: 'bold', marginRight: 10,padding:10 }}>Send</Text>
      </Send>
    )}
  />
</View>

  );
}
