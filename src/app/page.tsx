import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import Astrodice from "@/components/Astrodice";

export default function Home() {
  return (
    <>
      <Astrodice />
    </>
  );
}
