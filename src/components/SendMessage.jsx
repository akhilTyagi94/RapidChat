import React, { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full px-3 py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
