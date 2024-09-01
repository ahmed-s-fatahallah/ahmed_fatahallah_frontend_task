"use client";

import { logout } from "@/actions";
import Button from "@/Components/Button";
import Image from "next/image";
import { useState } from "react";

export default function UserMenu({ imgSrc }: { imgSrc: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Button type="button" onClick={setIsMenuOpen.bind(null, (prev) => !prev)}>
        <Image
          src={imgSrc}
          alt="User photo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Button>
      {isMenuOpen && (
        <ul className="absolute -bottom-8 w-28 -translate-x-5">
          <li className="border-2 border-light-gray rounded-xl hover:bg-light-gray hover:text-dark-gray-1">
            <Button
              className="mx-auto block"
              onClick={async () => {
                await logout();
              }}
            >
              Log Out
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}
