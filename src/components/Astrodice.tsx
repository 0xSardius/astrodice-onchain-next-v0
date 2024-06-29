import React, { useState, useEffect } from "react";
import {
  useContract,
  useReadContract,
  useContractWrite,
  useAddress,
} from "thirdweb/react";
// import { contract } from "@/utils/contract";
import Header from "./Header";

export default function Astrodice() {
  const address = useAddress();
  const contract = useContract();
  const [userCollection, setUserCollection] = useState([]);

  // Creates a new Astrodice NFT
  const { mutateAsync: createAstrodiceNFT, isLoading } = useContractWrite(
    contract,
    "createAstrodiceNFT"
  );

  const handleCreateAstrodiceNFT = async () => {
    try {
      const data = await createAstrodiceNFT({ args: [] });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call error", err);
    }
  };

  // Function to get a user's Astrodice Collection
  const { data: collectionData } = useReadContract(
    contract,
    "ownerToAstrodiceCollection",
    [address]
  );

  useEffect(() => {
    if (collectionData) {
      setUserCollection(collectionData);
    }
  }, [collectionData]);

  return (
    <>
      <Header />
      <button onClick={handleCreateAstrodiceNFT} disabled={isLoading}>
        {isLoading ? "Casting the Astrodice..." : "Create Astrodice NFT"}
      </button>
      <h2>Your Astrodice Collection</h2>
      {/* <ul>
        {userCollection.map((astrodice, index) => (
          <li key={index}>
            {astrodice.planet} in {astrodice.sign} ({astrodice.house})
            <span>{astrodice.planetSymbol}</span>
            <span>{astrodice.signSymbol}</span>
          </li>
        ))}
      </ul> */}
    </>
  );
}
