import { BookOpen, Award, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-math-blue" />,
    title: "Подготовка к экзаменам",
    description: "Эффективная подготовка к ЕГЭ и ОГЭ с учетом последних требований и спецификаций."
  },
  {
    icon: <Award className="h-10 w-10 text-math-orange" />,
    title: "Олимпиадная математика",
    description: "Специальные программы для подготовки к математическим олимпиадам всех уровней."
  },
  {
    icon: <Calendar className="h-10 w-10 text-math-green" />,
    title: "Гибкое расписание",
    description: "Индивидуальное расписание занятий, адаптированное под возможности ученика."
  },
  {
    icon: <Users className="h-10 w-10 text-math-blue" />,
    title: "Индивидуальный подход",
    description: "Разработка персональной программы обучения с учетом уровня знаний и целей."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Чем я могу помочь?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мой многолетний опыт преподавания позволяет найти подход к каждому ученику и достичь высоких результатов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
