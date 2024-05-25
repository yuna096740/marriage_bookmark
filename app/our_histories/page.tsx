"use client";
import Link from "next/link";

export default function Counter() {
  return (
    <div>
      <h1>③our_histories Page</h1>
      <div>
        <Link href="/childhood">
          幼い頃へ
        </Link>
      </div>
    </div>
  );
}
