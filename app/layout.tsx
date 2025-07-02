import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title:
    "Fernandes & Heine | Proteja e Otimize o Seu Patrimônio com Expertise em Tributação Internacional e Soluções em Blockchain",
  description:
    "Especialistas em planejamento patrimonial internacional, holdings, trusts, estruturas offshore, ativos digitais, saída fiscal e death tech. Proteja seu patrimônio com segurança jurídica e otimização fiscal global.",
  keywords:
    "planejamento patrimonial, tributação internacional, blockchain, holdings, trusts, offshore, saída fiscal, death tech, ativos digitais, proteção patrimonial",
  authors: [{ name: "Fernandes & Heine" }],
  creator: "Fernandes & Heine",
  publisher: "Fernandes & Heine",
  openGraph: {
    title: "Fernandes & Heine | Especialistas em Tributação Internacional e Blockchain",
    description: "Proteja e otimize seu patrimônio com expertise em tributação internacional e soluções em blockchain",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-gray-900">{children}</body>
    </html>
  )
}
