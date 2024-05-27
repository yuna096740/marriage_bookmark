"use client";
import Link from "next/link";
import Image from "next/image"
import "./styles.scss"

export default function Counter() {
  return (
    <div className="finally-container">

      <div className="finally-main-contents">
        <div className="finally-images">
          <Image src="/our_histories.jpg" width={700} height={550} alt="our_histories" />
        </div>

        <div className="finally-messages">
          <h3 className="finally-mess">
            Thank You family ♡
          </h3>
        </div>
      </div>

      <div className="next-link">
        <Link href="/introduction">
          初めに戻る
        </Link>
      </div>
    </div>
  );
}
