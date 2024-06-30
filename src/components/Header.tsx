import Image from "next/image";
import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../app/client";
import { chain } from "../app/chain";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center m-5">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        onchain-astrodice
      </h1>

      <div>
        {/* Could upgrade this eventually with a Connect embed*/}
        <ConnectButton client={client} chain={chain} />
      </div>
      {/* Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started. */}
    </header>
  );
}
