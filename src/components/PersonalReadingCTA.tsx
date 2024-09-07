import React, { useState } from "react";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";

interface AstrodiceEvent {
  tokenId: string;
  planet: string;
  sign: string;
  house: string;
  planetSymbol: string;
  signSymbol: string;
}

interface PersonalReadingCTAProps {
  lastMintedNFT: AstrodiceEvent | null;
}

const PersonalReadingCTA: React.FC<PersonalReadingCTAProps> = ({
  lastMintedNFT,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const emailSubject = "Personal Astrodice Reading Request";
    let emailBody = `Dear Astrodice Reader,

I'd like to request a personal reading based on my recent Astrodice NFT. Here are the details:

NFT Token ID: ${lastMintedNFT?.tokenId}
Planet: ${lastMintedNFT?.planet}
Sign: ${lastMintedNFT?.sign}
House: ${lastMintedNFT?.house}
Planet Symbol: ${lastMintedNFT?.planetSymbol}
Sign Symbol: ${lastMintedNFT?.signSymbol}

My question or area of focus for this reading is:
[USER: Please replace this with your specific question or area of focus]

I understand that the reading costs $30. I prefer to pay via:
[ ] PayPal
[ ] Cryptocurrency (ETH)
(Please indicate your preference by replacing [ ] with [X])

Please provide the appropriate payment details for my chosen method.

Thank you,
[USER: Please add your name here]`;

    const mailtoLink = `mailto:0xSardius@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-white p-4"
      >
        <h2 className="text-xl font-semibold">Want a Deeper Insight?</h2>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <div className="p-4 text-white">
          <p className="mb-4">
            Get a personalized Astrodice reading tailored to your specific
            situation.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>In-depth analysis of your Astrodice results</li>
            <li>Personalized advice and actionable insights</li>
            <li>Follow-up questions and clarifications included</li>
            <li>Delivered within 48 hours</li>
          </ul>
          <div className="flex justify-center">
            <a
              href="#"
              onClick={handleEmailClick}
              className={`flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold transition-all duration-300 ${
                isHovered ? "shadow-md scale-105" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Mail className="mr-2" size={20} />
              Request Your $30 Reading
            </a>
          </div>
          <p className="text-sm text-center mt-4 opacity-80">
            Click the button to open your email app with a pre-filled request.
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonalReadingCTA;
