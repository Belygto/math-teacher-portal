import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, MessageSquare } from "lucide-react";

interface RecommendItem {
  id: number;
  text: string;
}

const examPrepRecommendations: RecommendItem[] = [
  { id: 1, text: "Составьте с ребенком план подготовки, разбив материал на небольшие блоки" },
  { id: 2, text: "Помогите организовать регулярные занятия (минимум 3 раза в неделю)" },
  { id: 3, text: "Контролируйте выполнение домашних заданий и разбор сложных тем" },
  { id: 4, text: "Обеспечьте комфортное рабочее место с минимумом отвлекающих факторов" }
];

interface BookItem {
  title: string;
  author: string;
}

const recommendedBooks: BookItem[] = [
  { title: "ЕГЭ 2024. Математика. Профильный уровень", author: "И.В. Ященко, 36 вариантов" },
  { title: "Математика. Подготовка к ЕГЭ", author: "С.А. Шестаков, под ред. Семенова А.Л." },
  { title: "ЕГЭ. Математика. Геометрия. Планиметрия", author: "Ю.В. Садовничий" },
  { title: "Задачи с параметрами", author: "В.В. Локоть" }
];

interface PsychTip {
  text: string;
}

const psychologicalTips: PsychTip[] = [
  { text: "Не нагнетайте обстановку разговорами о сложности экзамена" },
  { text: "Обеспечьте полноценное питание и режим дня" },
  { text: "Поощряйте физическую активность и отдых" },
  { text: "Выражайте уверенность в возможностях ребенка" }
];

const RecommendationsTab = () => {
  return (
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
            {examPrepRecommendations.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="text-math-blue font-bold mr-2">{item.id}.</span>
                <span>{item.text}</span>
              </li>
            ))}
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
            {recommendedBooks.map((book, index) => (
              <li key={index} className={index < recommendedBooks.length - 1 ? "pb-3 border-b" : ""}>
                <div className="font-semibold">{book.title}</div>
                <div className="text-sm text-gray-600">{book.author}</div>
              </li>
            ))}
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
              {psychologicalTips.map((tip, index) => (
                <li key={index}>{tip.text}</li>
              ))}
            </ul>
          </div>
          
          <Button variant="secondary" className="w-full">Записаться на консультацию к психологу</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationsTab;
