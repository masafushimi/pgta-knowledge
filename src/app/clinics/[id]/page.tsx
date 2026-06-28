import { notFound } from 'next/navigation';
import clinicsData from '@/data/clinics.json';
import Link from 'next/link';

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

// Generate static routes for all clinics at build time
export function generateStaticParams() {
  return clinicsData.map((clinic: any) => ({
    id: clinic.施設番号,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const clinic = clinicsData.find((c: any) => c.施設番号 === params.id) as Clinic | undefined;
  if (!clinic) return {};

  return {
    title: `${clinic.施設名}のPGT-A費用・先進医療B対応情報`,
    description: `${clinic.都道府県}にある${clinic.施設名}のPGT-A（着床前診断）に関する費用、アクセス（${clinic.最寄り駅}）、先進医療Bへの対応状況を詳しく解説します。`,
  };
}

export default function ClinicDetailPage({ params }: { params: { id: string } }) {
  const clinic = clinicsData.find((c: any) => c.施設番号 === params.id) as Clinic | undefined;

  if (!clinic) {
    notFound();
  }

  return (
    <div className="bg-brand-ivory/20 min-h-screen relative pb-32">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": clinic.施設名,
            "address": {
              "@type": "PostalAddress",
              "addressRegion": clinic.都道府県,
            },
            "medicalSpecialty": "Obstetrician",
            "availableService": {
              "@type": "MedicalTest",
              "name": "PGT-A (着床前胚染色体異数性検査)"
            }
          })
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto text-xs text-brand-muted">
          <Link href="/" className="hover:text-brand-coral">ホーム</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/clinics" className="hover:text-brand-coral">クリニック一覧</Link>
          <span className="mx-2">&gt;</span>
          <span className="font-bold text-brand-text">{clinic.施設名}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Clinic Info */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-brand-coral/10 text-brand-coral text-sm font-bold rounded-full">{clinic.都道府県}</span>
              <span className={`px-3 py-1 text-sm font-bold rounded-full ${clinic.先進医療B対応 === '対応' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                先進医療B {clinic.先進医療B対応}
              </span>
              {clinic.イチオシ院フラグ === '1' && (
                <span className="px-3 py-1 bg-yellow-50 text-yellow-600 text-sm font-bold rounded-full">イチオシ</span>
              )}
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-tight mb-6">
              {clinic.施設名}
            </h1>

            <p className="text-brand-muted leading-relaxed mb-8">
              {clinic.都道府県}に位置し、{clinic.最寄り駅}からアクセス可能な日本産科婦人科学会のPGT-A実施承認施設です。
              {clinic.先進医療B対応 === '対応' ? '先進医療Bに対応しており、条件を満たせば保険診療との併用（混合診療）が可能です。' : '現在、先進医療Bには非対応のため全額自費診療となります。'}
            </p>

            <h2 className="text-xl font-bold text-brand-text mb-4 border-b-2 border-brand-coral inline-block pb-1">
              基本情報・費用
            </h2>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 bg-gray-100 font-bold text-brand-text w-1/3">PGT-A実施</th>
                    <td className="py-4 px-6 bg-white font-bold text-brand-coral">{clinic["PGT-A実施"] === '●' ? '実施施設' : '未定'}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 bg-gray-100 font-bold text-brand-text">費用目安（1個あたり）</th>
                    <td className="py-4 px-6 bg-white font-bold text-brand-text">{clinic["PGT-A費用目安（円）"]}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-6 bg-gray-100 font-bold text-brand-text">先進医療B</th>
                    <td className="py-4 px-6 bg-white">{clinic.先進医療B対応}</td>
                  </tr>
                  <tr>
                    <th className="py-4 px-6 bg-gray-100 font-bold text-brand-text">最寄り駅</th>
                    <td className="py-4 px-6 bg-white">{clinic.最寄り駅}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-brand-text mb-4 border-b-2 border-brand-coral inline-block pb-1">
              このクリニックを検討している方へ
            </h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              PGT-Aはクリニックによって、モザイク胚の移植基準や検査会社が異なります。
              「{clinic.施設名}」があなたの年齢や治療歴に本当に合っているのか、不安な方はお気軽に無料相談をご利用ください。
            </p>
          </div>
        </div>

        {/* Right: Sticky Sidebar / CTA */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-gradient-to-b from-brand-coral/10 to-transparent p-6 rounded-3xl border border-brand-coral/20 text-center">
            <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-2xl shadow-sm mb-4">
              💬
            </div>
            <h3 className="font-bold text-brand-text mb-2">このクリニックについて<br/>詳しく聞いてみる</h3>
            <p className="text-xs text-brand-muted mb-6">
              PGT-Aの裏事情に詳しい専門スタッフが、匿名であなたの相談に乗ります。
            </p>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-[#06C755] text-white font-bold rounded-full shadow-md hover:bg-[#05b34c] transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
              LINEで無料相談
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between">
        <div className="text-xs">
          <span className="block text-brand-muted font-bold mb-1">迷ったらプロに相談</span>
          <span className="text-brand-text font-bold">完全無料・匿名OK</span>
        </div>
        <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#06C755] text-white font-bold rounded-full shadow-md text-sm flex items-center gap-2">
          LINEで相談
        </a>
      </div>

    </div>
  );
}
