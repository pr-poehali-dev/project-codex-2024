import { useState } from "react"
import { Youtube, Instagram } from "lucide-react"

export function SiteFooter() {
  const [subscribeEmail, setSubscribeEmail] = useState("")

  return (
    <footer className="relative px-4 border-t border-white/5 py-8">
      <div className="max-w-[1120px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold font-mono">NEXT BUILD</div>
            <p className="text-xs text-[#A7ABB3] leading-relaxed">
              Строительство загородных домов «под ключ». Качество, гарантия, честная смета.
            </p>
            <div className="text-xs text-[#A7ABB3] flex flex-col gap-1 mt-1">
              <a href="tel:+74958343838" className="hover:text-[#F2F3F5] transition-colors">+7 (495) 834-38-38</a>
              <a href="tel:88005553838" className="hover:text-[#F2F3F5] transition-colors">8-800-555-38-38 (бесплатно)</a>
              <a href="mailto:hello@nextbuild.ru" className="hover:text-[#F2F3F5] transition-colors">hello@nextbuild.ru</a>
              <span>г. Москва, ул. Строительная, д. 12</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors" aria-label="Telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors" aria-label="VK">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Навигация</div>
            <div className="flex flex-col gap-3">
              {["Главная", "Проекты", "Услуги", "О компании", "Отзывы", "Контакты"].map((item) => (
                <a key={item} href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Услуги</div>
            <div className="flex flex-col gap-3">
              {["Проектирование", "Фундамент", "Кладка стен", "Кровля", "Инженерные сети", "Отделка"].map((item) => (
                <a key={item} href="#" className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase tracking-[0.15em] text-[#F2F3F5] font-semibold mb-2">Рассылка</div>
            <p className="text-xs text-[#A7ABB3] mb-3">Подпишитесь и получите скидку 5% на проект дома.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Введите email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
              />
              <button className="px-4 py-2 border rounded-lg text-xs font-medium hover:bg-pink-500/30 hover:border-pink-500/50 transition-all bg-pink-900/30 border-pink-800/50 text-white">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A7ABB3]">
          <div>2025 NEXT BUILD. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F2F3F5] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-[#F2F3F5] transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
