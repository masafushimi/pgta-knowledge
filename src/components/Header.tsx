import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-ivory/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-text tracking-wider">
          寄り添うPGT-A相談室
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm text-brand-text hover:text-brand-coral transition-colors">
            ホーム
          </Link>
          <Link href="/knowledge" className="text-sm text-brand-text hover:text-brand-coral transition-colors">
            PGT-Aの真実
          </Link>
          <Link href="/knowledge/money" className="text-sm text-brand-text hover:text-brand-coral transition-colors">
            費用と制度
          </Link>
          <Link href="/ranking" className="text-sm font-bold text-brand-coral hover:text-brand-coral-hover transition-colors">
            👑 比較・ランキング
          </Link>
          <Link href="/knowledge/stories" className="text-sm text-brand-text hover:text-brand-coral transition-colors">
            体験談・心のケア
          </Link>
          <Link href="/clinics" className="text-sm text-brand-text hover:text-brand-coral transition-colors">
            クリニックを探す
          </Link>
          <a href="#line" className="px-5 py-2 bg-brand-coral text-white rounded-full text-sm font-medium hover:bg-brand-coral-hover transition-colors shadow-sm">
            無料LINE相談
          </a>
        </nav>
      </div>
    </header>
  );
}
