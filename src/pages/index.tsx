import React, { useRef, useLayoutEffect, useState } from 'react'
import Navbar, { MenuItemDefinition } from '~/components/specific/navbar'
import ClassNameInjector from '~/components/functional/classNameInjector'
import ConstrainedAnchor, {
  ConstrainedAnchorProps,
} from '~/components/functional/constrainedAnchor'
import clientOnly from '~/utils/clientOnly'

type Section = 'top' | 'services' | 'equipments'
const genSectionRef = (section: Section) => `#${section}`
const SectionAnchor = (props: ConstrainedAnchorProps<Section>) =>
  ConstrainedAnchor<Section>(props)

const menuItems: MenuItemDefinition = {
  top: { label: 'Top', href: genSectionRef('top') },
  services: { label: 'Services', href: genSectionRef('services') },
  equipments: { label: 'Equipments', href: genSectionRef('equipments') },
  contact: { label: 'Contact us', href: '' },
} as const

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  clientOnly(() => {
    useLayoutEffect(() => {
      if (headerRef.current) {
        const { height } = headerRef.current.getBoundingClientRect()
        setHeaderHeight(height)
      }
    })
  })

  return (
    <>
      <header className="fixed w-full" ref={headerRef}>
        <Navbar menuItems={menuItems} />
      </header>
      <main className="w-full">
        <SectionAnchor id="top" />
        <section className="px-10 py-10 w-full text-white bg-black md:py-40">
          <div style={{ height: headerHeight }} />
          <h1 className="text-3xl font-bold leading-relaxed md:text-5xl md:leading-relaxed">
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
        <SectionAnchor id="services" offset={-headerHeight} />
        <section className="grid gap-4 grid-cols-2 p-10 w-full">
          <div className="flex col-span-2 justify-center md:col-span-1">
            <img
              src="https://www.pjcenter.t.u-tokyo.ac.jp/Pics/creative_workshop.png"
              className="m-auto w-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl font-bold border-b-4">サービス</h1>
            <section>
              <ClassNameInjector className="before:content-['✦'] before:pr-2">
                <h2 className="pt-3 text-lg font-bold md:text-xl">
                  プロジェクトや研究活動などにおけるものづくりに対する技術的なアドバイス
                </h2>
              </ClassNameInjector>
              <p>
                次のようなお悩みを含め、ものづくりにおける様々なお悩みの相談ができます！
              </p>
              <ul className="ml-2 mt-4 font-semibold leading-relaxed">
                <ClassNameInjector className="before:content-['❏'] before:pr-2">
                  <li>
                    卒論研究のために実現したい実験装置の構造はどのようなものがいい？
                  </li>
                  <li>
                    作りたい実験装置の図面は作ったが、どのような材料で作るべき？
                  </li>
                  <li>どのような加工をすれば、この部品を作成できる？</li>
                </ClassNameInjector>
              </ul>
            </section>
            <section>
              <ClassNameInjector className="before:content-['✦'] before:pr-2">
                <h2 className="pt-3 text-lg font-bold md:text-xl">
                  3DプリンターやNC加工機の使用法の指導や教育
                </h2>
              </ClassNameInjector>
              <p>
                高精度でクリエイティブなものづくりに欠かせない加工機の使い方を知り、活用できます！
              </p>
            </section>
            <section>
              <ClassNameInjector className="before:content-['✦'] before:pr-2">
                <h2 className="pt-3 text-lg font-bold md:text-xl">
                  「ものづくりフライデー」などの技術交流会の開催
                </h2>
              </ClassNameInjector>
              <p>定期的にものづくりに関する交流会があります！</p>
            </section>
          </div>
        </section>
        <SectionAnchor id="equipments" offset={-headerHeight} />
        <section className="p-10 w-full bg-gray-200 md:grid-cols-4">
          <h1 className="text-2xl font-bold border-b-4 border-gray-300">
            機材
          </h1>
          <section>
            <ClassNameInjector className="before:content-['✦'] before:pr-2">
              <h2 className="pt-3 text-lg font-bold md:text-xl">測定機</h2>
            </ClassNameInjector>
            <div className="grid gap-4 grid-cols-2 w-full md:grid-cols-4">
              <ClassNameInjector className="flex-row items-center justify-center text-center border-2 border-blue-400 rounded hover:ring-2">
                <div>
                  <img
                    src="https://www.pjcenter.t.u-tokyo.ac.jp/Pics/mitsutoyo_crysta_inside.jpg"
                    className="m-auto p-1 w-full rounded-lg"
                  />
                  <h3 className="font-bold">
                    ミツトヨ 三次元測定機
                    <br />
                    （CRYSTA-Apex S 574）
                  </h3>
                </div>
                <div>
                  ミツトヨ 画像測定機
                  <br />
                  （QVTP Apex 404 PRO）
                </div>
                <div>Artec Eva 3D スキャナー</div>
              </ClassNameInjector>
            </div>
          </section>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-2">
        Footer
      </footer>
    </>
  )
}
