"use client"

import { motion } from "framer-motion"

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Clientes Atendidos" },
    { value: "9+", label: "Anos de Experiência" },
    { value: "$2B+", label: "Patrimônio Gerenciado" },
    { value: "20+", label: "Jurisdições" },
  ]

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold text-teal-400"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm md:text-base text-gray-300 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
