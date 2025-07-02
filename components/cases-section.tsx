"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote } from "lucide-react"

export default function CasesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const cases = [
    {
      category: "holding",
      title: "Estruturação Patrimonial Familiar",
      challenge:
        "Família com patrimônio diversificado em múltiplos países enfrentando riscos sucessórios e carga tributária elevada.",
      solution: "Implementação de holding familiar com estrutura de governança e planejamento sucessório integrado.",
      results:
        "Redução de 32% na carga tributária e proteção sucessória completa com transmissão simplificada de bens.",
      testimonial:
        "A estrutura implementada nos trouxe tranquilidade e eficiência fiscal que não imaginávamos ser possível.",
    },
    {
      category: "crypto",
      title: "Regularização de Investimentos em Criptoativos",
      challenge:
        "Investidor com portfólio significativo de criptomoedas sem declaração adequada e exposição a riscos fiscais.",
      solution: "Estratégia de regularização com estruturação de veículo específico para gestão de ativos digitais.",
      results:
        "Conformidade fiscal completa, redução de exposição tributária e estrutura otimizada para futuros investimentos.",
      testimonial:
        "Consegui regularizar minha situação e ainda otimizar a tributação dos meus investimentos em cripto.",
    },
    {
      category: "offshore",
      title: "Proteção Patrimonial Internacional",
      challenge: "Empresário com ativos em diferentes jurisdições buscando proteção contra riscos jurídicos locais.",
      solution: "Implementação de estrutura offshore combinada com trust em jurisdição estratégica.",
      results: "Blindagem patrimonial efetiva com compliance internacional e otimização da carga tributária global.",
      testimonial:
        "A solução implementada me permitiu expandir internacionalmente com segurança jurídica e eficiência.",
    },
    {
      category: "tax",
      title: "Otimização Fiscal para Expatriados",
      challenge: "Executivo transferido para o exterior com complexidades fiscais em ambos os países.",
      solution: "Planejamento tributário internacional com análise de tratados e estruturação adequada de rendimentos.",
      results: "Eliminação da bitributação e economia fiscal de aproximadamente 28% sobre rendimentos globais.",
      testimonial:
        "O suporte especializado foi fundamental para navegar as complexidades fiscais da minha mudança internacional.",
    },
  ]

  const filteredCases = activeTab === "all" ? cases : cases.filter((c) => c.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="cases" className="py-16 md:py-24 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-teal-400">Cases</span> de Sucesso
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Conheça alguns exemplos de como ajudamos nossos clientes a proteger e otimizar seu patrimônio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-teal-600">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="holding" className="data-[state=active]:bg-teal-600">
                  Holdings
                </TabsTrigger>
                <TabsTrigger value="crypto" className="data-[state=active]:bg-teal-600">
                  Criptoativos
                </TabsTrigger>
                <TabsTrigger value="offshore" className="data-[state=active]:bg-teal-600">
                  Offshore
                </TabsTrigger>
                <TabsTrigger value="tax" className="data-[state=active]:bg-teal-600">
                  Tributário
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {filteredCases.map((case_, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px -10px rgba(20, 184, 166, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="border-gray-700 bg-gray-700 text-white h-full">
                      <CardHeader>
                        <CardTitle>{case_.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          Case de{" "}
                          {case_.category === "holding"
                            ? "Holdings Patrimoniais"
                            : case_.category === "crypto"
                              ? "Ativos Digitais"
                              : case_.category === "offshore"
                                ? "Estruturas Offshore"
                                : "Consultoria Tributária"}
                          <span className="bg-teal-900 text-teal-300 px-2 py-1 rounded text-xs font-medium ml-2">
                            {case_.category}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-teal-400">Desafio:</h4>
                          <p className="text-gray-300">{case_.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-teal-400">Solução:</h4>
                          <p className="text-gray-300">{case_.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-teal-400">Resultados:</h4>
                          <p className="text-gray-300">{case_.results}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gray-600 pt-4">
                        <div className="flex items-start">
                          <Quote className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-1" />
                          <p className="text-sm italic text-gray-300">{case_.testimonial}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
