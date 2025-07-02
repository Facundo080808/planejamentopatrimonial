"use client"

import { Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <button
              onClick={() => handleLinkClick("#hero")}
              className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-white">
                <span className="text-teal-400">Fernandes</span> & <span className="text-teal-400">Heine</span>
              </span>
            </button>
            <p className="text-slate-400 mb-6">
              Especialistas em tributação internacional, planejamento patrimonial e soluções em blockchain para proteção
              e otimização de patrimônio global.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fhilaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick("#hero")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#team")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#cases")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Cases de Sucesso
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-left"
                >
                  Holdings Patrimoniais
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Trusts Internacionais
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Estruturas Offshore
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Saída Fiscal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Death Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Ativos Digitais & Blockchain
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("#services")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Consultoria Tributária Internacional
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-slate-400 hover:text-white transition-colors text-left">Termos de Uso</button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors text-left">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-white transition-colors text-left">
                  Política de Cookies
                </button>
              </li>
            </ul>
            <div className="mt-6 space-y-1">
              <p className="text-sm text-slate-500">Izabela Fernandes Santos</p>
              <p className="text-sm text-slate-500">OAB/MG 162735</p>
              <p className="text-sm text-slate-500 mt-2">Peter Faria Heine</p>
              <p className="text-sm text-slate-500">OAB/MG 162305</p>
              <p className="text-sm text-slate-500">OA Portugal 62155P</p>
              <p className="text-sm text-slate-500">OA Saxônia 119842</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} Fernandes & Heine. Todos os direitos reservados.</p>
          <p className="mt-2">
            Especialistas em Tributação Internacional, Planejamento Patrimonial e Soluções em Blockchain
          </p>
        </div>
      </div>
    </footer>
  )
}
