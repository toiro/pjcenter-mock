import { useRef, useLayoutEffect, useState } from 'react'
import Navbar from '~/components/navbar'

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)

  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    if (headerRef.current) {
      const { height } = headerRef.current.getBoundingClientRect()
      setHeaderHeight(height)
    }
  })

  return (
    <>
      <header className="w-full fixed" ref={headerRef}>
        <Navbar />
      </header>
      <div style={{ height: headerHeight }} className="bg-black" />
      <main className="w-full">
        <section className="w-full px-10 py-10 bg-black text-white md:py-40">
          <h1 className="text-3xl font-bold leading-relaxed md:text-5xl md:leading-relaxed ">
            東京大学 大学院工学系研究科
            <br />
            国際工学教育推進機構
            <br />
            ものづくり部門
          </h1>
          <p className="border-t-2 md:w-3/5">
            ものづくり部門は、経験豊かな職員によるアドバイスや3Dプリンターなどの高精度機器を提供し、学生や研究室のものづくりプロジェクトを支援する部門です。
          </p>
        </section>
        <section className="w-full p-10 grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <img
              src="https://www.pjcenter.t.u-tokyo.ac.jp/Pics/creative_workshop.png"
              className="w-full m-auto"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl font-bold border-b-4">サービス</h1>
            <section>
              <h2 className="pt-3 text-lg font-bold before:content-['✦'] md:text-xl">
                プロジェクトや研究活動などにおけるものづくりに対する技術的なアドバイス
              </h2>
              <p>
                次のようなお悩みを含め、ものづくりにおける様々なお悩みの相談ができます！
              </p>
              <ul className="mt-4 ml-2 leading-relaxed font-semibold">
                <li className="before:content-['❏'] before:pr-2">
                  卒論研究のために実現したい実験装置の構造はどのようなものがいい？
                </li>
                <li className="before:content-['❏'] before:pr-2">
                  作りたい実験装置の図面は作ったが、どのような材料で作るべき？
                </li>
                <li className="before:content-['❏'] before:pr-2">
                  どのような加工をすれば、この部品を作成できる？
                </li>
              </ul>
            </section>
            <section>
              <h2 className="pt-3 text-lg font-bold before:content-['\2726'] md:text-xl">
                3DプリンターやNC加工機の使用法の指導や教育
              </h2>
              <p>
                高精度でクリエイティブなものづくりに欠かせない加工機の使い方を知り、活用できます！
              </p>
            </section>
            <section>
              <h2 className="pt-3 text-lg font-bold before:content-['\2726'] md:text-xl">
                「ものづくりフライデー」などの技術交流会の開催
              </h2>
              <p>定期的にものづくりに関する交流会があります！</p>
            </section>
          </div>
        </section>
      </main>

      <footer className="w-full h-20 border-2 flex justify-center items-center">
        Footer
      </footer>
    </>
  )
}
