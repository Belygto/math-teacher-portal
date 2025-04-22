import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

interface Meeting {
  date: string;
  time: string;
  grade: string;
  topic: string;
  location: string;
}

const meetings: Meeting[] = [
  {
    date: "15 сентября 2023",
    time: "18:00",
    grade: "9 «А»",
    topic: "Подготовка к ОГЭ",
    location: "Каб. 204"
  },
  {
    date: "18 сентября 2023",
    time: "18:30",
    grade: "11 «Б»",
    topic: "Стратегия подготовки к ЕГЭ",
    location: "Каб. 304"
  },
  {
    date: "22 сентября 2023",
    time: "19:00",
    grade: "10 «В»",
    topic: "Профильный класс: требования",
    location: "Каб. 210"
  },
  {
    date: "10 октября 2023",
    time: "18:00",
    grade: "9-11 классы",
    topic: "Итоги I четверти",
    location: "Актовый зал"
  }
];

const MeetingsTab = () => {
  return (
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
                {meetings.map((meeting, index) => (
                  <TableRow key={index}>
                    <TableCell>{meeting.date}</TableCell>
                    <TableCell>{meeting.time}</TableCell>
                    <TableCell>{meeting.grade}</TableCell>
                    <TableCell>{meeting.topic}</TableCell>
                    <TableCell>{meeting.location}</TableCell>
                  </TableRow>
                ))}
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
  );
};

export default MeetingsTab;
