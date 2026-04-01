import { motion } from 'framer-motion';

export default function Cases() {
  const cases = [
    {
      id: "c1",
      category: "Бренд-ивент",
      client: "PARFUMS DE Troyanove Irina",
      title: "Презентация нового аромата в особняке XIX века",
      desc: "Закрытый ужин на 25 человек. Гости дегустировали блюда, ингредиенты которых отсылали к нотам нового парфюма. Пространство было декорировано дикими цветами и свечами, играл живой струнный квартет.",
      img: "./images/case1.jpg",
      year: "2026"
    },
    {
      id: "c2",
      category: "Частное событие",
      client: "Частный клиент",
      title: "Ужин в честь годовщины в стиле 'Великого Гэтсби'",
      desc: "Вместо кричащего декора мы выбрали эстетику тихой роскоши 1920-х. 15 гостей, секретный бар, авторские коктейли и джаз-бенд из Нью-Йорка, который играл только для этой компании.",
      img: "./images/case2.jpg",
      year: "2023"
    },
    {
      id: "c3",
      category: "Культурный вечер",
      client: "Клуб коллекционеров",
      title: "Ночь в галерее современного искусства",
      desc: "Закрытая лекция искусствоведа с последующим ужином прямо среди экспонатов. Специально выставленный свет выхватывал из темноты только картины и столы гостей.",
      img: "./images/case3.jpg",
      year: "2021"
    }
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#121212]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-[#E2DFD8]/20 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.15em] text-center md:text-left">
            Кейсы
          </h1>
          <p className="text-sm tracking-widest uppercase text-[#AFAAA0] max-w-sm text-center md:text-right">
            Мы работаем с теми, кто ценит смысл больше, чем масштаб.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {cases.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8 relative bg-[#1A1A1A]">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 text-[#E2DFD8]">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#AFAAA0] block border-t border-[#E2DFD8]/10 pt-4">
                  {project.client}
                </span>
                <h3 className="text-xl md:text-2xl font-serif leading-snug group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[#E2DFD8]/60 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}