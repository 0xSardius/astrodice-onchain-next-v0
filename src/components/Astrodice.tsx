"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import KeywordTable from "./KeywordTable";
import Instructions from "./Instructions";
import {
  MediaRenderer,
  TransactionButton,
  useContractEvents,
} from "thirdweb/react";
import { prepareContractCall, prepareEvent } from "thirdweb";
import { client } from "../app/client";
import { contract } from "../utils/contract";

interface AstrodiceEvent {
  tokenId: string;
  planet: string;
  sign: string;
  house: string;
  planetSymbol: string;
  signSymbol: string;
  question: string;
}

export default function Astrodice() {
  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("");
  const [lastMintedNFT, setLastMintedNFT] = useState<AstrodiceEvent | null>(
    null
  );
  const [showLastMinted, setShowLastMinted] = useState(false);

  const preparedEvent = prepareEvent({
    signature:
      "event CreatedAstrodice(uint256 tokenId, string planet, string sign, string house, string planetSymbol, string signSymbol, string question)",
  });

  const { data: events, isLoading: isLoadingEvents } = useContractEvents({
    contract: contract,
    events: [preparedEvent],
  });

  useEffect(() => {
    if (events && events.length > 0) {
      const lastEvent = events[events.length - 1];
      setLastMintedNFT({
        tokenId: lastEvent.args.tokenId.toString(),
        planet: lastEvent.args.planet,
        sign: lastEvent.args.sign,
        house: lastEvent.args.house,
        planetSymbol: lastEvent.args.planetSymbol,
        signSymbol: lastEvent.args.signSymbol,
        question: lastEvent.args.question,
      });
    }
  }, [events]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Instructions />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            {generatedImage ? (
              <MediaRenderer
                client={client}
                src={generatedImage}
                className="w-64 h-64 mx-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-64 h-64 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center">
                <p className="text-gray-500">
                  {isGenerating
                    ? "Generating reading..."
                    : "Enter a question to generate a reading."}
                </p>
              </div>
            )}
          </div>

          <form className="space-y-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter a question..."
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <div className="flex flex-col items-center ">
            <TransactionButton
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white transition duration-300 disabled:opacity-50"
              transaction={() =>
                prepareContractCall({
                  contract: contract,
                  method: "createAstrodiceNFT",
                  params: [imagePrompt],
                })
              }
            >
              Generate and Mint NFT Reading
            </TransactionButton>
          </div>

          {lastMintedNFT && (
            <div className="bg-gray-500 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Last Minted NFT</h3>
              <div className="grid grid-cols-2 gap-4">
                <p>Token ID: {lastMintedNFT.tokenId}</p>
                <p>Question: {lastMintedNFT.question}</p>
                <p>Planet: {lastMintedNFT.planet}</p>
                <p>Sign: {lastMintedNFT.sign}</p>
                <p>House: {lastMintedNFT.house}</p>
                <p>Planet Symbol: {lastMintedNFT.planetSymbol}</p>
                <p>Sign Symbol: {lastMintedNFT.signSymbol}</p>
              </div>
            </div>
          )}

          <KeywordTable />
        </div>
      </main>
    </div>
  );
}
