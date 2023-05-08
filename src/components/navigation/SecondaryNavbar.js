'use client';
import Link from 'next/link';

export default function SecondaryNavbar() {
  return (
    <nav>
      <div className="flex justify-between py-8 px-12">
        <Link
          href="/"
          className="text-primary text-2xl border-2 rounded-[100%] p-3 cursor-pointer"
        >
          RG
        </Link>
      </div>
    </nav>
  );
}
