import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { contractABI } from "./contractABI";

const contractAddress = "0x6f3716097e26ABcD5709c816065Bf3731cA3AAc7";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
