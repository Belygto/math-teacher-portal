import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CalendarClock, 
  FileText, 
  Globe, 
  Book, 
  Clock 
} from "lucide-react";

const Index = () => {
  // Текущая дата для счетчика до ЕГЭ
  const currentDate = new Date();
  const examDate = new Date(currentDate.getFullYear(), 5, 1); // 1 июня текущего года
  if (examDate < currentDate) {
    examDate.setFullYear(examDate.getFullYear() + 1);
  }
  const daysLeft = Math.floor((examDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        
        {/* Последние новости */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Последние новости</h2>
              <Button asChild variant="outline">
                <Link to="/blog">Все новости</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Новость" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarClock size={16} className="mr-1" />
                      <span>15 сентября 2023</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Результаты вступительных экзаменов</h3>
                    <p className="text-gray-600 mb-4">
                      Поздравляю всех учеников, успешно поступивших в профильные математические классы!
                    </p>
                    <Button asChild variant="link" className="px-0 text-math-blue">
                      <Link to="/blog/1">Читать далее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ресурсы и материалы */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Полезные ресурсы</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-math-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Учебные материалы</h3>
                  <p className="text-gray-600 mb-3">Подборка заданий и теоретических материалов для самостоятельной подготовки.</p>
                  <Button asChild variant="link" className="px-0 text-math-blue">
                    <Link to="/students">Перейти к материалам</Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-orange-100 p-3 flex-shrink-0">
                  <Globe className="h-6 w-6 text-math-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Онлайн-тесты</h3>
                  <p className="text-gray-600 mb-3">Интерактивные тесты для проверки знаний и подготовки к контрольным работам.</p>
                  <Button asChild variant="link" className="px-0 text-math-blue">
                    <Link to="/students">Пройти тестирование</Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-green-100 p-3 flex-shrink-0">
                  <Book className="h-6 w-6 text-math-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Рекомендации родителям</h3>
                  <p className="text-gray-600 mb-3">Советы по организации учебного процесса и поддержке детей во время подготовки.</p>
                  <Button asChild variant="link" className="px-0 text-math-blue">
                    <Link to="/parents">Читать рекомендации</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Счетчик до ЕГЭ */}
        <section className="py-12 bg-math-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Clock className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Обратный отсчет до ЕГЭ по математике</h2>
            </div>
            <div className="text-5xl font-bold mb-6">{daysLeft} дней</div>
            <Button 
              asChild
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link to="/students">
                Материалы для подготовки
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
