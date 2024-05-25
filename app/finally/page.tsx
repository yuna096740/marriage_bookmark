"use client";
import Link from "next/link";

export default function Counter() {
  return (
    <div>
      <h1>⑧finally Page</h1>
      <div>
        <Link href="/introduction">
          初めに戻る
        </Link>
      </div>
    </div>
  );
}
