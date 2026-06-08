import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

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

interface FormData {
  name: string
  phone: string
  email: string
  houseType: string
  budget: string
  mortgage: string
}

interface ReviewsFaqCtaProps {
  openFaqIndex: number | null
  setOpenFaqIndex: (i: number | null) => void
  formData: FormData
  setFormData: (data: FormData) => void
}

export function ReviewsFaqCta({
  openFaqIndex,
  setOpenFaqIndex,
  formData,
  setFormData,
}: ReviewsFaqCtaProps) {
  return (
    <>
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
