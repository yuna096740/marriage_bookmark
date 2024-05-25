import React from "react";
import "./styles.scss";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/introduction">はじめの挨拶</Link>
        </li>

        <li>
          <Link href="/our_profile">プロフィール</Link>
        </li>

        <li>
          <Link href="/our_histories">二人の出会い</Link>
        </li>

        <li>
          <Link href="/childhood">幼いころ</Link>
        </li>

        <li>
          <Link href="/sasaki_family_intro">佐々木家紹介</Link>
        </li>

        <li>
          <Link href="/nakajima_family_intro">中島家紹介</Link>
        </li>

        <li>
          <Link href="/from_now_on">今後について</Link>
        </li>

        <li>
          <Link href="/finally">最後に</Link>
        </li>
      </ul>
    </nav>
  );
};
