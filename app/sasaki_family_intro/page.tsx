"use client";
import Link from "next/link";
import Image from "next/image"
import "./styles.scss"

export default function Counter() {
  return (
    <div className="sasaki_family_intro-container">
      <h1 className="title">佐々木家紹介</h1>

      <div className="line"></div>

      <div className="our-profile-images">
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
      </div>

      <div className="next-link">
        <Link href="/nakajima_family_intro">
          中島家紹介へ
        </Link>
      </div>
    </div>
  );
}
