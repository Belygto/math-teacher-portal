import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email адрес" }),
  subject: z.string().min(1, { message: "Выберите тему обращения" }),
  message: z.string().min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // Имитация отправки формы
    setTimeout(() => {
      console.log(data);
      toast({
        title: "Сообщение отправлено",
        description: "Благодарим за обращение! Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5 text-math-blue" />,
      title: "Адрес",
      details: "ул. Примерная, 123, Город, 123456",
      link: "https://maps.google.com/?q=123+Example+St",
    },
    {
      icon: <Phone className="h-5 w-5 text-math-blue" />,
      title: "Телефон",
      details: "+7 (900) 123-45-67",
      link: "tel:+79001234567",
    },
    {
      icon: <Mail className="h-5 w-5 text-math-blue" />,
      title: "Email",
      details: "rima@math-teacher.ru",
      link: "mailto:rima@math-teacher.ru",
    },
    {
      icon: <Clock className="h-5 w-5 text-math-blue" />,
      title: "Рабочие часы",
      details: "Пн-Пт: 9:00 - 18:00",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Есть вопросы о преподавании математики? Хотите записаться на занятия или родительскую консультацию? 
              Свяжитесь со мной любым удобным способом!
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Контактная информация */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6">Контактная информация</h2>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-3 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-math-blue hover:underline"
                            target={item.link.startsWith('http') ? "_blank" : undefined}
                            rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-gray-800 mb-3">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-math-blue"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-math-blue"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-math-blue"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-math-blue"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Форма обратной связи */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold mb-6">Напишите мне</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                              <Input placeholder="Ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Тема</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите тему обращения" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="individual">Индивидуальные занятия</SelectItem>
                              <SelectItem value="group">Групповые занятия</SelectItem>
                              <SelectItem value="exam">Подготовка к экзаменам</SelectItem>
                              <SelectItem value="consultation">Консультация</SelectItem>
                              <SelectItem value="other">Другое</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Сообщение</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ваше сообщение..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-math-blue hover:bg-math-light-blue" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Отправка...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Отправить сообщение
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="h-[400px] bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
              <MapPin className="h-8 w-8 text-math-blue mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Место проведения занятий</h3>
              <p className="text-gray-600 mb-4">ул. Примерная, 123, Город</p>
              <Button variant="outline" className="border-math-blue text-math-blue hover:bg-math-blue hover:text-white">
                Открыть на Google Maps
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
