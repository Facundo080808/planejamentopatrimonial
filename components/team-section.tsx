"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Award, Globe } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Izabela Fernandes Santos",
      role: "Sócia Fundadora",
      credentials: "OAB/MG 162735",
      specialties: [
        "Criptoativos e Web3",
        "DAOs e Smart Contracts",
        "NFTs Utilitários",
        "Tokenização de Ativos",
        "Tax Law",
      ],
      image: "/images/izabela.png",
      linkedin: "https://www.linkedin.com/in/fernandesadv/",
    },
    {
      name: "Peter Faria Heine",
      role: "Sócio Fundador",
      credentials: "OAB/MG 162305 • OA Portugal 62155P • OA Saxônia 119842",
      specialties: [
        "Proteção Patrimonial Internacional",
        "Estruturas Offshore",
        "Direito Internacional",
        "Sucessão Patrimonial",
        "Tax Law",
      ],
      image: "/images/peter.png",
      linkedin: "https://www.linkedin.com/in/peter-faria-heine-77b965229/?originalSubdomain=de",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Especialistas em Proteção Patrimonial Global
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative overflow-hidden rounded-xl w-full md:w-72 h-72 md:h-72 flex-shrink-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white hover:bg-teal-500 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-teal-400 font-semibold text-lg mb-3">{member.role}</p>

                    <div className="flex items-start mb-4">
                      <Award className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300 leading-relaxed">{member.credentials}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <Globe className="h-4 w-4 text-teal-400 mr-2" />
                        <span className="text-sm font-medium text-gray-300">Especialidades:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-teal-900/30 text-teal-300 text-xs rounded-full border border-teal-500/30"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Novo componente/modal após os perfis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-teal-500/20 shadow-2xl max-w-5xl mx-auto relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Sócios Fundadores</h3>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-gray-300">
                <span className="text-teal-400 font-semibold">Izabela Fernandes Santos</span> (OAB/MG 162735) e{" "}
                <span className="text-teal-400 font-semibold">Peter Faria Heine</span> (OAB/MG 162305, OA Portugal
                62155P, OA Saxônia 119842) são advogados especializados em proteção patrimonial internacional, com
                ênfase em estratégias jurídicas que integram{" "}
                <span className="text-teal-400 font-medium">Direito Internacional</span>,{" "}
                <span className="text-teal-400 font-medium">estruturas offshore</span>,{" "}
                <span className="text-teal-400 font-medium">criptoativos</span> e{" "}
                <span className="text-teal-400 font-medium">soluções em Web3</span>.
              </p>

              <p className="text-gray-300">
                Atuam com <span className="text-teal-400 font-medium">DAOs</span>,{" "}
                <span className="text-teal-400 font-medium">NFTs utilitários</span>,{" "}
                <span className="text-teal-400 font-medium">tokenização de ativos</span>,{" "}
                <span className="text-teal-400 font-medium">smart contracts</span> e{" "}
                <span className="text-teal-400 font-medium">custódia digital segura</span>, voltados à sucessão,
                blindagem e gestão de patrimônio global.
              </p>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-teal-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-teal-400/10 rounded-full blur-lg pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
