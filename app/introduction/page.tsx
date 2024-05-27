"use client";
import Link from "next/link";
import "./styles.scss"

import { useAuth } from '../components/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const IntroductionPage: React.FC = () => {
  // const { authenticated } = useAuth();
  // const router = useRouter();
  // // const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   if (!authenticated) {
  //     router.push('/');
  //     // setErrorMessage('認証できませんでした。パスワードが間違っています。');
  //   }
  // }, [authenticated, router]);


  return (
    <div className="intro-container">
      <h1 className="title">はじめの挨拶</h1>

      <div className="line"></div>

      <div className="intro-section">
        <ul className="sec-1">
          <li>
            本日はお忙しいところ<br/>
            私たちのためにお越しいただき<br/>
            ありがとうございます
          </li>
        </ul>

        <ul className="sec-2">
          <li>
            おいしい料理と歓談を楽しみ<br/>
            両家の親睦を深める<br/>
            機会となれば幸いです
          </li>
        </ul>

        <ul className="sec-3">
          <li>
            本日はどうぞ<br/>
            よろしくお願いいたします
          </li>
        </ul>
      </div>

      <div className="next-link">
        <Link href="/our_profile">
          プロフィールページへ進む
        </Link>
      </div>
    </div>
  );

}

export default IntroductionPage;
