"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Briefcase, Globe, Bitcoin, Calculator, Plane, Heart } from "lucide-react"

export default function ServicesSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("holdings")

  const services = [
    {
      id: "holdings",
      title: "Holdings Patrimoniais",
      icon: Building2,
      description: "Estruturação completa para proteção e gestão eficiente de patrimônio familiar",
      items: ["Estruturação de holdings familiares", "Planejamento sucessório", "Governança corporativa familiar"],
    },
    {
      id: "trusts",
      title: "Trusts Internacionais",
      icon: Briefcase,
      description: "Veículos jurídicos sofisticados para proteção patrimonial e sucessória",
      items: ["Constituição e administração", "Trusts discricionários", "Asset protection trusts"],
    },
    {
      id: "offshore",
      title: "Estruturas Offshore",
      icon: Globe,
      description: "Soluções internacionais para diversificação e proteção de ativos",
      items: [
        "Abertura de empresas em jurisdições estratégicas",
        "Contas bancárias internacionais",
        "Compliance internacional",
      ],
    },
    {
      id: "saida-fiscal",
      title: "Saída Fiscal",
      icon: Plane,
      description: "Planejamento estratégico para mudança de residência fiscal",
      items: [
        "Planejamento de saída do Brasil",
        "Escolha de jurisdição adequada",
        "Estruturação pré-mudança",
        "Compliance pós-mudança",
      ],
    },
    {
      id: "death-tech",
      title: "Death Tech",
      icon: Heart,
      description: "Tecnologias avançadas para planejamento sucessório digital",
      items: [
        "Sucessão de ativos digitais",
        "Testamentos digitais",
        "Gestão de senhas e acessos",
        "Planejamento sucessório tech",
      ],
    },
    {
      id: "crypto",
      title: "Ativos Digitais & Blockchain",
      icon: Bitcoin,
      description: "Gestão jurídica e tributária de investimentos em criptoativos",
      items: [
        "Declaração de criptoativos",
        "Estruturação de carteiras cripto",
        "Tokenização de ativos",
        "Smart contracts e DAOs",
      ],
    },
    {
      id: "tax",
      title: "Consultoria Tributária Internacional",
      icon: Calculator,
      description: "Estratégias para otimização fiscal global e conformidade regulatória",
      items: ["Planejamento fiscal internacional", "Prevenção à bitributação", "Análise de tratados internacionais"],
    },
  ]

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

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-800 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossas <span className="text-teal-400">Soluções</span> Especializadas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços para proteção e otimização patrimonial em contexto global
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3)",
                transition: { duration: 0.2 },
              }}
              onClick={() => setOpenCategory(service.id)}
              className={`flex flex-col items-center p-4 rounded-lg text-center transition-all ${
                openCategory === service.id
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
              }`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <service.icon
                  className={`h-8 w-8 mb-3 ${openCategory === service.id ? "text-white" : "text-teal-400"}`}
                />
              </motion.div>
              <h3 className="text-sm font-bold">{service.title}</h3>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-700 rounded-lg shadow-md p-6 md:p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={openCategory === service.id ? "block" : "hidden"}
              variants={contentVariants}
              initial="hidden"
              animate={openCategory === service.id ? "visible" : "hidden"}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-teal-400">{service.title}</span>
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {service.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-gray-600">
                      <AccordionTrigger className="text-left font-medium text-white hover:text-teal-400">
                        {item}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-300">
                          Nossa equipe especializada oferece consultoria completa em {item.toLowerCase()}, garantindo
                          segurança jurídica e otimização fiscal para seu patrimônio.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
