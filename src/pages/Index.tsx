import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Youtube, Instagram, ChevronDown } from "lucide-react"
import Icon from "@/components/ui/icon"
import { AnimatedText } from "@/components/animated-text"

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="text-8xl" ref={ref}>
      {displayValue}
    </div>
  )
}

export default function NextBuildPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [imageFade, setImageFade] = useState(true)
  const [autoRotationKey, setAutoRotationKey] = useState(0)
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0)
  const [wordFade, setWordFade] = useState(true)
  const [dashboardScrollOffset, setDashboardScrollOffset] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    houseType: "",
    budget: "",
    mortgage: "",
  })
  const [subscribeEmail, setSubscribeEmail] = useState("")
  const dashboardRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const dynamicWords = ["дом", "уют", "тепло", "пространство", "гармонию", "надёжность"]

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordFade(false)
      setTimeout(() => {
        setDynamicWordIndex((prev) => (prev + 1) % dynamicWords.length)
        setWordFade(true)
      }, 300)
    }, 3000)

    return () => clearInterval(wordInterval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (dashboardRef.current) {
        const dashboardRect = dashboardRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        const rotationStart = viewportHeight * 0.8
        const rotationEnd = viewportHeight * 0.2

        if (dashboardRect.top >= rotationStart) {
          setDashboardScrollOffset(0)
        } else if (dashboardRect.top <= rotationEnd) {
          setDashboardScrollOffset(15)
        } else {
          const scrollRange = rotationStart - rotationEnd
          const currentProgress = rotationStart - dashboardRect.top
          const rotationProgress = currentProgress / scrollRange
          const tiltAngle = rotationProgress * 15
          setDashboardScrollOffset(tiltAngle)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsLoaded(true)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    const featuresCount = 4

    const interval = setInterval(() => {
      setImageFade(false)
      setTimeout(() => {
        setSelectedFeature((prev) => (prev + 1) % featuresCount)
        setImageFade(true)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoRotationKey])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
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

  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5] overflow-x-hidden">
      {/* HEADER */}
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

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url('/hero-landscape.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('/hero-landscape.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 to-transparent pointer-events-none" />

        <div
          className="max-w-[1120px] w-full mx-auto relative z-10"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-serif text-[44px] leading-[1.1] md:text-[72px] md:leading-[1.05] font-medium mb-6 text-balance">
              <span className="block stagger-reveal text-5xl font-light md:text-6xl">
                Твой дом среди природы
              </span>
              <span
                className={`block stagger-reveal text-7xl font-light transition-all duration-500 md:text-8xl ${
                  wordFade ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                }`}
                style={{ animationDelay: "90ms" }}
              >
                <AnimatedText key={dynamicWordIndex} text={dynamicWords[dynamicWordIndex]} delay={0} />
              </span>
            </h1>
            <p
              className="text-[#A7ABB3] text-base md:text-lg max-w-[580px] mx-auto mb-8 leading-relaxed stagger-reveal text-white"
              style={{ animationDelay: "180ms" }}
            >
              Построим загородный дом вашей мечты «под ключ»: от проекта до отделки. Используем только проверенные материалы, современные технологии и даём гарантию на все этапы работ.
            </p>
            <div className="stagger-reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "270ms" }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="glass-button px-8 py-6 text-base rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white"
              >
                ПОСМОТРЕТЬ ПРОЕКТЫ
              </Button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="px-8 py-6 text-base rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300 font-semibold"
              >
                РАССЧИТАТЬ СТОИМОСТЬ
              </Button>
            </div>
          </div>

          <div className="mt-12 md:mt-20 stagger-reveal" style={{ animationDelay: "360ms" }} ref={dashboardRef}>
            <div style={{ perspective: "1200px" }}>
              <div
                className="relative aspect-[16/10] md:aspect-[16/9] rounded-[24px] overflow-hidden"
                style={{
                  transform: `rotateX(${dashboardScrollOffset}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.05s linear",
                }}
              >
                <img
                  src="/dashboard-screenshot.png"
                  alt="Реализованные проекты NEXT BUILD"
                  className="object-cover dashboard-image w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE - партнёры/банки */}
      <section className="relative py-12 border-y border-white/5 bg-[#0B0C0F] overflow-hidden md:py-8 md:pt-8 md:pb-4">
        <div className="w-full">
          <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-[#A7ABB3] mb-8">
            Работаем с ведущими банками и строительными партнёрами
          </p>
          <div className="logo-marquee">
            <div className="logo-marquee-content">
              {[
                "/logos/frame-11.png",
                "/logos/frame-55.png",
                "/logos/frame-4.png",
                "/logos/frame-6.png",
                "/logos/frame-8.png",
                "/logos/frame-2.png",
                "/logos/frame-3.png",
                "/logos/frame-7.png",
                "/logos/frame-11.png",
                "/logos/frame-55.png",
                "/logos/frame-4.png",
                "/logos/frame-6.png",
                "/logos/frame-8.png",
                "/logos/frame-2.png",
                "/logos/frame-3.png",
                "/logos/frame-7.png",
              ].map((logo, i) => (
                <div key={i} className="px-8 md:px-12 flex items-center justify-center flex-shrink-0">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Логотип партнера ${i + 1}`}
                    className="h-32 md:h-24 w-auto object-contain opacity-60 hover:opacity-60 transition-all duration-300 brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* NARRATIVE / TECHNOLOGIES → Этапы работы */}
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
                    src={
                      [
                        "/drone.png",
                        "/real-time-satellite.png",
                        "/biodiversity-tracking.png",
                        "/deforestation-detect.png",
                      ][selectedFeature] || "/placeholder.svg"
                    }
                    alt="Этапы строительства"
                    className={`w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ${
                      imageFade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {[
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
                ].map((feature, i) => (
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
                {[
                  { title: "Консультация и проект", image: "/drone.png" },
                  { title: "Фундамент и коробка", image: "/real-time-satellite.png" },
                  { title: "Инженерные сети", image: "/biodiversity-tracking.png" },
                  { title: "Чистовая отделка и сдача", image: "/deforestation-detect.png" },
                ].map((feature, i) => {
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

      {/* FOOTER */}
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
    </div>
  )
}