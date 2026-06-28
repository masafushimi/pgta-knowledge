import Link from "next/link";
import { notFound } from "next/navigation";
import articlesData from "@/data/articles.json";
import type { Metadata } from "next";

type Article = {
  slug: string;
  group: string;
  groupLabel: string;
  groupColor: string;
  order: number;
  title: string;
  description: string;
  keywords: string[];
  readTime: number;
  body: Array<{ type: string; text: string }>;
  relatedSlugs: string[];
};

export function generateStaticParams() {
  return articlesData.map((article: any) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articlesData.find((a: any) => a.slug === params.slug) as Article | undefined;
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
  };
}

const groupConfig: Record<string, { emoji: string; bg: string; tag: string; border: string }> = {
  A: { emoji: "💭", bg: "bg-rose-50", tag: "bg-rose-100 text-rose-700", border: "border-rose-100" },
  B: { emoji: "🧬", bg: "bg-blue-50", tag: "bg-blue-100 text-blue-700", border: "border-blue-100" },
  C: { emoji: "⚖️", bg: "bg-purple-50", tag: "bg-purple-100 text-purple-700", border: "border-purple-100" },
  D: { emoji: "🔍", bg: "bg-emerald-50", tag: "bg-emerald-100 text-emerald-700", border: "border-emerald-100" },
};

function renderBody(block: { type: string; text: string }, idx: number) {
  switch (block.type) {
    case "lead":
      return (
        <p key={idx} className="text-lg md:text-xl text-brand-text font-medium leading-relaxed border-l-4 border-brand-coral pl-5 py-2 my-6 bg-brand-ivory/30 rounded-r-xl">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={idx} className="text-xl font-bold text-brand-text mt-10 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-coral rounded-full inline-block" />
          {block.text}
        </h2>
      );
    case "text":
      return (
        <p key={idx} className="text-brand-muted leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div key={idx} className="bg-brand-coral/5 border border-brand-coral/20 rounded-2xl p-5 my-6">
          <p className="text-brand-text text-sm leading-relaxed font-medium">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData.find((a: any) => a.slug === slug) as Article | undefined;
  if (!article) notFound();

  const relatedArticles = articlesData.filter((a: any) => article.relatedSlugs.includes(a.slug)) as Article[];
  const cfg = groupConfig[article.group];

  // Same-group articles for navigation
  const sameGroupArticles = articlesData.filter(
    (a: any) => a.group === article.group && a.slug !== article.slug
  ) as Article[];

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "keywords": article.keywords.join(", "),
            "author": { "@type": "Organization", "name": "寄り添うPGT-A相談室" },
            "publisher": { "@type": "Organization", "name": "寄り添うPGT-A相談室" },
          }),
        }}
      />

      <div className="bg-brand-ivory/20 min-h-screen pb-20">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100 py-3 px-4">
          <div className="max-w-4xl mx-auto text-xs text-brand-muted flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-brand-coral">ホーム</Link>
            <span>&gt;</span>
            <Link href="/knowledge" className="hover:text-brand-coral">お役立ちコンテンツ</Link>
            <span>&gt;</span>
            <span className="font-bold text-brand-text line-clamp-1">{article.title.slice(0, 30)}…</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <article className="md:col-span-2">
            {/* Group tag */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${cfg.tag}`}>
              <span>{cfg.emoji}</span>
              <span>{article.groupLabel}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-tight mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-brand-muted mb-8 pb-8 border-b border-gray-100">
              <span>📖 読了目安：約{article.readTime}分</span>
              {article.keywords.map((kw) => (
                <span key={kw} className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">{kw}</span>
              ))}
            </div>

            {/* Article Body */}
            <div className="prose-custom">
              {article.body.map((block, idx) => renderBody(block, idx))}
            </div>

            {/* In-article LINE CTA */}
            <div className="mt-12 p-6 bg-[#06C755]/5 border border-[#06C755]/20 rounded-2xl text-center">
              <p className="font-bold text-brand-text mb-2">記事を読んで、疑問が残りましたか？</p>
              <p className="text-sm text-brand-muted mb-4">専門スタッフが匿名でお答えします。</p>
              <a href="https://line.me/R/ti/p/@562mdyqh" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#06C755] text-white font-bold rounded-full hover:bg-[#05b34c] transition-colors shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
                LINEで無料相談する
              </a>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-12">
                <h2 className="text-lg font-bold text-brand-text mb-4 border-b border-gray-200 pb-2">関連する記事</h2>
                <div className="space-y-3">
                  {relatedArticles.map((related) => {
                    const relCfg = groupConfig[related.group];
                    return (
                      <Link
                        key={related.slug}
                        href={`/knowledge/${related.slug}`}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-brand-coral/30 hover:shadow-md transition-all group"
                      >
                        <span className="text-xl">{relCfg.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-brand-text group-hover:text-brand-coral transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </p>
                          <p className="text-xs text-brand-muted mt-0.5">{related.groupLabel}</p>
                        </div>
                        <span className="text-brand-coral flex-shrink-0">→</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-6">
            {/* Sticky CTA */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-b from-brand-coral/10 to-transparent p-6 rounded-2xl border border-brand-coral/20 text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-xl shadow-sm mb-3">💬</div>
                <h3 className="font-bold text-brand-text text-sm mb-2">無料でLINE相談する</h3>
                <p className="text-xs text-brand-muted mb-4">匿名OK・何度でも無料</p>
                <a href="https://line.me/R/ti/p/@562mdyqh" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#06C755] text-white font-bold rounded-full text-sm hover:bg-[#05b34c] transition-colors">
                  LINEで相談
                </a>
              </div>

              {/* Same group articles */}
              {sameGroupArticles.length > 0 && (
                <div className={`p-5 rounded-2xl border ${cfg.border} ${cfg.bg}`}>
                  <h3 className="font-bold text-sm text-brand-text mb-3 flex items-center gap-2">
                    <span>{cfg.emoji}</span> 同じカテゴリの記事
                  </h3>
                  <ul className="space-y-2">
                    {sameGroupArticles.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/knowledge/${a.slug}`}
                          className="text-xs text-brand-text hover:text-brand-coral transition-colors leading-snug line-clamp-2 block">
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back to hub */}
              <Link href="/knowledge"
                className="block text-center py-3 border border-gray-200 rounded-xl text-sm text-brand-muted hover:border-brand-coral hover:text-brand-coral transition-colors bg-white">
                ← コンテンツ一覧に戻る
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
