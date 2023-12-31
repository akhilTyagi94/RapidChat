import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello there!",
      name: "Akhil Tyagi",
    },
    {
      id: 2,
      text: "Hi!",
      name: "Nikhil Tyagi",
    },
  ];

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
