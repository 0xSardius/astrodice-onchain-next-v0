"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  MediaRenderer,
  TransactionButton,
  useReadContract,
  useActiveAccount,
} from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "../app/client";
import { contract } from "../utils/contract";

export default function Astrodice() {
  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("");

  const address = useActiveAccount();

  const {data : astrodiceReading, isLoading : loadingReading} = useReadContract({
    contract: contract,
    method:
  });

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center m-5">
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
    </>
  );
}
