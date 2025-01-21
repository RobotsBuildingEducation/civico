import { useState } from "react";

import { Schema } from "firebase/vertexai";
import { simplemodel } from "../database/firebaseResources";

export const useSimpleGeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * submitPrompt: Streams text from a given prompt (string).
   */
  const submitPrompt = async (prompt) => {
    setLoading(true);

    try {
      // 1) Make the streaming request
      const result = await simplemodel.generateContentStream(prompt);

      // 2) Create a new message object to store partial text
      const newMessage = {
        content: "",
        meta: {
          loading: true, // Whether the streaming is ongoing
          chunks: [], // We’ll store each chunk of text here
        },
      };

      // 3) Append this new message to the messages array
      setMessages((prev) => [...prev, newMessage]);

      // 4) Accumulate partial text in a local variable, updating state after each chunk
      let fullResponse = "";

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        fullResponse += chunkText;

        // 5) Update the last message with partial text
        setMessages((prev) => {
          const updatedMessages = [...prev];
          const currentMessage = updatedMessages[updatedMessages.length - 1];

          currentMessage.content = fullResponse;
          currentMessage.meta.chunks.push({
            content: chunkText,
            final: false, // We’ll mark it final after the loop ends
          });

          return updatedMessages;
        });
      }

      // 6) Mark the last chunk as final
      setMessages((prev) => {
        const updatedMessages = [...prev];
        const currentMessage = updatedMessages[updatedMessages.length - 1];
        currentMessage.meta.loading = false;

        const lastChunkIndex = currentMessage.meta.chunks.length - 1;
        if (lastChunkIndex >= 0) {
          currentMessage.meta.chunks[lastChunkIndex].final = true;
        }

        return updatedMessages;
      });
    } catch (error) {
      console.error("Error streaming from Gemini:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * resetMessages: Clears out all existing messages and resets streaming state.
   */
  const resetMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    loading,
    submitPrompt,
    resetMessages,
  };
};
