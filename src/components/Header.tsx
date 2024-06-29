import Image from "next/image";
import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../app/client";
import { chain } from "../app/chain";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        onchain-Astrodice
        {/* <span className="text-zinc-300 inline-block mx-1"> + </span>
        <span className="inline-block -skew-x-6 text-blue-500"> Next.js </span> */}
      </h1>

      <p className="text-zinc-300 text-base">
        <div>
          <ConnectButton client={client} chain={chain} />
        </div>
        Read the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}
