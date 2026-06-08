import Icon from "@/components/ui/icon"

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

interface ProjectsAndProcessProps {
  selectedFeature: number
  setSelectedFeature: (i: number) => void
  imageFade: boolean
  setImageFade: (v: boolean) => void
  setAutoRotationKey: (fn: (prev: number) => number) => void
}

export function ProjectsAndProcess({
  selectedFeature,
  setSelectedFeature,
  imageFade,
  setImageFade,
  setAutoRotationKey,
}: ProjectsAndProcessProps) {
  return (
    <>
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
    </>
  )
}
