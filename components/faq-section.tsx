"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      category: "Geral",
      questions: [
        {
          question: "Qual a diferença entre planejamento tributário e evasão fiscal?",
          answer:
            "O planejamento tributário é a organização legal dos negócios para reduzir a carga tributária, utilizando meios lícitos e transparentes. Já a evasão fiscal envolve práticas ilícitas para evitar o pagamento de impostos. Nosso escritório trabalha exclusivamente com estratégias legais e em conformidade com as legislações aplicáveis.",
        },
        {
          question: "Como saber se preciso de uma estrutura internacional para meu patrimônio?",
          answer:
            "A necessidade de uma estrutura internacional depende de diversos fatores, como o volume patrimonial, a diversificação geográfica dos investimentos, objetivos sucessórios e perfil de risco. Recomendamos uma análise personalizada para avaliar se essa é a melhor estratégia para seu caso específico.",
        },
      ],
    },
    {
      category: "Holdings e Trusts",
      questions: [
        {
          question: "Qual a principal vantagem de uma holding familiar?",
          answer:
            "Uma holding familiar centraliza a gestão do patrimônio, facilita o planejamento sucessório, pode reduzir a carga tributária na transmissão de bens e oferece maior proteção patrimonial contra riscos de negócios específicos. Além disso, estabelece uma governança mais estruturada para decisões familiares sobre o patrimônio.",
        },
        {
          question: "Trusts são reconhecidos pela legislação brasileira?",
          answer:
            "Embora o Brasil não tenha legislação específica sobre trusts, por ser um país de tradição civil law, a Receita Federal reconhece essas estruturas para fins de declaração de bens no exterior. É fundamental um planejamento cuidadoso para garantir a eficácia jurídica e tributária dessas estruturas para residentes fiscais no Brasil.",
        },
      ],
    },
    {
      category: "Compliance Internacional",
      questions: [
        {
          question: "Como garantir que minha estrutura internacional esteja em conformidade?",
          answer:
            "A conformidade de estruturas internacionais exige: (1) transparência nas declarações fiscais; (2) substância econômica real nas jurisdições escolhidas; (3) documentação adequada de todas as operações; (4) respeito às regras de preços de transferência; e (5) monitoramento constante das mudanças regulatórias. Nosso escritório oferece acompanhamento contínuo para garantir compliance permanente.",
        },
        {
          question: "Quais os riscos de não declarar ativos no exterior?",
          answer:
            "A não declaração de ativos no exterior pode resultar em multas significativas (que podem chegar a 150% do imposto devido), processos por sonegação fiscal, inclusão em listas de devedores, bloqueio de bens, e até mesmo consequências criminais. Com a troca automática de informações entre países, a detecção desses casos tem aumentado consideravelmente.",
        },
      ],
    },
    {
      category: "Criptoativos",
      questions: [
        {
          question: "Como declarar criptomoedas no Imposto de Renda?",
          answer:
            "Criptomoedas devem ser declaradas na ficha 'Bens e Direitos' utilizando o código específico para ativos digitais. É necessário informar o custo de aquisição, a exchange ou custódia onde estão armazenadas, e manter um controle detalhado de todas as operações para apuração de ganho de capital em caso de alienação acima do limite de isenção.",
        },
        {
          question: "Existe tributação sobre a mineração de criptomoedas?",
          answer:
            "Sim, os tokens recebidos por mineração são considerados renda e devem ser tributados pelo valor de mercado no momento do recebimento. Além disso, a atividade de mineração pode ser considerada uma atividade empresarial, exigindo a constituição de pessoa jurídica adequada e recolhimento dos tributos correspondentes à atividade.",
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
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
    <section id="faq" className="py-16 md:py-24 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Perguntas <span className="text-teal-400">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre planejamento patrimonial e tributário internacional
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.h3
                className="text-xl font-bold mb-4 text-teal-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.5 }}
              >
                {category.category}
              </motion.h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + faqIndex * 0.1 + categoryIndex * 0.2, duration: 0.5 }}
                  >
                    <AccordionItem value={`item-${categoryIndex}-${faqIndex}`} className="border-gray-700">
                      <AccordionTrigger className="text-left font-medium text-white hover:text-teal-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <motion.p
                          className="text-gray-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
