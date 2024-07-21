"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import KeywordTable from "./KeywordTable";
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
      "event CreatedAstrodice(uint256 tokenId, string planet, string sign, string house, string planetSymbol, string signSymbol)",
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
      });
    }
  }, [events]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen m-5">
        {generatedImage ? (
          <MediaRenderer
            client={client}
            src={generatedImage}
            className="w-[300px] h-[300px] rounded-lg"
          />
        ) : (
          <div className="w-[300px] h-[300px] border border-dashed border-[#777] rounded-[10px] flex justify-center items-center">
            <p className="color-[#777]">
              {isGenerating
                ? "Generating reading..."
                : "Enter a question to generate a reading."}
            </p>
          </div>
        )}
      </div>
      <form>
        {!generatedImage || isMinting ? (
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter a question..."
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              className="w-[300px] h-[40px] py-0 px-2.5 rounded-[5px] border border-solid border-[#777] mb-2.5 "
            />

            {/* <button
              type="submit"
              disabled={isGenerating || isMinting || !imagePrompt}
              className="w-[300px] h-[40px] bg-[#333] text-[#fff] rounded-[5px] border-none cursor-pointer"
              onClick={handleAstrodiceMint}
            >
              {isGenerating
                ? "Rolling the Astrodice..."
                : isMinting
                ? "Minting the Reading..."
                : "Generate and Mint NFT Reading"}
            </button> */}
          </div>
        ) : (
          <div></div>
        )}
      </form>
      <div className="flex flex-col items-center">
        <TransactionButton
          className="w-[300px] h-[40px] bg-[#333] text-[#fff] rounded-[5px] border-none cursor-pointer"
          transaction={() =>
            prepareContractCall({
              contract: contract,
              method: "createAstrodiceNFT",
              params: [],
            })
          }
        >
          Generate and Mint NFT Reading
        </TransactionButton>
      </div>
      {lastMintedNFT && (
        <div className="flex flex-col items-center mt-5">
          <h3>Last Minted NFT</h3>
          <p>Token ID: {lastMintedNFT.tokenId}</p>
          <p>Planet: {lastMintedNFT.planet}</p>
          <p>Sign: {lastMintedNFT.sign}</p>
          <p>House: {lastMintedNFT.house}</p>
          <p>Planet Symbol: {lastMintedNFT.planetSymbol}</p>
          <p>Sign Symbol: {lastMintedNFT.signSymbol}</p>
        </div>
      )}
      <KeywordTable />
    </>
  );
}
