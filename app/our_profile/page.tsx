"use client";
import Link from "next/link";
import Image from "next/image"
import "./styles.scss"

export default function OurProfilePage() {
  return (
    <div className="our-profile-container">
      <h1 className="title">プロフィール</h1>

      <div className="line"></div>

      <div className="our-profile-images">
        <Image src="/wedding_shinrou.png" width={160} height={120} alt="wedding_shinrou" />
        <Image src="/wedding_hanayome.png" width={160} height={120} alt="wedding_hanayome" />
      </div>

      <div className="our-profile-sections">
        <div className="our-profile-sec1">
          <ul>
            <li>27歳</li>
            <li className="our-profile-sec-title">年齢</li>
            <li>26歳</li>
          </ul>
        </div>

        <div className="our-profile-sec2">
          <ul>
            <li>1996年7月4日</li>
            <li className="our-profile-sec-title">生年月日</li>
            <li>1998年2月3日</li>
          </ul>
        </div>

        <div className="our-profile-sec3">
          <ul>
            <li>かに座</li>
            <li className="our-profile-sec-title">星座</li>
            <li>みずがめ座</li>
          </ul>
        </div>

        <div className="our-profile-sec4">
          <ul>
            <li>不明</li>
            <li className="our-profile-sec-title">血液型</li>
            <li>B型</li>
          </ul>
        </div>

        <div className="our-profile-sec5">
          <ul>
            <li>埼玉県</li>
            <li className="our-profile-sec-title">出身</li>
            <li>岩手県</li>
          </ul>
        </div>

        <div className="our-profile-sec6">
          <ul>
            <li>東京都渋谷区</li>
            <li className="our-profile-sec-title">勤務地</li>
            <li>東京都豊島区</li>
          </ul>
        </div>

        <div className="our-profile-sec7">
          <ul>
            <li>お魚捌き🐟</li>
            <li className="our-profile-sec-title">趣味</li>
            <li>パン作り🍞</li>
          </ul>
        </div>

        <div className="our-profile-sec8">
          <ul>
            <li>要記入</li>
            <li className="our-profile-sec-title">特技</li>
            <li>要記入</li>
          </ul>
        </div>

        <div className="our-profile-sec9">
          <ul>
            <li>魚介類全般</li>
            <li className="our-profile-sec-title">好きな食べ物</li>
            <li>勇生さんのご飯</li>
          </ul>
        </div>

        <div className="our-profile-sec10">
          <ul>
            <li>要記入</li>
            <li className="our-profile-sec-title">相手の好きなところ</li>
            <li>口を開けて寝るところ</li>
          </ul>
        </div>
      </div>

      <div className="next-link">
        <Link href="/our_histories">
          二人の出会いへ
        </Link>
      </div>
    </div>
  );
}
