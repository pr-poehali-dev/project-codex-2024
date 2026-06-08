import { useState } from "react"
import Icon from "@/components/ui/icon"

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = { current: null as HTMLDivElement | null }
  const refCallback = (el: HTMLDivElement | null) => {
    if (!el || ref.current) return
    ref.current = el
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numericStr = value.replace(/[^0-9.]/g, "")
          const targetNum = Number.parseFloat(numericStr)
          const unit = value.replace(/[0-9.]/g, "")
          let current = 0
          const increment = targetNum / 60
          const interval = setInterval(() => {
            current += increment
            if (current >= targetNum) {
              setDisplayValue(`${targetNum}${unit}`)
              clearInterval(interval)
            } else {
              setDisplayValue(`${current.toFixed(1)}${unit}`.replace(".0", ""))
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
  }

  return (
    <div className="text-8xl" ref={refCallback}>
      {displayValue}
    </div>
  )
}

const services = [
  {
    icon: "PenTool",
    title: "Индивидуальное проектирование",
    desc: "Разработаем уникальный проект дома с учётом вашего участка, пожеланий и бюджета.",
  },
  {
    icon: "Layers",
    title: "Фундамент «под ключ»",
    desc: "Ленточный, плитный, свайный. Работаем с любыми типами грунта.",
  },
  {
    icon: "Building2",
    title: "Кирпичная и блочная кладка",
    desc: "Газоблок, керамоблок, кирпич. Тёплые и прочные стены.",
  },
  {
    icon: "Home",
    title: "Кровельные работы",
    desc: "Металлочерепица, мягкая кровля, фальцевая система. Монтаж и утепление.",
  },
  {
    icon: "Zap",
    title: "Инженерные сети",
    desc: "Отопление, водоснабжение, канализация, электрика под ключ.",
  },
  {
    icon: "Paintbrush",
    title: "Чистовая отделка",
    desc: "Внутренняя и фасадная. Дизайн-проект в подарок при заказе дома.",
  },
]

const advantages = [
  {
    icon: "FileText",
    title: "Фиксированная смета",
    desc: "Никаких скрытых платежей. Цена не меняется после подписания договора.",
    color: "pink",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    desc: "На все конструкции и инженерные системы. Бесплатно устраняем недостатки.",
    color: "purple",
  },
  {
    icon: "Truck",
    title: "Собственная техника и бригады",
    desc: "Никаких субподрядчиков. Контроль качества на каждом этапе.",
    color: "pink",
  },
  {
    icon: "CreditCard",
    title: "Помощь с ипотекой и маткапиталом",
    desc: "Подберём выгодные программы, поможем с оформлением.",
    color: "purple",
  },
]

export function ServicesAndAdvantages() {
  return (
    <>
      {/* SERVICES */}
      <section id="services" className="relative py-20 md:py-32 px-4 animate-on-scroll md:pt-24 md:pb-20">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              ОСНОВНЫЕ НАПРАВЛЕНИЯ
            </div>
            <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
              Что мы{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                предлагаем
              </span>
            </h2>
            <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
              Полный цикл строительства загородного дома — от идеи до готовых ключей.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col gap-4 bg-white/2"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon name={service.icon} size={20} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-sm text-[#A7ABB3] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors underline underline-offset-4">
              Все услуги →
            </button>
          </div>
        </div>
      </section>

      {/* ADVANTAGES / METRICS */}
      <section id="advantages" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[1120px] w-full mx-auto">
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 md:mb-8 text-center text-balance">
            Почему выбирают{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NEXT BUILD
            </span>
          </h2>

          <p className="text-[#A7ABB3] text-sm md:text-base mb-12 md:mb-16 text-center max-w-[600px] mx-auto leading-relaxed">
            Строим честно, строим качественно. Каждый дом — это наша репутация.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[900px] mx-auto">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={adv.icon}
                    size={22}
                    className={adv.color === "pink" ? "text-pink-400" : "text-purple-400"}
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-2">{adv.title}</h3>
                  <p className="text-sm text-[#A7ABB3] leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/5">
            {[
              { label: "ПОСТРОЕНО ДОМОВ", value: "320+", desc: "с 2012 года", color: "pink" },
              { label: "СРЕДНИЙ РЕЙТИНГ", value: "5.0", desc: "по отзывам клиентов", color: "purple" },
              { label: "ГАРАНТИЯ", value: "5", desc: "лет на все работы", color: "pink" },
              { label: "СРОК СДАЧИ", value: "4", desc: "месяца в среднем", color: "purple" },
            ].map((metric, i) => (
              <div key={i} className="text-center p-6 border border-white/10 border-t-0 border-b border-l-0 border-r-0 md:py-8">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-4 flex items-center justify-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${metric.color === "pink" ? "bg-pink-400/60" : "bg-purple-400/60"}`} />
                  {metric.label}
                </div>
                <div className="font-serif text-[40px] md:text-[56px] leading-none font-medium">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="text-[11px] md:text-xs text-[#A7ABB3] mt-3">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
