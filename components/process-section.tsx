import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProcessSection() {
  const steps = [
    {
      title: "Diagnóstico Inicial",
      description: "Análise completa da situação patrimonial atual, identificando oportunidades e riscos.",
    },
    {
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de soluções personalizadas alinhadas aos seus objetivos patrimoniais.",
    },
    {
      title: "Implementação",
      description: "Execução das estratégias com suporte jurídico completo e acompanhamento detalhado.",
    },
    {
      title: "Gestão Contínua",
      description: "Acompanhamento e adaptação às mudanças regulatórias e às suas necessidades.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como Trabalhamos</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nosso processo estruturado garante soluções eficientes e personalizadas para cada cliente
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-teal-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-900 text-teal-400 font-bold text-xl">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="ml-4 h-0.5 flex-1 bg-teal-800 hidden lg:block" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                <div className="mt-4 flex items-center text-teal-400">
                  <span className="text-sm font-medium">Processo Personalizado</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all"
            asChild
          >
            <Link href="#form">Inicie Seu Planejamento Patrimonial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
