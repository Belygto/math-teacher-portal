import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Математика с <span className="text-math-blue">Римой Лыксыковной</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Индивидуальный подход к обучению математике. 
              Подготовка к ЕГЭ, ОГЭ и олимпиадам любого уровня.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-math-blue hover:bg-math-light-blue text-white"
              >
                <Link to="/students">
                  Материалы для учеников
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-math-blue text-math-blue hover:bg-blue-50"
              >
                <Link to="/contacts">
                  Связаться со мной
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <img 
                      src="/placeholder.svg" 
                      alt="Ученик" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="text-math-blue font-bold">120+</span> учеников успешно сдали ЕГЭ и ОГЭ
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="/placeholder.svg" 
                alt="Учитель математики" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center space-x-2 text-white">
                  <span className="math-symbol text-white text-2xl">π</span>
                  <span className="math-symbol text-white text-2xl">∫</span>
                  <span className="math-symbol text-white text-2xl">∞</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg hidden md:block">
              <div className="text-math-orange font-bold text-xl">10+ лет</div>
              <div className="text-gray-600">преподавательского опыта</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
