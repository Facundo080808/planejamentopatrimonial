import { Shield, TrendingUp, Scale, Bitcoin } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Proteção Patrimonial",
      description: "Estruturas jurídicas robustas para blindagem patrimonial e segurança de seus ativos globais.",
      icon: Shield,
    },
    {
      title: "Otimização Fiscal",
      description: "Estratégias legales para redução da carga tributária global e maximização de rendimentos.",
      icon: TrendingUp,
    },
    {
      title: "Compliance Total",
      description: "Conformidade com regulamentações internacionais e locais, evitando riscos legais e reputacionais.",
      icon: Scale,
    },
    {
      title: "Ativos Digitais",
      description: "Gestão especializada de criptoativos com segurança jurídica e eficiência tributária.",
      icon: Bitcoin,
    },
  ]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Combinamos expertise jurídica tradicional com conhecimento avançado em tecnologias disruptivas para proteger
            seu patrimônio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-700 bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-teal-900/60 text-teal-400 mb-4">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
