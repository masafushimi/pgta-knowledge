import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PGT-Aクリニック比較・おすすめランキング",
  description: "PGT-A（着床前診断）を実施しているクリニックを、費用、エリア、技術、先進医療B対応などの様々な角度から比較・ランキング化しています。",
};

export default function RankingHubPage() {
  return (
    <div className="bg-brand-ivory/30 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-brand-coral/10 text-brand-coral font-bold rounded-full text-sm mb-4">
            目的からクリニックを選ぶ
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-brand-text mb-4">
            PGT-Aクリニック 比較・ランキング
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-2xl mx-auto">
            PGT-Aは高額な費用がかかるだけでなく、クリニックによって方針や技術が大きく異なります。
            後悔しない選択のために、あなたの最優先事項に合わせてクリニックを比較しましょう。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="/ranking/cost" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start">
            <div className="w-16 h-16 bg-brand-ivory rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              💰
            </div>
            <h2 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-coral transition-colors">
              「費用が安い」で比較する
            </h2>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              1個あたりの検査費用や、採卵費用などトータルコストで比較。「結局いくらかかるの？」という疑問を解消し、お財布に優しいクリニックをランキング化しました。
            </p>
            <span className="mt-auto text-brand-coral font-bold text-sm flex items-center gap-1">
              ランキングを見る <span className="text-lg">→</span>
            </span>
          </Link>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start md:col-span-2 mt-4">
            <div className="w-16 h-16 bg-brand-ivory rounded-2xl flex items-center justify-center text-3xl mb-6">
              📍
            </div>
            <h2 className="text-xl font-bold text-brand-text mb-4">
              エリア（都道府県）で比較する
            </h2>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              通いやすさは不妊治療において極めて重要です。全国の主要都市を中心に、地域別のPGT-A対応クリニックを徹底比較しています。
            </p>
            <div className="flex flex-wrap gap-3 w-full">
              {['東京都', '大阪府', '神奈川県', '愛知県', '兵庫県', '福岡県', '北海道'].map(pref => (
                <Link key={pref} href={`/ranking/area/${pref}`} className="px-4 py-2 bg-gray-50 border border-gray-200 text-brand-text text-sm font-bold rounded-full hover:border-brand-coral hover:text-brand-coral transition-colors">
                  {pref}のおすすめ
                </Link>
              ))}
            </div>
          </div>

          <Link href="/ranking/advanced-medicine" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start opacity-75">
            <div className="w-16 h-16 bg-brand-ivory rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🛡️
            </div>
            <h2 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-coral transition-colors">
              「先進医療B対応」で比較する
            </h2>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              (準備中) 保険診療との併用が可能になる「先進医療B」の承認を得ている施設だけを厳選。助成金を活用して賢く治療を進めたい方向け。
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}
