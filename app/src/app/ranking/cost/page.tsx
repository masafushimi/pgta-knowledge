import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【2024年最新】PGT-Aの費用が安いおすすめクリニック比較ランキング",
  description: "PGT-A（着床前診断）の費用について、全国の対応クリニックを徹底比較。1個あたりの検査費用やトータルコストが安いおすすめの病院をランキング形式で紹介します。",
};

// 比較表用のダミーデータ（実際のプロダクトではJSONから取得）
const rankingData = [
  { rank: 1, name: "医療法人社団つくばARTクリニック", area: "茨城県", cost: "約7万〜10万円/個", advanced: "対応", url: "/clinics/080022" },
  { rank: 2, name: "キネマアートクリニック", area: "東京都", cost: "約6万〜9万円/個", advanced: "対応", url: "/clinics/130083" },
  { rank: 3, name: "医療法人エナ 大通レディースクリニック", area: "北海道", cost: "約6万〜9万円/個", advanced: "対応", url: "/clinics/010024" },
];

export default function CostRankingPage() {
  return (
    <>
      {/* FAQ Schema for SEO Featured Snippets */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "PGT-Aの費用相場はいくらですか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "PGT-Aの検査費用は、受精卵1個あたり約5万円〜12万円が相場です。ただし、これに加えて採卵費用や体外受精の基本料金（約30万〜50万円）が別途必要になります。"
              }
            },
            {
              "@type": "Question",
              "name": "PGT-Aは保険適用になりますか？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "現在のところPGT-A自体は保険適用外（自費診療）です。ただし「先進医療B」として承認されている施設であれば、体外受精の基本部分を保険適用にしながら、PGT-Aを自費で追加する「混合診療」が例外的に認められています。"
              }
            }
          ]
        })}
      </Script>

      <div className="bg-brand-ivory/20 min-h-screen pb-20">
        {/* Article Header */}
        <div className="bg-white border-b border-gray-200 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-4 text-xs font-bold">
              <span className="px-2 py-1 bg-brand-coral text-white rounded">費用比較</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">2024年最新版</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed mb-6">
              【2024年最新】PGT-Aの費用が安いおすすめクリニック比較ランキング
            </h1>
            <p className="text-brand-muted leading-relaxed">
              「PGT-Aを受けたいけれど、費用が高すぎて諦めそう…」<br />
              そんなお悩みを抱える方のために、全国のPGT-A実施施設の中から、検査費用が比較的安く、かつ信頼できるクリニックを調査・比較しました。<br />
              ※費用は目安であり、患者様の状態により変動します。最新情報は各クリニックへお問い合わせください。
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
          
          <section>
            <h2 className="text-xl font-bold text-brand-text mb-4 border-b-2 border-brand-coral inline-block pb-1">
              評価基準について
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-sm text-brand-muted space-y-2">
              <p>本ランキングは以下の基準をもとに独自に選定しています。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>受精卵1個あたりのPGT-A検査費用が相場（約8〜10万円）より低いか</li>
                <li>先進医療Bに対応しており、保険診療との併用が可能か（トータルコスト削減）</li>
                <li>日本産科婦人科学会の承認施設であるか</li>
              </ul>
            </div>
          </section>

          {/* HTML Table optimized for SEO Featured Snippets */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-2">
              <span className="text-3xl">💰</span> 費用比較表（一覧）
            </h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm font-bold text-brand-text">
                    <th className="p-4">クリニック名</th>
                    <th className="p-4">エリア</th>
                    <th className="p-4">PGT-A費用目安/個</th>
                    <th className="p-4">先進医療B</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {rankingData.map((clinic, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-brand-ivory/30 transition-colors">
                      <td className="p-4 font-bold text-brand-coral">
                        <Link href={clinic.url} className="hover:underline">{clinic.name}</Link>
                      </td>
                      <td className="p-4 text-brand-muted">{clinic.area}</td>
                      <td className="p-4 font-bold text-brand-text">{clinic.cost}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${clinic.advanced === '対応' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                          {clinic.advanced}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-muted mt-2 text-right">※当サイト独自調査（2024年時点）</p>
          </section>

          {/* Detailed Ranking */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-8">おすすめクリニックの詳細</h2>
            
            <div className="space-y-8">
              {rankingData.map((clinic) => (
                <div key={clinic.rank} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {clinic.rank}
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-4 pl-8 md:pl-6">
                    <Link href={clinic.url} className="hover:text-brand-coral transition-colors">{clinic.name}</Link>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-500 mb-1 text-xs">費用目安</span>
                      <span className="font-bold text-lg text-brand-text">{clinic.cost}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="block text-gray-500 mb-1 text-xs">先進医療B対応</span>
                      <span className="font-bold text-lg text-brand-text">{clinic.advanced}</span>
                    </div>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    {clinic.area}に位置する{clinic.name}は、PGT-Aの費用が抑えられているのが特徴です。
                    先進医療Bにも{clinic.advanced}しているため、保険診療と組み合わせてトータルの負担を大きく減らせる可能性があります。
                  </p>
                  <Link href={clinic.url} className="block w-full py-3 text-center border-2 border-brand-coral text-brand-coral font-bold rounded-full hover:bg-brand-coral hover:text-white transition-colors">
                    詳細を見る
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-brand-ivory/50 p-6 md:p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-brand-text mb-6">よくあるご質問（費用について）</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-bold text-brand-text mb-2 text-sm">Q. PGT-Aの費用相場はいくらですか？</h3>
                <p className="text-brand-muted text-sm">A. PGT-Aの検査費用は、受精卵1個あたり約5万円〜12万円が相場です。ただし、これに加えて採卵費用や体外受精の基本料金（約30万〜50万円）が別途必要になります。</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-bold text-brand-text mb-2 text-sm">Q. PGT-Aは保険適用になりますか？</h3>
                <p className="text-brand-muted text-sm">A. 現在のところPGT-A自体は保険適用外（自費診療）です。ただし「先進医療B」として承認されている施設であれば、体外受精の基本部分を保険適用にしながら、PGT-Aを自費で追加する「混合診療」が例外的に認められています。</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <p className="text-brand-text font-bold mb-4">「私の場合はいくらかかる？」「どのクリニックがいいの？」</p>
            <p className="text-sm text-brand-muted mb-6">専任のスタッフがあなたの状況をお伺いし、最適な選択肢を一緒に考えます。</p>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full shadow-md hover:bg-[#05b34c] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
              LINEで無料相談する（匿名可）
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
