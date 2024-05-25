'use client'

import { useState } from 'react'
import Link from "next/link";

export default function Counter() {
  const [count, setCount] = useState(0)

// 以下の「ボタンのクリック」などのようなブラウザ側の挙動を記述する際はクライアントコンポーネントに切り替えると良い。
  return (
    <div>
      <h1>Home Page</h1>
      <p>あなたがクリックして {count} 回目</p>
      <button onClick={() => setCount(count + 1)}>クリックしてね</button>
      <div>
        <Link href="/about">
          こちら
        </Link>
      </div>
    </div>
  )
}
