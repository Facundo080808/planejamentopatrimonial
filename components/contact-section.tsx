"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Clock, Users, Award } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
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

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Nosso Escritório",
      content: "Rua Carlos Frederico Campos\nBairro Ouro Preto\nBelo Horizonte - MG",
      highlight: false,
    },
    {
      icon: Mail,
      title: "E-mail Direto",
      content: "contact@fhilaw.com",
      highlight: true,
      href: "mailto:contact@fhilaw.com",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h\nSábados: Sob agendamento",
      highlight: false,
    },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Clientes Atendidos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
    { icon: MapPin, value: "20+", label: "Jurisdições" },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-gray-900 z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Entre em <span className="text-teal-400">Contato</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a proteger e otimizar seu patrimônio global. Entre em contato conosco e
            descubra como podemos transformar sua situação patrimonial.
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-teal-500/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.2)" }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-900/60 rounded-full text-teal-400">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Informações de Contato */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                info.highlight
                  ? "border-teal-500/50 bg-gradient-to-br from-teal-900/20 to-gray-800/50"
                  : "border-gray-700 hover:border-teal-500/30"
              }`}
              whileHover={{
                y: -5,
                boxShadow: info.highlight ? "0 15px 40px rgba(20, 184, 166, 0.3)" : "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 rounded-full mb-6 ${
                    info.highlight ? "bg-teal-600 text-white" : "bg-teal-900/60 text-teal-400"
                  }`}
                >
                  <info.icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>

                {info.href ? (
                  <a
                    href={info.href}
                    className="text-lg text-gray-300 hover:text-teal-400 transition-colors font-medium"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-lg text-gray-300 whitespace-pre-line leading-relaxed">{info.content}</p>
                )}

                {info.highlight && (
                  <div className="mt-4 px-4 py-2 bg-teal-500/20 rounded-full">
                    <span className="text-sm text-teal-300 font-medium">Resposta em 24h</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-teal-500/20 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para Proteger Seu Patrimônio?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está aguardando para desenvolver uma estratégia personalizada que atenda às
              suas necessidades específicas de proteção patrimonial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all"
                  asChild
                >
                  <Link href="#form">Solicitar Análise Gratuita</Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-500/50 text-teal-400 hover:bg-teal-900/30 px-8 py-6 text-lg rounded-lg bg-transparent"
                  asChild
                >
                  <a href="mailto:contact@fhilaw.com">Enviar E-mail Direto</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
