import { Users, Globe, Workflow, Database } from "lucide-react"

export default function DifferentialsSection() {
  const differentials = [
    {
      title: "Especialização Dupla",
      description: "Expertise em tributação tradicional e ativos digitais, combinando o melhor dos dois mundos.",
      icon: Database,
    },
    {
      title: "Equipe Multidisciplinar",
      description: "Advogados, contadores e especialistas em blockchain trabalhando de forma integrada.",
      icon: Users,
    },
    {
      title: "Soluções End-to-End",
      description: "Do planejamento à implementação e gestão contínua, cuidamos de todo o processo.",
      icon: Workflow,
    },
    {
      title: "Tecnologia Proprietária",
      description: "Ferramentas exclusivas de análise e gestão para otimização de resultados.",
      icon: Database,
    },
    {
      title: "Alcance Global",
      description: "Rede de parceiros em jurisdições estratégicas para soluções verdadeiramente internacionais.",
      icon: Globe,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais Competitivos</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            O que nos torna a escolha ideal para seu planejamento patrimonial internacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div key={index} className="flex p-6 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <div className="mr-4 p-2 rounded-full bg-teal-600/20 text-teal-400 h-fit">
                <differential.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{differential.title}</h3>
                <p className="text-slate-300">{differential.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
