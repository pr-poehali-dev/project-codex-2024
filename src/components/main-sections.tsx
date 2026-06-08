import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
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

interface MainSectionsProps {
  selectedFeature: number
  setSelectedFeature: (i: number) => void
  imageFade: boolean
  setImageFade: (v: boolean) => void
  setAutoRotationKey: (fn: (prev: number) => number) => void
  openFaqIndex: number | null
  setOpenFaqIndex: (i: number | null) => void
  formData: {
    name: string
    phone: string
    email: string
    houseType: string
    budget: string
    mortgage: string
  }
  setFormData: (data: MainSectionsProps["formData"]) => void
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

const projects = [
  {
    name: "Дом «Скандинавия»",
    area: "120 м²",
    material: "газоблок, плоская кровля, панорамные окна",
    price: "3 900 000 ₽",
    promo: "Ландшафтный дизайн в подарок",
    color: "pink",
  },
  {
    name: "Дом «Шале»",
    area: "150 м²",
    material: "брус + кирпич, двускатная крыша, терраса",
    price: "5 400 000 ₽",
    promo: "Скидка 10% на отделку",
    color: "purple",
  },
  {
    name: "Дом «Хай-тек»",
    area: "180 м²",
    material: "монолит+утеплитель, плоская эксплуатируемая кровля",
    price: "7 200 000 ₽",
    promo: "Проект в подарок",
    color: "pink",
  },
]

const reviews = [
  {
    name: "Алексей",
    city: "г. Москва",
    text: "Заказал строительство дома «Шале» в Next Build. Сделали под ключ за 4 месяца, как и обещали. Смета не выросла ни на рубль. Качество кладки и кровли — отличное. Рекомендую!",
  },
  {
    name: "Виктория",
    city: "г. Санкт-Петербург",
    text: "Были сомнения, но Next Build построили нам дом по индивидуальному проекту. Постоянный контроль прораба, фотоотчёт каждый день. Отделка идеальная. Уже год живём — никаких нареканий.",
  },
  {
    name: "Михаил",
    city: "г. Казань",
    text: "Брал фундамент и коробку под ключ. Работы выполнены быстро, бригада вежливая. После зимы никаких трещин. Планирую заказывать у них же отделку.",
  },
]

const faqItems = [
  {
    question: "Сколько времени занимает строительство дома?",
    answer:
      "Сроки зависят от площади и сложности проекта. Дом площадью 100–150 м² под ключ строится в среднем за 3–5 месяцев. Мы фиксируем сроки в договоре и несём ответственность за их соблюдение.",
  },
  {
    question: "Вы работаете по всей России или только в Московском регионе?",
    answer:
      "Основная зона работы — Москва и Московская область в радиусе 150 км. По запросу выезжаем в другие регионы — уточните у менеджера при расчёте стоимости.",
  },
  {
    question: "Можно ли построить дом в ипотеку или с использованием маткапитала?",
    answer:
      "Да, мы помогаем оформить ипотеку на строительство и использовать материнский капитал. Наши специалисты подберут выгодную программу и сопроводят весь процесс оформления.",
  },
  {
    question: "Что входит в строительство «под ключ»?",
    answer:
      "«Под ключ» включает: разработку проекта, фундамент, возведение стен, кровлю, монтаж инженерных сетей (отопление, водоснабжение, канализация, электрика) и чистовую отделку. Вы получаете готовый дом — заезжайте и живите.",
  },
  {
    question: "Изменится ли цена в процессе строительства?",
    answer:
      "Нет. После подписания договора стоимость фиксируется и не меняется. Все работы и материалы прописываются в смете заранее — никаких скрытых платежей и доплат.",
  },
  {
    question: "Какая гарантия предоставляется на построенный дом?",
    answer:
      "Мы даём гарантию 5 лет на все конструктивные элементы и инженерные системы. При обнаружении недостатков по нашей вине — устраняем бесплатно в кратчайшие сроки.",
  },
]

const narrativeFeatures = [
  {
    title: "Консультация и проект",
    desc: "Выезд замерщика, расчёт сметы, разработка индивидуального проекта",
    iconName: "ClipboardList",
    image: "/drone.png",
  },
  {
    title: "Фундамент и коробка",
    desc: "Закладываем фундамент, возводим стены и кровлю по проекту",
    iconName: "Layers",
    image: "/real-time-satellite.png",
  },
  {
    title: "Инженерные сети",
    desc: "Монтаж отопления, электрики, водоснабжения и канализации",
    iconName: "Zap",
    image: "/biodiversity-tracking.png",
  },
  {
    title: "Чистовая отделка и сдача",
    desc: "Финишные работы, приёмка, передача ключей и гарантийный документ",
    iconName: "KeyRound",
    image: "/deforestation-detect.png",
  },
]

export function MainSections({
  selectedFeature,
  setSelectedFeature,
  imageFade,
  setImageFade,
  setAutoRotationKey,
  openFaqIndex,
  setOpenFaqIndex,
  formData,
  setFormData,
}: MainSectionsProps) {
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

      {/* PROJECTS */}
      <section id="projects" className="relative py-20 md:py-32 px-4 animate-on-scroll bg-[#0B0C0F]">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              ПОРТФОЛИО
            </div>
            <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
              Наши реализованные{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                проекты
              </span>
            </h2>
            <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
              Каждый дом — результат командной работы, честного договора и гордости за результат.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs px-3 py-1 rounded-full border ${project.color === "pink" ? "border-pink-400/30 text-pink-300 bg-pink-400/10" : "border-purple-400/30 text-purple-300 bg-purple-400/10"}`}>
                      {project.promo}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <p className="text-sm text-[#A7ABB3]">{project.area} — {project.material}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold">{project.price}</span>
                    <button className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="text-sm text-[#A7ABB3] hover:text-[#F2F3F5] transition-colors underline underline-offset-4">
              Смотреть все 20+ проектов →
            </button>
          </div>
        </div>
      </section>

      {/* NARRATIVE / Этапы работы */}
      <section id="narrative" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            <div className="max-w-[720px]">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                КАК МЫ РАБОТАЕМ
              </div>
              <h2 className="font-serif text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-medium mb-8 text-balance">
                Каждый этап{" "}
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  под контролем
                </span>
              </h2>
              <p className="text-[#A7ABB3] text-base md:text-lg leading-relaxed mb-12">
                От первой встречи до передачи ключей — каждый шаг зафиксирован в договоре. Вы видите прогресс: фотоотчёт, видео со стройки и личный менеджер на связи 24/7.
              </p>

              <div className="md:hidden mb-8">
                <div className="rounded-[24px] p-1 w-full aspect-square overflow-hidden">
                  <img
                    src={narrativeFeatures[selectedFeature]?.image || "/placeholder.svg"}
                    alt="Этапы строительства"
                    className={`w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ${
                      imageFade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {narrativeFeatures.map((feature, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setImageFade(false)
                      setTimeout(() => {
                        setSelectedFeature(i)
                        setImageFade(true)
                        setAutoRotationKey((prev) => prev + 1)
                      }, 300)
                    }}
                    className={`relative w-full text-left flex gap-4 items-start p-5 transition-all duration-300 rounded-xs py-4 overflow-hidden ${
                      selectedFeature === i ? "border border-white/20" : "border border-white/10"
                    }`}
                  >
                    <Icon
                      name={feature.iconName}
                      size={24}
                      className={`flex-shrink-0 mt-1 transition-colors ${
                        selectedFeature === i ? "text-pink-400" : "text-pink-500/60"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm md:text-base text-[#A7ABB3]">{feature.desc}</p>
                    </div>
                    {selectedFeature === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <div className="h-full bg-white progress-bar" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                {narrativeFeatures.map((feature, i) => {
                  const positionInStack = (i - selectedFeature + 4) % 4
                  const isActive = positionInStack === 0

                  return (
                    <div
                      key={i}
                      className="absolute inset-0 p-1 transition-all duration-600 ease-out"
                      style={{
                        zIndex: 4 - positionInStack,
                        transform: `translateX(${positionInStack * 16}px) scale(${1 - positionInStack * 0.02})`,
                        opacity: isActive ? (imageFade ? 1 : 1) : 0.6 - positionInStack * 0.15,
                      }}
                    >
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-20 md:py-32 px-4 animate-on-scroll bg-[#0B0C0F]">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              ОТЗЫВЫ КЛИЕНТОВ
            </div>
            <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-4 text-balance">
              Наши клиенты{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                говорят
              </span>
            </h2>
            <p className="text-[#A7ABB3] text-sm md:text-base">Средний рейтинг 5.0 ★</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-1 text-yellow-400 text-sm">★★★★★</div>
                <p className="text-sm text-[#A7ABB3] leading-relaxed flex-1">«{review.text}»</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{review.name}</div>
                    <div className="text-xs text-[#A7ABB3]">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[800px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              ЧАСТЫЕ ВОПРОСЫ
            </div>
            <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
              Есть{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                вопросы
              </span>
              ?
            </h2>
            <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
              Всё, что нужно знать о строительстве загородного дома с NEXT BUILD.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#A7ABB3] transition-transform duration-300 ${
                      openFaqIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm md:text-base text-[#A7ABB3] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section
        id="cta"
        className="relative py-24 md:py-32 px-4 animate-on-scroll overflow-hidden"
        style={{
          backgroundImage: `url('/earth-cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0F] via-[#0B0C0F]/70 to-[#0B0C0F] pointer-events-none" />
        <div className="max-w-[800px] w-full mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-8 text-xs md:text-sm text-[#A7ABB3]">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Бесплатная консультация
            </div>

            <h2 className="font-serif text-[40px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-medium mb-6 text-balance">
              Остались вопросы? Хотите точную смету?
            </h2>
            <p className="text-[#A7ABB3] text-base md:text-lg mb-4 leading-relaxed max-w-[560px] mx-auto">
              Оставьте заявку — менеджер свяжется в течение 15 минут.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm bg-white/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Александр"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Электронная почта</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Тип дома</label>
                <select
                  value={formData.houseType}
                  onChange={(e) => setFormData({ ...formData, houseType: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all appearance-none"
                >
                  <option value="" className="bg-[#0B0C0F]">Выберите тип</option>
                  <option value="one" className="bg-[#0B0C0F]">Одноэтажный</option>
                  <option value="two" className="bg-[#0B0C0F]">Двухэтажный</option>
                  <option value="attic" className="bg-[#0B0C0F]">С мансардой</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Планируемый бюджет</label>
                <input
                  type="text"
                  placeholder="Например: 4 000 000 ₽"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] placeholder-[#A7ABB3] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#A7ABB3] uppercase tracking-wider">Нужна ипотека?</label>
                <select
                  value={formData.mortgage}
                  onChange={(e) => setFormData({ ...formData, mortgage: e.target.value })}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-[#F2F3F5] focus:outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/20 transition-all appearance-none"
                >
                  <option value="" className="bg-[#0B0C0F]">Выберите</option>
                  <option value="yes" className="bg-[#0B0C0F]">Да</option>
                  <option value="no" className="bg-[#0B0C0F]">Нет</option>
                </select>
              </div>
            </div>

            <Button className="w-full py-6 text-base rounded-xl bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300 font-semibold mt-2">
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
            <p className="text-xs text-[#A7ABB3] text-center mt-4 leading-relaxed">
              *Менеджер свяжется с вами в течение 15 минут, поможет подобрать проект, рассчитает материалы и согласует выезд замерщика.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
