"use client";
import Link from "next/link";
import "./styles.scss"

export default function Counter() {
  return (
    <div className="from-now-on-container">
      <h1 className="title">今後について</h1>

      <div className="line"></div>

      <div className="from-now-on-sections">
        <div className="from-now-on-sec1">
          <h3 className="from-now-on-sec-title">引越し</h3>
        </div>

        <div className="from-now-on-sec2">
          <h3 className="from-now-on-sec-title">わんちゃんについて</h3>
        </div>

        <div className="from-now-on-sec3">
          <h3 className="from-now-on-sec-title">結婚式</h3>
        </div>
      </div>

      <div className="next-link">
        <Link href="/finally">
          最後に
        </Link>
      </div>
    </div>
  );
}
