import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, Mail } from "lucide-react";

interface ConsultationSlot {
  day: string;
  time: string;
  isAvailable: boolean;
}

const consultationSlots: ConsultationSlot[] = [
  { day: "Понедельник", time: "15:00 - 16:00", isAvailable: true },
  { day: "Вторник", time: "16:30 - 17:30", isAvailable: false },
  { day: "Среда", time: "14:00 - 15:00", isAvailable: true },
  { day: "Четверг", time: "17:00 - 18:00", isAvailable: true },
  { day: "Пятница", time: "15:30 - 16:30", isAvailable: false }
];

const ConsultationsTab = () => {
  return (
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
                {consultationSlots.map((slot, index) => (
                  <TableRow key={index}>
                    <TableCell>{slot.day}</TableCell>
                    <TableCell>{slot.time}</TableCell>
                    <TableCell className={slot.isAvailable ? "text-green-600" : "text-red-500"}>
                      {slot.isAvailable ? "Доступно" : "Занято"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" disabled={!slot.isAvailable}>Записаться</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-2">
        <ContactCard />
        <NoticeCard />
      </div>
    </div>
  );
};

const ContactCard = () => {
  return (
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
  );
};

const NoticeCard = () => {
  return (
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
  );
};

export default ConsultationsTab;
