import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Instructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 mb-6 text-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-lg font-semibold">How to Use onchain Astrodice</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-4 space-y-3">
          <p>
            onchain Astrodice generates personalized astrological readings as
            NFTs using three virtual dice. Each dice represents:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>the Planets (the WHAT)</li>
            <li>the Zodiac Signs (the HOW)</li>
            <li>the Houses (WHERE)</li>
          </ul>

          <p>To get your reading:</p>
          <ol className="list-decimal list-inside pl-4">
            <li>Think of a specific question or area of focus</li>
            <li>Frame your question to invite deeper insights</li>
            <li>Enter your question in the input field</li>
            <li>Click &ldquo;Generate and Mint NFT Reading&ldquo;</li>
          </ol>
          <p>
            Your unique astrological insight will be minted as an NFT, combining
            the three elements into a personalized reading.
          </p>
        </div>
      )}
    </div>
  );
};

export default Instructions;
