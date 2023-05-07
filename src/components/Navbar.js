"use client";

import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <div class="flex md:hidden justify-between py-8 px-12">
                <h1 class="text-primary text-2xl border-2 rounded-[100%] p-4 cursor-pointer">RG</h1>
                <div class={`absolute right-0 top-0 w-4/6 h-full bg-background-secondary ${!isMenuOpen ? 'hidden': ''}`}>
                    <button 
                        class="absolute top-12 right-12 flex flex-col items-center justify-center w-8 h-8 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span class="w-8 h-0.5 bg-primary rotate-45"></span>
                        <span class="w-8 h-0.5 bg-primary -mt-0.5 -rotate-45"></span>
                    </button>
                    <ul class="text-text-primary font-extralight flex flex-col gap-8 my-auto text-lg mt-32 text-center">
                        <li class="hover:text-primary hover:cursor-pointer my-auto flex flex-col">
                            <span class="text-primary">01.</span>
                            About
                        </li>
                        <li class="hover:text-primary hover:cursor-pointer my-auto flex flex-col">
                            <span class="text-primary">02. </span>
                            Experience
                        </li>
                        <li class="hover:text-primary hover:cursor-pointer my-auto flex flex-col">
                            <span class="text-primary">03. </span>
                            Contact
                        </li>
                    </ul>
                </div>
                <div class={`my-auto ${isMenuOpen ? 'hidden': ''}`}>
                    <button 
                        class="flex flex-col gap-2 items-center justify-center w-8 h-8 rounded-md"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span class="w-8 h-0.5 bg-primary"></span>
                        <span class="w-8 h-0.5 bg-primary"></span>
                        <span class="w-8 h-0.5 bg-primary"></span>
                    </button>
                </div>
            </div>
            <div class="hidden md:flex justify-between py-8 px-12">
                <h1 class="text-primary text-2xl border-2 rounded-[100%] p-4 cursor-pointer">RG</h1>
                <ul class="text-text-primary font-extralight flex gap-16 my-auto text-sm">
                    <li class="hover:text-primary hover:cursor-pointer my-auto">
                        <span class="text-primary">01. </span>
                        About
                    </li>
                    <li class="hover:text-primary hover:cursor-pointer my-auto">
                        <span class="text-primary">02. </span>
                        Experience
                    </li>
                    <li class="hover:text-primary hover:cursor-pointer my-auto">
                        <span class="text-primary">03. </span>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}