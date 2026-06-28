import React, { ReactNode } from "react";

export default function KnowledgeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-brand-ivory/20 min-h-screen">
      {children}
    </section>
  );
}
