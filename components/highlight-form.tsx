'use client'
import type React from "react"
import { useState } from "react"
import { motion, spring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowRight, Shield, TrendingUp, Scale, Mail, MapPin, Clock, Users, Award } from "lucide-react"

export default function HighlightForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.terms) {
      alert("Por favor, aceite os termos para continuar.")
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);
      // alert("Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve.");
      // console.log(result.data);
      
    } else {
      alert("Erro ao enviar formulário. Tente novamente.");
    }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro de rede ao enviar formulário.");
    }

  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: spring,
        stiffness: 200,
        damping: 15,
      },
    },
  }

  const benefits = [
    {
      icon: Shield,
      text: "Proteção patrimonial completa",
    },
    {
      icon: TrendingUp,
      text: "Otimização fiscal internacional",
    },
    {
      icon: Scale,
      text: "Conformidade legal garantida",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contact@fhilaw.com",
      href: "mailto:contact@fhilaw.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Carlos Frederico Campos, Ouro Preto, BH - MG",
      href: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a Sexta: 9h às 18h",
      href: null,
    },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Clientes" },
    { icon: Award, value: "9+", label: "Anos" },
    { icon: MapPin, value: "20+", label: "Países" },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-gray-900 to-gray-900 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-teal-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Transforme Seu <span className="text-teal-400">Patrimônio Global</span> Hoje
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco para uma análise personalizada e descubra como podemos proteger e otimizar seus
            ativos
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-teal-900/60 rounded-full text-teal-400">
                  <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-teal-400">{stat.value}</p>
              <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: "0 0 40px rgba(20, 184, 166, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            {submitted ? (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-teal-900/60 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Solicitação Enviada com Sucesso!</h3>
                <p className="text-gray-300 mb-8 max-w-md">
                  Agradecemos seu contato. Nossa equipe analisará suas informações e entrará em contato em até 24 horas
                  para agendar sua consultoria estratégica personalizada.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      interest: "",
                      message: "",
                      terms: false,
                    })
                  }}
                  variant="outline"
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-900/50"
                >
                  Enviar Nova Solicitação
                </Button>
              </motion.div>
            ) : (
              <motion.form
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Nome Completo <span className="text-teal-400">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="bg-gray-700/80 border-gray-600 text-white focus:border-teal-400 focus:ring-teal-400/20"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      E-mail <span className="text-teal-400">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-gray-700/80 border-gray-600 text-white focus:border-teal-400 focus:ring-teal-400/20"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+55 (00) 00000-0000"
                      className="bg-gray-700/80 border-gray-600 text-white focus:border-teal-400 focus:ring-teal-400/20"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-300">
                      Área de Interesse Principal <span className="text-teal-400">*</span>
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.interest} required>
                      <SelectTrigger className="bg-gray-700/80 border-gray-600 text-white focus:border-teal-400 focus:ring-teal-400/20">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600 text-white">
                        <SelectItem value="holdings">Holdings Patrimoniais</SelectItem>
                        <SelectItem value="trusts">Trusts Internacionais</SelectItem>
                        <SelectItem value="offshore">Estruturas Offshore</SelectItem>
                        <SelectItem value="saida-fiscal">Saída Fiscal</SelectItem>
                        <SelectItem value="death-tech">Death Tech</SelectItem>
                        <SelectItem value="crypto">Ativos Digitais & Blockchain</SelectItem>
                        <SelectItem value="tax">Consultoria Tributária Internacional</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua necessidade ou situação patrimonial"
                    rows={4}
                    className="bg-gray-700/80 border-gray-600 text-white focus:border-teal-400 focus:ring-teal-400/20 resize-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={handleCheckboxChange}
                    className="border-gray-600 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600 mt-1"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-400 leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Concordo em receber comunicações e aceito a{" "}
                    <a href="#" className="text-teal-400 hover:underline">
                      política de privacidade
                    </a>
                  </label>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.terms}
                    className="w-full bg-teal-600 hover:bg-teal-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-lg py-6 rounded-md shadow-lg hover:shadow-teal-500/30 transition-all group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <span>Solicitar Consultoria Estratégica</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-2 text-white space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-teal-400">Por que nos escolher?</h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  >
                    <div className="p-2 bg-teal-900/60 rounded-full text-teal-400 mr-4 flex-shrink-0">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{benefit.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-white">Tempo de resposta</h4>
                  <span className="text-teal-400 font-bold">24h</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Nossa equipe analisará sua situação e entrará em contato em até 24 horas para agendar sua consultoria
                  personalizada.
                </p>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-teal-400">Informações de Contato</h3>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="p-2 bg-teal-900/60 rounded-full text-teal-400 mr-4 flex-shrink-0">
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm mb-1">{contact.label}</h4>
                      {contact.href ? (
                        <a href={contact.href} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="p-4 bg-teal-900/30 rounded-lg border border-teal-500/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-sm text-teal-300 italic">
                "A consultoria estratégica nos permitiu economizar mais de 30% em impostos e proteger nosso patrimônio
                familiar para as próximas gerações."
              </p>
              <p className="text-xs text-gray-400 mt-2">— Cliente desde 2019</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
