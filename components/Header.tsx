'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt="Bookwise" width={50} height={50} />
            </Link>
            <ul className="flex flex-row items-center gap-8">
                <li>
                    <Link href="/library" 
                          className={cn(
                            "text-base cursor-pointer capitalize", 
                            pathname === "/library" ? "text-light-200" : "text-light-100"
                            )}>
                        Library
                    </Link>
                </li>
            </ul>
    </header>
  );
};

export default Header;
