import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface SiteHeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (id: string) => void
}

export function SiteHeader({ isMenuOpen, setIsMenuOpen, scrollToSection }: SiteHeaderProps) {
  return (
    <>
      <header className="fixed top-6 left-6 md:w-auto md:right-auto right-6 z-40 border border-white/10 backdrop-blur-md bg-[#0B0C0F]/80 rounded-[16px]">
        <div className="w-full mx-auto px-6">
          <div className="flex items-center gap-6 md:h-14 h-14">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg md:text-xl font-semibold font-mono hover:text-pink-400 transition-colors duration-300"
            >
              NEXT BUILD
            </button>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors duration-300"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="text-xs rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300 px-5 py-2 font-semibold"
              >
                РАССЧИТАТЬ СТОИМОСТЬ
              </Button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-auto p-2 hover:bg-white/5 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0B0C0F]/95 backdrop-blur-md z-50 flex flex-col items-start justify-end pb-20 pt-20 px-6">
          <div className="flex flex-col gap-8 items-start text-left w-full">
            <button
              onClick={() => scrollToSection("services")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="font-serif text-5xl md:text-7xl font-light text-[#F2F3F5] hover:text-pink-400 transition-colors duration-300"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="text-base rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 px-8 py-4 font-semibold mt-4"
            >
              РАССЧИТАТЬ СТОИМОСТЬ
            </Button>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}
