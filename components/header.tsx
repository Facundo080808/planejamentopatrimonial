"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Cases", href: "#cases" },
    { name: "Equipe", href: "#team" },
    { name: "Contato", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ]

  const handleLinkClick = (href: string) => {
    setIsOpen(false)

    // Smooth scroll para a seção
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

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div className="flex items-center gap-2" variants={logoVariants} initial="hidden" animate="visible">
          <Link href="#hero" onClick={() => handleLinkClick("#hero")} className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              {/* Logo H personalizado */}
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
            </motion.div>
            <motion.span
              className="hidden font-bold text-xl sm:inline-block text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-teal-400">Fernandes</span> & <span className="text-teal-400">Heine</span>
            </motion.span>
          </Link>
        </motion.div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-800 text-white border-gray-700 w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <span className="font-bold text-lg">
                    <span className="text-teal-400">Fernandes</span> & <span className="text-teal-400">Heine</span>
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className="text-lg font-medium transition-colors hover:text-teal-400 py-2 px-4 rounded-lg hover:bg-gray-700/50 block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-700"
                >
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white"
                    onClick={() => handleLinkClick("#contact")}
                    asChild
                  >
                    <Link href="#contact">Agende uma Análise</Link>
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            {menuItems.map((item, i) => (
              <motion.div key={item.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
                <Link
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className="text-sm font-medium transition-colors hover:text-teal-400 text-gray-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        )}

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="bg-teal-600 hover:bg-teal-500 text-white"
            onClick={() => handleLinkClick("#contact")}
            asChild
          >
            <Link href="#contact">Agende uma Análise</Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
