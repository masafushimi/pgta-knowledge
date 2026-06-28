import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-brand-ivory">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-brand-text mb-4">寄り添うPGT-A相談室</h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            何度も頑張っているのにうまくいかない。<br/>
            そんな深い悩みを抱える方へ、科学的な選択肢と<br/>
            心に寄り添うサポートを提供します。
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-brand-text">探す・知る</h3>
          <ul className="space-y-2 text-sm text-brand-muted">
            <li><Link href="/ranking" className="hover:text-brand-coral">👑 比較ランキング</Link></li>
            <li><Link href="/ranking/cost" className="hover:text-brand-coral">費用で比較する</Link></li>
            <li><Link href="/knowledge" className="hover:text-brand-coral">PGT-Aの真実</Link></li>
            <li><Link href="/knowledge/money" className="hover:text-brand-coral">費用と制度</Link></li>
            <li><Link href="/knowledge/stories" className="hover:text-brand-coral">体験談・心のケア</Link></li>
            <li><Link href="/clinics" className="hover:text-brand-coral">クリニックを探す</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-brand-text mb-4">ご相談</h4>
          <p className="text-sm text-brand-muted mb-4">
            匿名でのご相談、海外ラボとの連携に関するご質問など、まずはLINEからお気軽にどうぞ。
          </p>
          <a href="#line" className="inline-block px-6 py-2 bg-brand-coral text-white rounded-full text-sm font-medium hover:bg-brand-coral-hover transition-colors">
            無料LINE相談はこちら
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-gray-100 text-center text-sm text-brand-muted">
        © 2026 寄り添うPGT-A相談室 All rights reserved.
      </div>
    </footer>
  );
}
