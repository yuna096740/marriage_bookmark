"use client";
import Link from "next/link";

export default function Counter() {
  return (
    <div>
      <h1>⑦from_now_on Page</h1>
      <div>
        <Link href="/finally">
          最後にへ
        </Link>
      </div>
    </div>
  );
}
