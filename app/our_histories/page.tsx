"use client";
import Link from "next/link";
import Image from "next/image"
import "./styles.scss"

export default function Counter() {
  return (
    <div className="our_histories-container">
      <h1 className="title">二人の出会い</h1>
      <div className="line"></div>

      <div className="our_histories-main-container">

        
        <div className="our_histories-img">
          <Image src="/our_histories.jpg" width={500} height={370} alt="wedding_shinrou" />
        </div>
        
        <div className="episode-sections">
          <h3>二人の出会いエピソードを記入</h3>
        </div>
      </div>

      <div className="next-link">
        <Link href="/childhood">
          幼い頃へ
        </Link>
      </div>
    </div>
  );
}
