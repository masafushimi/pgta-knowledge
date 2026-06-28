import Link from "next/link";
import type { Metadata } from "next";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "PGT-A お役立ちコンテンツ | 体験談・技術・法律・選び方",
  description: "PGT-A（着床前診断）に関する体験談、科学的解説、法律・倫理、エージェントの選び方まで。深く悩む方に寄り添う、すべての情報をまとめました。",
};

const groups = [
  {
    id: "A",
    label: "体験談・共感",
    tagline: "何度も治療がうまくいかず、心を削られている人へ",
    color: "rose",
    emoji: "💭",
    bg: "bg-rose-50",
    border: "border-rose-100",
    tag: "bg-rose-100 text-rose-700",
    dot: "bg-rose-400",
  },
  {
    id: "B",
    label: "技術・仕組み",
    tagline: "PGT-Aの科学的根拠と最新ゲノム解析を正しく知る",
    color: "blue",
    emoji: "🧬",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "bg-blue-100 text-blue-700",
    dot: "bg-blue-400",
  },
  {
    id: "C",
    label: "倫理・法律",
    tagline: "日本と海外の規制、違法性についての不安を解消する",
    color: "purple",
    emoji: "⚖️",
    bg: "bg-purple-50",
    border: "border-purple-100",
    tag: "bg-purple-100 text-purple-700",
    dot: "bg-purple-400",
  },
  {
    id: "D",
    label: "透明性・選び方",
    tagline: "不透明な「海外エージェントの闇」に騙されないために",
    color: "green",
    emoji: "🔍",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    tag: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-400",
  },
];

export default function KnowledgePage() {
  return (
    <div className="bg-brand-ivory/20 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-serif text-brand-text mb-4">
            PGT-A お役立ちコンテンツ
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-2xl mx-auto">
            「体験談」から「科学的解説」「法律・倫理」「エージェントの選び方」まで。<br />
            深く悩むあなたに寄り添う、4つの角度からの情報をまとめました。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {groups.map((group) => {
          const articles = articlesData.filter((a: any) => a.group === group.id);
          return (
            <section key={group.id}>
              {/* Group Header */}
              <div className={`flex items-start gap-4 p-6 rounded-2xl ${group.bg} border ${group.border} mb-6`}>
                <span className="text-4xl">{group.emoji}</span>
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 ${group.tag}`}>
                    グループ{group.id}
                  </span>
                  <h2 className="text-xl font-bold font-serif text-brand-text">{group.label}</h2>
                  <p className="text-brand-muted text-sm mt-1">{group.tagline}</p>
                </div>
              </div>

              {/* Articles List */}
              <div className="space-y-4">
                {articles.map((article: any) => (
                  <Link
                    key={article.slug}
                    href={`/knowledge/${article.slug}`}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-coral/30 transition-all group"
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${group.dot}`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-brand-text group-hover:text-brand-coral transition-colors leading-snug text-sm md:text-base line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-brand-muted mt-1 hidden md:block">{article.description}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2 text-xs text-brand-muted">
                      <span>約{article.readTime}分</span>
                      <span className="text-brand-coral text-lg">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-gradient-to-br from-brand-ivory to-white p-8 md:p-12 rounded-3xl text-center border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-brand-text mb-3">記事を読んで、まだ迷っていますか？</h2>
          <p className="text-sm text-brand-muted mb-6 max-w-xl mx-auto">
            情報を読んでも「私の場合はどうなの？」という疑問が残ることがあります。<br />
            そんな時は、ぜひLINEで無料相談してみてください。
          </p>
          <a href="https://line.me/R/ti/p/@562mdyqh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-full shadow-md hover:bg-[#05b34c] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.876 8.527 9.585.39.083.921.258 1.057.592.115.285.076.726.035 1.018l-.208 1.254c-.053.33-.243 1.025.889.549 1.134-.477 6.103-3.585 8.356-6.172 1.942-2.181 2.344-4.225 2.344-6.826z"/></svg>
            LINEで無料相談（匿名OK）
          </a>
        </section>
      </div>
    </div>
  );
}
