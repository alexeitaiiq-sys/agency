import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#121212] z-0" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen scale-105"
          style={{
            backgroundImage: 'url(./images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.2) brightness(0.8) grayscale(0.5)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212]" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.1em] mb-6 font-light uppercase"
          >
            SÉLECTION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl tracking-widest uppercase opacity-80 font-sans font-light"
          >
            Искусство камерных событий
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Вниз</span>
          <div className="w-[1px] h-12 bg-current animate-pulse" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#121212]">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-16 text-[#AFAAA0]">
            Философия
          </h2>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#E2DFD8] font-light">
            <p>
              Мы - бутик-агентство SÉLECTION. Мы не делаем массовые мероприятия. Наша специализация - закрытые ужины, культурные вечера и эксклюзивные презентации для тех, кто ценит эстетику, приватность и безупречный вкус.
            </p>
            <p>
              Каждое наше событие - это тщательно срежиссированный спектакль, где нет случайных деталей. От выбора площадки и гастрономического сопровождения до аромата в зале и текстуры пригласительных билетов.
            </p>
            <p>
              Мы создаем атмосферу, в которой хочется находиться, о которой хочется вспоминать, но о которой знают лишь избранные.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-center mb-20 text-[#AFAAA0]">
            Команда
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[3/4] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">

                  <img 
                    src="./images/founder.jpg" 
                    alt="Основатель агентства" 
                    className="w-full h-full object-cover"
                  />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-full h-full border border-[#E2DFD8]/20 pointer-events-none" />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <h3 className="text-4xl font-serif">Ирина Троянова</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[#AFAAA0]">Основатель & Креативный директор</p>
              
              <div className="space-y-6 text-[#E2DFD8]/80 font-light leading-relaxed">
                <p>
                  "Создавая SÉLECTION, я стремилась уйти от шумных и безликих мероприятий. Мне всегда была ближе концепция 'тихой роскоши' - когда всё безупречно, но не кричит о себе."
                </p>
                <p>
                  За моими плечами более 10 лет работы в премиальном сегменте. Я знаю, как важно для бренда или частного клиента создать правильное впечатление. Мы работаем на стыке искусства, гастрономии и безупречного сервиса, чтобы каждое событие становилось уникальным опытом.
                </p>
                <p>
                  Лично курирую каждый проект, потому что в нашем деле не бывает незначительных мелочей.
                </p>
              </div>
              
              <div className="pt-8">
                <img src="./images/signature.png" alt="Подпись" className="h-12 opacity-60 invert hidden" />
                <div className="font-serif text-3xl italic opacity-60">И.Т.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}