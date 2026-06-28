import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import clinicsData from '@/data/clinics.json';

type Clinic = {
  都道府県: string;
  施設番号: string;
  施設名: string;
  "PGT-A実施": string;
  "エリア（地方）": string;
  先進医療B対応: string;
  最寄り駅: string;
  "PGT-A費用目安（円）": string;
  イチオシ院フラグ: string;
};

export function generateStaticParams() {
  const prefs = Array.from(new Set(clinicsData.map((c: any) => c.都道府県)));
  return prefs.map((pref) => ({
    pref: pref,
  }));
}

export async function generateMetadata({ params }: { params: { pref: string } }) {
  const decodedPref = decodeURIComponent(params.pref);
  return {
    title: `【2024年最新】${decodedPref}のPGT-A（着床前診断）おすすめクリニック比較ランキング`,
    description: `${decodedPref}でPGT-Aを実施している日本産科婦人科学会承認のクリニックを徹底比較。費用が安い病院や、先進医療Bに対応しているおすすめの施設を紹介します。`,
  };
}

export default function AreaRankingPage({ params }: { params: { pref: string } }) {
  const decodedPref = decodeURIComponent(params.pref);
  
  const areaClinics = (clinicsData as Clinic[]).filter(c => c.都道府県 === decodedPref);

  if (areaClinics.length === 0) {
    notFound();
  }

  // Sort by 'イチオシ院フラグ' (Recommended) first, then by advanced medicine.
  areaClinics.sort((a, b) => {
    if (a.イチオシ院フラグ !== b.イチオシ院フラグ) {
      return b.イチオシ院フラグ.localeCompare(a.イチオシ院フラグ);
    }
    return b.先進医療B対応.localeCompare(a.先進医療B対応);
  });

  return (
    <>
      {/* FAQ Schema for SEO Featured Snippets */}
      <Script id={`faq-schema-${decodedPref}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `${decodedPref}でPGT-Aの費用が安いクリニックはどこですか？`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `${decodedPref}のPGT-A検査費用は施設により異なりますが、当サイトの比較表にて各クリニックの費用目安を確認できます。先進医療Bに対応している施設であれば、トータルコストを抑えられる可能性があります。`
              }
            },
            {
              "@type": "Question",
              "name": `${decodedPref}で先進医療Bに対応しているPGT-A施設はありますか？`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "はい、条件を満たす施設で先進医療BとしてのPGT-Aが実施されています。対応状況については、本ページのおすすめクリニック一覧表の「先進医療B」の項目をご覧ください。"
              }
            }
          ]
        })}
      </Script>

      <div className="bg-brand-ivory/20 min-h-screen pb-20">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100 py-3 px-4">
          <div className="max-w-4xl mx-auto text-xs text-brand-muted">
            <Link href="/" className="hover:text-brand-coral">ホーム</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/ranking" className="hover:text-brand-coral">比較・ランキング</Link>
            <span className="mx-2">&gt;</span>
            <span className="font-bold text-brand-text">{decodedPref}のおすすめクリニック</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white border-b border-gray-200 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-4 text-xs font-bold">
              <span className="px-2 py-1 bg-brand-coral text-white rounded">エリア比較</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">2024年最新版</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed mb-6">
              【2024年最新】<span className="text-brand-coral">{decodedPref}</span>のPGT-Aおすすめクリニック<br className="hidden md:block"/>比較ランキング
            </h1>
            <p className="text-brand-muted leading-relaxed text-sm md:text-base">
              {decodedPref}でPGT-A（着床前診断）を検討している方へ。<br />
              当ページでは、日本産科婦人科学会の承認を得ている{decodedPref}内の全{areaClinics.length}施設を抽出し、費用、先進医療Bの対応有無、アクセス面など様々な角度から比較しています。
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          
          <section>
            <h2 className="text-xl font-bold text-brand-text mb-6 flex items-center gap-2 border-b-2 border-brand-coral inline-flex pb-1">
              <span className="text-2xl">🏥</span> {decodedPref}のPGT-A対応クリニック一覧
            </h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm font-bold text-brand-text">
                    <th className="p-4 w-12 text-center">No.</th>
                    <th className="p-4">クリニック名</th>
                    <th className="p-4">最寄り駅</th>
                    <th className="p-4 text-center">PGT-A費用目安/個</th>
                    <th className="p-4 text-center">先進医療B</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {areaClinics.map((clinic, idx) => (
                    <tr key={clinic.施設番号} className="border-b border-gray-100 hover:bg-brand-ivory/30 transition-colors">
                      <td className="p-4 text-center font-bold text-gray-400">{idx + 1}</td>
                      <td className="p-4 font-bold text-brand-coral">
                        <Link href={`/clinics/${clinic.施設番号}`} className="hover:underline text-base">
                          {clinic.施設名}
                        </Link>
                        {clinic.イチオシ院フラグ === '1' && (
                          <span className="ml-2 inline-block px-2 py-0.5 bg-yellow-50 text-yellow-600 text-[10px] font-bold rounded">おすすめ</span>
                        )}
                      </td>
                      <td className="p-4 text-brand-muted">{clinic.最寄り駅}</td>
                      <td className="p-4 font-bold text-brand-text text-center">{clinic["PGT-A費用目安（円）"]}</td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${clinic.先進医療B対応 === '対応' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                          {clinic.先進医療B対応}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Recommended Ranking */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-8">{decodedPref}のおすすめピックアップ</h2>
            
            <div className="space-y-6">
              {areaClinics.slice(0, 5).map((clinic, idx) => (
                <div key={clinic.施設番号} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-brand-text flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-brand-coral text-white flex items-center justify-center text-sm shadow-sm">{idx + 1}</span>
                      <Link href={`/clinics/${clinic.施設番号}`} className="hover:text-brand-coral transition-colors">{clinic.施設名}</Link>
                    </h3>
                    <Link href={`/clinics/${clinic.施設番号}`} className="px-6 py-2 border-2 border-brand-coral text-brand-coral text-sm font-bold rounded-full hover:bg-brand-coral hover:text-white transition-colors text-center">
                      詳細・費用を見る
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
                    <div>
                      <span className="block text-gray-500 mb-1 text-xs">費用目安</span>
                      <span className="font-bold text-brand-text">{clinic["PGT-A費用目安（円）"]}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1 text-xs">先進医療B対応</span>
                      <span className="font-bold text-brand-text">{clinic.先進医療B対応}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1 text-xs">最寄り駅</span>
                      <span className="font-bold text-brand-text">{clinic.最寄り駅}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 mb-1 text-xs">エリア</span>
                      <span className="font-bold text-brand-text">{clinic.都道府県}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-brand-ivory to-white p-8 md:p-12 rounded-3xl text-center border border-gray-100 shadow-sm mt-12">
            <h2 className="text-xl font-bold text-brand-text mb-4">「{decodedPref}で、私に合うクリニックはどこ？」</h2>
            <p className="text-sm text-brand-muted mb-8 max-w-xl mx-auto leading-relaxed">
              年齢、過去の流産回数、予算など、お一人おひとりの状況によって最適なクリニックは異なります。
              迷った時は、専任スタッフにLINEで無料相談してみませんか？匿名でいつでもご相談いただけます。
            </p>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full shadow-md hover:bg-[#05b34c] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
              LINEで無料相談（匿名OK）
            </a>
          </section>

        </div>
      </div>
    </>
  );
}
