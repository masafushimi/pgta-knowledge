"use client";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import clinicsData from "@/data/clinics.json";

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

export default function ClinicsPage() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedStances, setSelectedStances] = useState<string[]>([]);

  // Unique areas
  const allAreas = Array.from(new Set(clinicsData.map((c: any) => c["エリア（地方）"])));

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const toggleStance = (stance: string) => {
    setSelectedStances((prev) => 
      prev.includes(stance) ? prev.filter(s => s !== stance) : [...prev, stance]
    );
  };

  const filteredClinics = (clinicsData as Clinic[]).filter((clinic) => {
    const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(clinic["エリア（地方）"]);
    const stanceMatch = selectedStances.length === 0 || selectedStances.includes(clinic["先進医療B対応"]);
    return areaMatch && stanceMatch;
  });

  return (
    <>
      <Script id="json-ld-clinics" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": filteredClinics.slice(0, 10).map((c, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://pgt-a-prototype.vercel.app/clinics/${c.施設番号}`
          }))
        })}
      </Script>

      <div className="bg-brand-ivory/30 min-h-screen pb-20">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">PGT-A対応クリニック一覧</h1>
            <p className="text-brand-muted text-sm md:text-base">
              全国のPGT-A実施承認施設から、あなたのスタンスや希望条件に合った病院を検索できます。<br/>
              ※詳細な適応条件や費用は各クリニックによって異なります。
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-bold text-brand-text mb-4">絞り込み条件</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 mb-3">エリア（地方）</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  {allAreas.map(area => (
                    <label key={area as string} className="flex items-center gap-2 cursor-pointer hover:text-brand-coral">
                      <input 
                        type="checkbox" 
                        className="rounded text-brand-coral focus:ring-brand-coral"
                        checked={selectedAreas.includes(area as string)}
                        onChange={() => toggleArea(area as string)}
                      /> 
                      {area as string}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 mb-3">先進医療B対応</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  {["対応", "非対応"].map(stance => (
                    <label key={stance} className="flex items-center gap-2 cursor-pointer hover:text-brand-coral">
                      <input 
                        type="checkbox" 
                        className="rounded text-brand-coral focus:ring-brand-coral"
                        checked={selectedStances.includes(stance)}
                        onChange={() => toggleStance(stance)}
                      /> 
                      {stance}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Search Results */}
          <main className="md:col-span-3 space-y-6">
            <div className="flex justify-between items-end border-b border-gray-200 pb-2">
              <p className="text-brand-text font-bold">{filteredClinics.length}件 のクリニックが見つかりました</p>
            </div>

            {filteredClinics.slice(0, 50).map((clinic) => (
              <div key={clinic.施設番号} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-brand-coral/10 text-brand-coral text-xs font-bold rounded">{clinic.都道府県}</span>
                      <span className={`px-2 py-1 text-xs font-bold rounded ${clinic.先進医療B対応 === '対応' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                        先進医療B {clinic.先進医療B対応}
                      </span>
                      {clinic.イチオシ院フラグ === '1' && (
                        <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs font-bold rounded">イチオシ</span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-brand-text mb-2">
                      <Link href={`/clinics/${clinic.施設番号}`} className="hover:text-brand-coral transition-colors">
                        {clinic.施設名}
                      </Link>
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mt-4">
                      <div>
                        <span className="block text-gray-500 text-xs mb-1">PGT-A費用目安</span>
                        <span className="font-bold text-brand-text">{clinic["PGT-A費用目安（円）"]}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 text-xs mb-1">最寄り駅</span>
                        <span className="font-bold text-brand-text">{clinic.最寄り駅}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-4">
                  <Link href={`/clinics/${clinic.施設番号}`} className="px-6 py-2 border border-brand-text text-brand-text rounded-full text-sm font-bold hover:bg-gray-50 transition-colors">
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
            
            {filteredClinics.length > 50 && (
              <div className="text-center pt-8">
                <p className="text-brand-muted mb-4">他にも {filteredClinics.length - 50} 件のクリニックがあります。</p>
                <button className="px-8 py-3 bg-white border border-gray-200 text-brand-text rounded-full font-bold hover:bg-gray-50 shadow-sm transition-all">
                  さらに表示する
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
