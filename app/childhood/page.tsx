"use client";
import Link from "next/link";
import Image from "next/image"
import "./styles.scss"


export default function Counter() {
  return (
    <div className="childhood-container">
      <h1 className="title">幼いころ</h1>
      <div className="line"></div>

      <div className="childhood-img">
        <Image src="/childhood-yusei.jpg" width={200} height={160} alt="childhood-yusei" />
        <Image src="/wedding_hanayome.png" width={200} height={160} alt="wedding_shinrou" />
      </div>

      <div className="childhood-sec">
        <div className="childfood-sec-yusei">
          <h3>エピソード</h3>
        </div>

        <div className="childfood-sec-akane">
        <h3>エピソード</h3>
        </div>
      </div>

      <div className="next-link">
        <Link href="/sasaki_family_intro">
          佐々木家紹介へ
        </Link>
      </div>
    </div>
  );
}
