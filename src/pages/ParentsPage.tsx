import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  BookOpen, 
  FileText, 
  Phone, 
  Mail, 
  MessageSquare
} from "lucide-react";

const ParentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Для родителей</h1>
            <p className="text-xl text-gray-600">Информация, рекомендации и график консультаций</p>
          </div>
          
          <Tabs defaultValue="meetings" className="mb-12">
            <TabsList className="mb-6">
              <TabsTrigger value="meetings">Родительские собрания</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
              <TabsTrigger value="consultations">Консультации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="meetings">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-math-blue" />
                        График родительских собраний
                      </CardTitle>
                      <CardDescription>
                        Расписание всех запланированных родительских собраний на текущий учебный год
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Дата</TableHead>
                            <TableHead>Время</TableHead>
                            <TableHead>Класс</TableHead>
                            <TableHead>Тема</TableHead>
                            <TableHead>Место</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>15 сентября 2023</TableCell>
                            <TableCell>18:00</TableCell>
                            <TableCell>9 «А»</TableCell>
                            <TableCell>Подготовка к ОГЭ</TableCell>
                            <TableCell>Каб. 204</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>18 сентября 2023</TableCell>
                            <TableCell>18:30</TableCell>
                            <TableCell>11 «Б»</TableCell>
                            <TableCell>Стратегия подготовки к ЕГЭ</TableCell>
                            <TableCell>Каб. 304</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>22 сентября 2023</TableCell>
                            <TableCell>19:00</TableCell>
                            <TableCell>10 «В»</TableCell>
                            <TableCell>Профильный класс: требования</TableCell>
                            <TableCell>Каб. 210</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10 октября 2023</TableCell>
                            <TableCell>18:00</TableCell>
                            <TableCell>9-11 классы</TableCell>
                            <TableCell>Итоги I четверти</TableCell>
                            <TableCell>Актовый зал</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="bg-math-blue text-white h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>Важное объявление</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4">
                        Уважаемые родители! Напоминаю, что 10 октября состоится общее собрание по итогам I четверти.
                      </p>
                      <p className="mb-4">
                        Будут обсуждаться результаты контрольных работ и планы на II четверть.
                      </p>
                      <p>
                        Прошу всех присутствовать. При невозможности участия сообщите заранее.
                      </p>
                    </CardContent>
                    <div className="p-6 mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white/10"
                      >
                        Подтвердить участие
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-math-blue" />
                      Подготовка к ЕГЭ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-math-blue font-bold mr-2">1.</span>
                        <span>Составьте с ребенком план подготовки, разбив материал на небольшие блоки</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-math-blue font-bold mr-2">2.</span>
                        <span>Помогите организовать регулярные занятия (минимум 3 раза в неделю)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-math-blue font-bold mr-2">3.</span>
                        <span>Контролируйте выполнение домашних заданий и разбор сложных тем</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-math-blue font-bold mr-2">4.</span>
                        <span>Обеспечьте комфортное рабочее место с минимумом отвлекающих факторов</span>
                      </li>
                    </ul>
                    <Button className="mt-4 w-full">Скачать подробную памятку</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-math-blue" />
                      Рекомендуемая литература
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b">
                        <div className="font-semibold">ЕГЭ 2024. Математика. Профильный уровень</div>
                        <div className="text-sm text-gray-600">И.В. Ященко, 36 вариантов</div>
                      </li>
                      <li className="pb-3 border-b">
                        <div className="font-semibold">Математика. Подготовка к ЕГЭ</div>
                        <div className="text-sm text-gray-600">С.А. Шестаков, под ред. Семенова А.Л.</div>
                      </li>
                      <li className="pb-3 border-b">
                        <div className="font-semibold">ЕГЭ. Математика. Геометрия. Планиметрия</div>
                        <div className="text-sm text-gray-600">Ю.В. Садовничий</div>
                      </li>
                      <li>
                        <div className="font-semibold">Задачи с параметрами</div>
                        <div className="text-sm text-gray-600">В.В. Локоть</div>
                      </li>
                    </ul>
                    <Button variant="outline" className="mt-4 w-full">Полный список литературы</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-math-blue" />
                      Психологическая поддержка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">
                      Экзамены — это стресс не только для детей, но и для родителей. Важно поддерживать 
                      спокойную и доброжелательную атмосферу дома.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Рекомендации психолога:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Не нагнетайте обстановку разговорами о сложности экзамена</li>
                        <li>Обеспечьте полноценное питание и режим дня</li>
                        <li>Поощряйте физическую активность и отдых</li>
                        <li>Выражайте уверенность в возможностях ребенка</li>
                      </ul>
                    </div>
                    
                    <Button variant="secondary" className="w-full">Записаться на консультацию к психологу</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="consultations">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>График индивидуальных консультаций</CardTitle>
                      <CardDescription>
                        Вы можете записаться на индивидуальную консультацию в удобное для вас время
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>День недели</TableHead>
                            <TableHead>Время</TableHead>
                            <TableHead>Статус</TableHead>
                            <TableHead className="text-right">Действие</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Понедельник</TableCell>
                            <TableCell>15:00 - 16:00</TableCell>
                            <TableCell className="text-green-600">Доступно</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm">Записаться</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Вторник</TableCell>
                            <TableCell>16:30 - 17:30</TableCell>
                            <TableCell className="text-red-500">Занято</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" disabled>Записаться</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Среда</TableCell>
                            <TableCell>14:00 - 15:00</TableCell>
                            <TableCell className="text-green-600">Доступно</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm">Записаться</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Четверг</TableCell>
                            <TableCell>17:00 - 18:00</TableCell>
                            <TableCell className="text-green-600">Доступно</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm">Записаться</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Пятница</TableCell>
                            <TableCell>15:30 - 16:30</TableCell>
                            <TableCell className="text-red-500">Занято</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" disabled>Записаться</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Связаться со мной</CardTitle>
                      <CardDescription>
                        Вы также можете связаться со мной напрямую
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-math-blue" />
                        <div>
                          <div className="font-medium">Телефон</div>
                          <div className="text-sm text-gray-600">+7 (999) 123-45-67</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-math-blue" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-gray-600">math-teacher@example.com</div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full">Написать в Telegram</Button>
                      </div>
                      
                      <div className="pt-2">
                        <Button variant="outline" className="w-full">Написать в WhatsApp</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6 bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-base">Обратите внимание</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Для более эффективной консультации, пожалуйста, заранее подготовьте вопросы и сообщите 
                        о конкретных темах, которые требуют обсуждения. Это поможет сделать нашу встречу максимально полезной.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ParentsPage;
