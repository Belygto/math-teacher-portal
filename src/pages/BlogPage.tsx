import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Search, Tag, User } from "lucide-react";

// Типы данных
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

interface Category {
  name: string;
  count: number;
}

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Категории
  const categories: Category[] = [
    { name: "Методика", count: 12 },
    { name: "ЕГЭ и ОГЭ", count: 8 },
    { name: "Олимпиады", count: 5 },
    { name: "Интересные задачи", count: 7 },
    { name: "Образование", count: 4 }
  ];
  
  // Популярные теги
  const popularTags = ["алгебра", "геометрия", "функции", "ЕГЭ", "тригонометрия", "олимпиады", "логика"];
  
  // Данные блога
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Как эффективно готовиться к ЕГЭ по математике: стратегия на 100 баллов",
      excerpt: "Разбор подхода к подготовке, который помогает моим ученикам стабильно получать высокие баллы на экзамене.",
      date: "15 апреля 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "ЕГЭ и ОГЭ",
      tags: ["подготовка", "ЕГЭ", "стратегия"]
    },
    {
      id: 2,
      title: "5 сложных задач по стереометрии с решениями",
      excerpt: "Разбор нестандартных геометрических задач, которые часто вызывают трудности у школьников.",
      date: "8 апреля 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Интересные задачи",
      tags: ["геометрия", "стереометрия", "задачи"]
    },
    {
      id: 3,
      title: "Результаты весенней математической олимпиады",
      excerpt: "Поздравляю всех участников и призеров! Разбор особенно интересных задач из олимпиады.",
      date: "29 марта 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Олимпиады",
      tags: ["олимпиады", "результаты", "разбор"]
    },
    {
      id: 4,
      title: "Методика преподавания тригонометрии в старших классах",
      excerpt: "Делюсь опытом преподавания одного из самых сложных разделов математики для понимания школьниками.",
      date: "20 марта 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Методика",
      tags: ["тригонометрия", "методика", "педагогика"]
    },
    {
      id: 5,
      title: "Как увлечь ребенка математикой: советы родителям",
      excerpt: "Рекомендации, которые помогут родителям развить у детей интерес к точным наукам с раннего возраста.",
      date: "12 марта 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Образование",
      tags: ["родителям", "мотивация", "развитие"]
    },
    {
      id: 6,
      title: "Ментальная арифметика: за и против",
      excerpt: "Анализ популярной методики и ее влияния на математические способности учеников.",
      date: "5 марта 2025",
      author: "Рима",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Методика",
      tags: ["ментальная арифметика", "методика", "анализ"]
    }
  ];
  
  // Фильтрация постов по поисковому запросу
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Обработчик поиска
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Можно добавить дополнительную логику поиска, если нужно
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Блог учителя математики</h1>
          <p className="text-gray-600 mb-8">Статьи, заметки и полезные материалы для учеников и родителей</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Основная колонка с постами */}
            <div className="lg:col-span-3">
              {/* Форма поиска */}
              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Поиск по статьям..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
              
              {/* Список постов */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="aspect-video md:aspect-auto bg-gray-200 relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-5 md:col-span-2 flex flex-col">
                          <div className="mb-2 flex items-center space-x-3">
                            <Badge variant="outline" className="text-xs bg-slate-100">
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <CalendarClock size={14} className="mr-1" />
                              {post.date}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                          
                          <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center text-sm text-gray-500">
                              <User size={14} className="mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <Button 
                              asChild 
                              variant="link" 
                              className="px-0 text-math-blue"
                              onClick={() => navigate(`/blog/${post.id}`)}
                            >
                              <Link to={`/blog/${post.id}`}>Читать далее</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-600 mb-4">По вашему запросу ничего не найдено</p>
                  <Button 
                    variant="secondary" 
                    onClick={() => setSearchQuery("")}
                  >
                    Сбросить фильтр
                  </Button>
                </div>
              )}
              
              {/* Пагинация */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-10">
                  <Button variant="outline" className="mx-1" disabled>
                    1
                  </Button>
                  <Button variant="ghost" className="mx-1">
                    2
                  </Button>
                  <Button variant="ghost" className="mx-1">
                    3
                  </Button>
                  <Button variant="ghost" className="mx-1">
                    Следующая
                  </Button>
                </div>
              )}
            </div>
            
            {/* Боковая панель */}
            <div className="lg:col-span-1">
              {/* Категории */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Категории</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to="#"
                        onClick={() => setSearchQuery(category.name)}
                        className="flex justify-between items-center text-gray-700 hover:text-math-blue"
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Популярные теги */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Популярные теги</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-slate-100"
                      onClick={() => setSearchQuery(tag)}
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Подписка */}
              <Card className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Подписаться на обновления</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Получайте новые материалы и полезные статьи прямо на вашу почту
                  </p>
                  <form className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      className="bg-white"
                    />
                    <Button className="w-full bg-math-blue hover:bg-math-light-blue">
                      Подписаться
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
