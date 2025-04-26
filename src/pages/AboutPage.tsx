import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, GraduationCap, Heart, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="py-12 bg-math-blue text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Обо мне</h1>
            <p className="text-xl">Рима — преподаватель математики с многолетним опытом</p>
          </div>
        </section>
        
        {/* Основной контент */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Фото и контактная информация */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card className="overflow-hidden mb-6">
                    <div className="aspect-square bg-gray-100 relative">
                      <img 
                        src="https://cdn.poehali.dev/files/c2a5f62a-46ee-4dd8-a7b6-634d5fc70c63.jpg" 
                        alt="Рима, преподаватель математики" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Рима</h2>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Стаж:</strong> 15 лет</p>
                        <p><strong>Образование:</strong> Магистр математических наук, МФТИ</p>
                        <p><strong>Специализация:</strong> Подготовка к ОГЭ и ЕГЭ, олимпиадная математика</p>
                      </div>
                      <div className="mt-6">
                        <Button className="w-full">Связаться со мной</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Достижения</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-math-blue flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">Лауреат конкурса "Учитель года" 2022</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-math-blue flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">Автор методических пособий по математике для старшеклассников</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-math-blue flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">Более 200 выпускников, поступивших в ведущие вузы страны</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Основная информация */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="bio" className="w-full">
                  <TabsList className="w-full grid grid-cols-3 mb-8">
                    <TabsTrigger value="bio">Биография</TabsTrigger>
                    <TabsTrigger value="approach">Методика</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bio" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="prose prose-lg max-w-none">
                          <h3 className="text-2xl font-bold mb-4">Мой путь в преподавании</h3>
                          <p>
                            Моя любовь к математике началась еще в школе, где я увлеченно участвовала в олимпиадах и математических кружках. 
                            После окончания МФТИ я решила посвятить себя преподаванию, чтобы передавать свои знания и опыт молодому поколению.
                          </p>
                          <p>
                            За 15 лет преподавательской деятельности я разработала собственную методику обучения математике, которая позволяет даже ученикам с изначально слабой подготовкой достигать высоких результатов.
                          </p>
                          <p>
                            Сегодня я преподаю в математическом лицее №12, готовлю учеников к сдаче государственных экзаменов и участию в математических олимпиадах, а также веду индивидуальные и групповые занятия.
                          </p>
                          
                          <h3 className="text-2xl font-bold mt-8 mb-4">Образование и повышение квалификации</h3>
                          <ul>
                            <li>Московский физико-технический институт, факультет прикладной математики и информатики (2005-2011)</li>
                            <li>Кандидат физико-математических наук (2014)</li>
                            <li>Курсы повышения квалификации "Современные методики преподавания математики в школе" (2018)</li>
                            <li>Сертификация по программе "Подготовка экспертов для работы в региональной предметной комиссии ЕГЭ" (2020)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6">Профессиональный опыт</h3>
                        
                        <div className="space-y-8">
                          <div className="relative pl-8 border-l-2 border-math-blue pb-6">
                            <div className="absolute w-4 h-4 bg-math-blue rounded-full left-[-9px] top-0"></div>
                            <h4 className="text-xl font-semibold">Математический лицей №12</h4>
                            <p className="text-gray-500 mb-3">2015 — по настоящее время</p>
                            <p className="text-gray-700">Преподаватель алгебры и геометрии в старших классах, руководитель математического кружка</p>
                          </div>
                          
                          <div className="relative pl-8 border-l-2 border-math-blue pb-6">
                            <div className="absolute w-4 h-4 bg-math-blue rounded-full left-[-9px] top-0"></div>
                            <h4 className="text-xl font-semibold">Центр подготовки к олимпиадам "Интеллект"</h4>
                            <p className="text-gray-500 mb-3">2012 — 2015</p>
                            <p className="text-gray-700">Ведущий преподаватель, разработчик методических материалов</p>
                          </div>
                          
                          <div className="relative pl-8 border-l-2 border-math-blue">
                            <div className="absolute w-4 h-4 bg-math-blue rounded-full left-[-9px] top-0"></div>
                            <h4 className="text-xl font-semibold">Гимназия №8</h4>
                            <p className="text-gray-500 mb-3">2009 — 2012</p>
                            <p className="text-gray-700">Учитель математики, руководитель школьного научного общества</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="approach" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6">Моя методика преподавания</h3>
                        
                        <div className="prose prose-lg max-w-none">
                          <p>
                            Я твердо убеждена, что математика — это не только формулы и вычисления, но и особый способ мышления, который помогает решать самые разные жизненные задачи. Поэтому в своей работе я стремлюсь не просто научить решать типовые задачи, но и развить математическое мышление, творческий подход и любовь к предмету.
                          </p>
                          
                          <h4 className="text-xl font-semibold mt-6 mb-3">Основные принципы моей работы:</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                          <div className="flex items-start space-x-4">
                            <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                              <GraduationCap className="h-6 w-6 text-math-blue" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Индивидуальный подход</h4>
                              <p className="text-gray-700">Учитываю особенности, интересы и цели каждого ученика, адаптирую методику под его темп обучения</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4">
                            <div className="rounded-full bg-green-100 p-3 flex-shrink-0">
                              <BookOpen className="h-6 w-6 text-math-green" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Глубокое понимание</h4>
                              <p className="text-gray-700">Фокусируюсь не на механическом запоминании, а на понимании концепций и развитии логического мышления</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4">
                            <div className="rounded-full bg-orange-100 p-3 flex-shrink-0">
                              <Heart className="h-6 w-6 text-math-orange" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Мотивация и вдохновение</h4>
                              <p className="text-gray-700">Создаю увлекательную обучающую среду, показываю красоту математики и ее связь с реальным миром</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4">
                            <div className="rounded-full bg-purple-100 p-3 flex-shrink-0">
                              <BookOpen className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-2">Систематизация знаний</h4>
                              <p className="text-gray-700">Помогаю ученикам структурировать материал, видеть связи между разными темами и разделами</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6">Форматы работы</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-semibold mb-4">Групповые занятия</h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Регулярные занятия для 5-11 классов</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Подготовка к ОГЭ и ЕГЭ в мини-группах</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Олимпиадные кружки разного уровня</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Интенсивы по отдельным темам</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-semibold mb-4">Индивидуальные занятия</h4>
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Персональные учебные планы</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Углубленное изучение сложных разделов</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Устранение пробелов в знаниях</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-math-blue font-bold">✓</span>
                                <span>Онлайн-консультации по домашним заданиям</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6">Отзывы учеников и родителей</h3>
                        
                        <div className="space-y-8">
                          <div className="border-l-4 border-math-blue pl-6 py-2">
                            <p className="italic text-gray-700 mb-4">
                              "Рима — потрясающий педагог! Благодаря ее занятиям мой сын из троечника превратился в одного из лучших учеников по математике в классе. Она не только отлично объясняет материал, но и умеет заинтересовать, что особенно важно для подростков."
                            </p>
                            <div>
                              <p className="font-semibold">Елена Петрова</p>
                              <p className="text-gray-500 text-sm">мама ученика 9 класса</p>
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-math-blue pl-6 py-2">
                            <p className="italic text-gray-700 mb-4">
                              "Занимался с Римой при подготовке к ЕГЭ. Результат превзошел все ожидания — 98 баллов! Но главное даже не это, а то, что я действительно стал понимать и любить математику. Сейчас учусь в МФТИ и с благодарностью вспоминаю наши занятия."
                            </p>
                            <div>
                              <p className="font-semibold">Дмитрий Соколов</p>
                              <p className="text-gray-500 text-sm">выпускник 2022 года</p>
                            </div>
                          </div>
                          
                          <div className="border-l-4 border-math-blue pl-6 py-2">
                            <p className="italic text-gray-700 mb-4">
                              "Наша дочь занимается в олимпиадном кружке у Римы уже второй год. Мы очень довольны результатами — призовые места на городских олимпиадах и, что немаловажно, искренний интерес к предмету. Рима умеет найти подход к детям и вдохновить их."
                            </p>
                            <div>
                              <p className="font-semibold">Сергей и Анна Ивановы</p>
                              <p className="text-gray-500 text-sm">родители ученицы 7 класса</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <Button>Оставить отзыв</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-6">Результаты учеников</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <div className="text-4xl font-bold text-math-blue mb-2">100%</div>
                            <p className="text-gray-700">учеников успешно сдают ЕГЭ на 70+ баллов</p>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <div className="text-4xl font-bold text-math-blue mb-2">35+</div>
                            <p className="text-gray-700">призеров региональных олимпиад за последние 5 лет</p>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <div className="text-4xl font-bold text-math-blue mb-2">8</div>
                            <p className="text-gray-700">выпускников поступили в МФТИ и МГУ в 2023 году</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
