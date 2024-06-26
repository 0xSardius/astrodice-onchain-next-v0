import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { contractABI } from "./contractABI";

const contractAddress = "0x9De7349342412ac996e2A8ea0702a91c81306dcA";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
