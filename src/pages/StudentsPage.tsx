import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Download, FileText, Calculator, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentsPage = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  const schedule = [
    { day: "Понедельник", time: "15:00 - 16:30", topic: "Тригонометрические функции", group: "11 класс" },
    { day: "Понедельник", time: "17:00 - 18:30", topic: "Вероятность и статистика", group: "9 класс" },
    { day: "Вторник", time: "15:00 - 16:30", topic: "Подготовка к ЕГЭ", group: "11 класс" },
    { day: "Среда", time: "16:00 - 17:30", topic: "Планиметрия", group: "8 класс" },
    { day: "Четверг", time: "15:00 - 16:30", topic: "Олимпиадные задачи", group: "10 класс" },
    { day: "Пятница", time: "15:00 - 16:30", topic: "Подготовка к ОГЭ", group: "9 класс" },
  ];

  const homeworks = [
    { id: 1, title: "Варианты ЕГЭ №15-17", description: "Задания на тригонометрию", deadline: "20 мая", group: "11 класс" },
    { id: 2, title: "Контрольная работа", description: "Подготовка по теме \"Вероятность\"", deadline: "18 мая", group: "9 класс" },
    { id: 3, title: "Самостоятельная работа", description: "Решение треугольников", deadline: "17 мая", group: "8 класс" },
  ];

  const resources = [
    { title: "Интерактивные тесты по алгебре", type: "тест", link: "#" },
    { title: "Видеоразбор сложных задач ЕГЭ", type: "видео", link: "#" },
    { title: "Справочник формул", type: "файл", link: "#" },
    { title: "Калькулятор корней уравнений", type: "инструмент", link: "#" },
  ];

  // Функция для получения иконки по типу ресурса
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "тест": return <FileText className="h-5 w-5 text-purple-500" />;
      case "видео": return <Video className="h-5 w-5 text-red-500" />;
      case "файл": return <Download className="h-5 w-5 text-blue-500" />;
      case "инструмент": return <Calculator className="h-5 w-5 text-green-500" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-math-blue">Ученикам</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="schedule">Расписание</TabsTrigger>
              <TabsTrigger value="homework">Домашние задания</TabsTrigger>
              <TabsTrigger value="resources">Полезные ресурсы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Расписание занятий</CardTitle>
                  <CardDescription>
                    Актуальное расписание групповых и индивидуальных занятий
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>День</TableHead>
                        <TableHead>Время</TableHead>
                        <TableHead>Тема</TableHead>
                        <TableHead>Группа</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schedule.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.day}</TableCell>
                          <TableCell>{item.time}</TableCell>
                          <TableCell>{item.topic}</TableCell>
                          <TableCell>{item.group}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="homework">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {homeworks.map((homework) => (
                  <Card key={homework.id}>
                    <CardHeader>
                      <CardTitle>{homework.title}</CardTitle>
                      <CardDescription>{homework.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Срок сдачи:</span>
                          <span className="font-medium">{homework.deadline}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Группа:</span>
                          <span className="font-medium">{homework.group}</span>
                        </div>
                        <Button className="mt-4 w-full">
                          <Download className="mr-2 h-4 w-4" /> Скачать материалы
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Полезные ресурсы</CardTitle>
                  <CardDescription>
                    Материалы для самостоятельного изучения и практики
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resources.map((resource, index) => (
                      <a 
                        href={resource.link} 
                        key={index}
                        className="flex items-center p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                      >
                        <div className="mr-4">
                          {getResourceIcon(resource.type)}
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{resource.title}</h3>
                          <p className="text-sm text-gray-500">{resource.type}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Открыть
                        </Button>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium flex items-center text-blue-800">
                      <Check className="mr-2 h-5 w-5 text-blue-500" />
                      Онлайн-тестирование
                    </h3>
                    <p className="mt-2 text-sm text-blue-700">
                      Не забудьте пройти тест по теме "Логарифмы" до конца недели.
                    </p>
                    <Button variant="outline" className="mt-3 text-blue-600 border-blue-200 hover:bg-blue-100">
                      Перейти к тесту
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentsPage;
