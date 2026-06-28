import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script id="json-ld-website" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "寄り添うPGT-A相談室",
          "url": "https://pgt-a-prototype.vercel.app/"
        })}
      </Script>

      {/* Hero Section */}
      <section className="bg-brand-ivory px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-brand-coral/20 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-brand-coral/20 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-brand-coral text-sm font-bold shadow-sm mb-6">
            不妊治療・流産に悩むあなたへ
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-brand-text leading-tight mb-8">
            「なぜ、うまくいかないのだろう」<br className="hidden md:block"/>
            その答えを探す旅に、寄り添います。
          </h1>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            PGT-A（着床前胚染色体異数性検査）は、流産を防ぎ、妊娠への近道になるかもしれない選択肢です。<br />
            しかし、莫大な費用、立ちはだかる学会のルール、そして年齢への焦り…。<br />
            ここは、あなたが後悔のない選択をするための、すべての情報とサポートが集まる場所です。
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#worries" className="px-8 py-4 bg-white text-brand-text font-bold rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              今の悩みから答えを探す
            </a>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#06C755] text-white font-bold rounded-full shadow-md hover:bg-[#05b34c] transition-colors flex items-center justify-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
              匿名でLINE無料相談
            </a>
          </div>
        </div>
      </section>

      {/* 悩みの角度から探す (Worry Navigation) */}
      <section id="worries" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-text mb-4">あなたが今、一番不安なことは何ですか？</h2>
            <p className="text-brand-muted">多角的な視点から、あなたに必要な情報をお届けします。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Medical Angle */}
            <Link href="/knowledge/medical" className="group block p-6 bg-brand-ivory/50 rounded-2xl hover:bg-brand-coral/5 border border-transparent hover:border-brand-coral/20 transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl group-hover:scale-110 transition-transform">
                🧬
              </div>
              <h3 className="font-bold text-lg text-brand-text mb-2">医学的な真実</h3>
              <p className="text-sm text-brand-muted">PGT-Aの精度、メリット・デメリット、モザイク胚への考え方や年齢別の正常胚率について。</p>
            </Link>

            {/* Financial Angle */}
            <Link href="/knowledge/money" className="group block p-6 bg-brand-ivory/50 rounded-2xl hover:bg-brand-coral/5 border border-transparent hover:border-brand-coral/20 transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl group-hover:scale-110 transition-transform">
                💰
              </div>
              <h3 className="font-bold text-lg text-brand-text mb-2">制度とお金</h3>
              <p className="text-sm text-brand-muted">1回数万円〜の検査費用をどう乗り切るか。先進医療Bの現状と、助成金などのリアルなコスト。</p>
            </Link>

            {/* Psychological Angle */}
            <Link href="/knowledge/stories" className="group block p-6 bg-brand-ivory/50 rounded-2xl hover:bg-brand-coral/5 border border-transparent hover:border-brand-coral/20 transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="font-bold text-lg text-brand-text mb-2">体験談・心のケア</h3>
              <p className="text-sm text-brand-muted">流産を繰り返した方の体験談、夫婦間の温度差、やめどきの悩み、遺伝カウンセリングの役割。</p>
            </Link>

            {/* Options Angle */}
            <Link href="/knowledge/options" className="group block p-6 bg-brand-ivory/50 rounded-2xl hover:bg-brand-coral/5 border border-transparent hover:border-brand-coral/20 transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h3 className="font-bold text-lg text-brand-text mb-2">選択肢の広がり</h3>
              <p className="text-sm text-brand-muted">海外ラボへの検体輸送、卵子提供、特別養子縁組、あるいは治療を終える（ふたりで生きる）選択。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold font-serif text-brand-text">注目の記事</h2>
            <Link href="/knowledge" className="text-brand-coral font-bold text-sm hover:underline">すべて見る</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "「何度も頑張っているのに、なぜ」流産を繰り返した私が、絶望の先で見つけたひとつの選択肢", tag: "体験談・共感", emoji: "💭", slug: "why-miscarriage-repeats" },
              { title: "なぜ日本の不妊治療は制限が多いのか？学会指針と海外基準のリアルな格差", tag: "倫理・法律", emoji: "⚖️", slug: "japan-vs-overseas-rules" },
              { title: "「モザイク胚」と言われたらどうする？判定基準と高精度な分析の裏側", tag: "技術・仕組み", emoji: "🧬", slug: "mosaic-embryo" }
            ].map((article, i) => (
              <Link key={i} href={`/knowledge/${article.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="h-40 bg-brand-ivory flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500">
                  {article.emoji}
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-brand-coral/10 text-brand-coral text-xs font-bold rounded mb-3">
                    {article.tag}
                  </span>
                  <h3 className="font-bold text-brand-text mb-2 leading-snug">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Search Banner */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-ivory to-white rounded-3xl p-8 md:p-12 border border-gray-100 text-center shadow-sm">
          <h2 className="text-2xl font-bold font-serif text-brand-text mb-4">PGT-A対応クリニックを探す</h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            日本全国のPGT-A実施承認施設（先進医療B対応・非対応含む）のデータベースをご用意しています。あなたの希望条件に合わせて検索可能です。
          </p>
          <Link href="/clinics" className="inline-block px-8 py-4 bg-white border-2 border-brand-coral text-brand-coral font-bold rounded-full hover:bg-brand-coral hover:text-white transition-colors">
            全国のクリニック一覧を見る
          </Link>
        </div>
      </section>
    </>
  );
}
