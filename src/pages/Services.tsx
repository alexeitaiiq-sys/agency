import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Частные события',
      subtitle: 'Приватность и безупречный вкус',
      description: 'От камерных ужинов в честь годовщины до закрытых празднований в кругу самых близких. Мы берем на себя все заботы — от подбора секретной локации до разработки авторского меню с приглашенным шеф-поваром.',
      image: './images/case1.jpg'
    },
    {
      id: 2,
      title: 'Бренд-ивенты',
      subtitle: 'Презентации для избранных',
      description: 'Помогаем премиальным брендам выстраивать глубокую эмоциональную связь с клиентами. Закрытые показы коллекций, арт-ужины для инфлюенсеров, клиентские дни в формате культурного вечера.',
      image: './images/case3.jpg'
    },
    {
      id: 3,
      title: 'Культурные вечера',
      subtitle: 'Искусство быть в моменте',
      description: 'Организация закрытых лекций об искусстве, архитектуре или вине, музыкальных салонов, поэтических чтений и театрализованных перформансов в атмосферных пространствах.',
      image: './images/case2.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#121212]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.15em] mb-24 text-center">
          Услуги
        </h1>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 relative group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#E2DFD8]" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#E2DFD8]" />
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#E2DFD8]" />
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#E2DFD8]" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                <span className="text-sm font-sans tracking-[0.2em] uppercase text-[#AFAAA0]">
                  0{service.id}.
                </span>
                <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
                  {service.title}
                </h2>
                <h3 className="text-lg font-serif italic text-[#AFAAA0]">
                  {service.subtitle}
                </h3>
                <p className="text-[#E2DFD8]/80 font-light leading-relaxed pt-4">
                  {service.description}
                </p>
                
                <div className="pt-8">
                  <button className="text-xs uppercase tracking-widest border-b border-[#E2DFD8]/30 pb-1 hover:border-[#E2DFD8] transition-colors duration-300">
                    Обсудить проект
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}