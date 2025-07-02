"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useTypewriter } from "@/hooks/use-typewriter"

export default function HeroSection() {
  const typewriterText = useTypewriter(
    "Proteja e Otimize o Seu Patrimônio com expertise em Tributação Internacional e Soluções em Blockchain",
    80,
  )

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <section
      id="hero"
      className="relative py-16 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-500/5 to-transparent rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/90 z-[1]"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="min-h-[200px] md:min-h-[300px]"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="inline-block">
                  {typewriterText.split(" ").map((word, index) => {
                    const highlightedWords = [
                      "Otimize",
                      "Patrimônio",
                      "expertise",
                      "Tributação",
                      "Internacional",
                      "Soluções",
                      "Blockchain",
                    ]
                    const isHighlighted = highlightedWords.includes(word)

                    return (
                      <span
                        key={index}
                        className={`inline-block mr-2 md:mr-3 mb-2 ${isHighlighted ? "text-teal-400 relative" : ""}`}
                      >
                        {word}
                        {isHighlighted && (
                          <motion.span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-300"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
                          />
                        )}
                      </span>
                    )
                  })}
                  <motion.span
                    className="inline-block w-1 h-8 md:h-12 bg-teal-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="text-lg md:text-xl xl:text-2xl text-gray-200 max-w-2xl leading-relaxed"
            >
              Soluções personalizadas em <span className="text-teal-400 font-semibold">Holdings</span>,{" "}
              <span className="text-teal-400 font-semibold">Trusts</span>,{" "}
              <span className="text-teal-400 font-semibold">Estruturas Offshore</span>,{" "}
              <span className="text-teal-400 font-semibold">Saída Fiscal</span>,{" "}
              <span className="text-teal-400 font-semibold">Death Tech</span> e{" "}
              <span className="text-teal-400 font-semibold">Ativos Digitais</span> para preservar e expandir seu
              patrimônio com máxima segurança jurídica
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-10 rounded-lg shadow-2xl hover:shadow-teal-500/30 transition-all"
                  onClick={() => handleLinkClick("#contact")}
                >
                  Agende uma Consultoria Estratégica
                </Button>
              </motion.div>

              <motion.div className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-teal-400 text-lg md:text-lg py-6 md:py-8 px-6 md:px-8 rounded-lg backdrop-blur-sm bg-transparent"
                  onClick={() => handleLinkClick("#services")}
                >
                  Conheça Nossos Serviços
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 25 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              delay: 0.6,
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-16 -left-16 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="absolute -bottom-20 -right-12 w-40 h-40 bg-teal-500/15 rounded-full blur-xl"
              />
              <motion.div
                className="relative z-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/20 shadow-2xl"
                whileHover={{
                  boxShadow: "0 0 40px rgba(20, 184, 166, 0.4)",
                  borderColor: "rgba(20, 184, 166, 0.6)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Proteção Patrimonial Completa</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Nossa equipe de especialistas está pronta para desenvolver estratégias personalizadas que protejam seu
                  patrimônio e otimizem sua situação fiscal global.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">Consultoria jurídica especializada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">Planejamento tributário internacional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">Estruturação de ativos digitais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">Saída fiscal e death tech</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-[1]"
      />
    </section>
  )
}
