import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Победители олимпиады по математике",
    category: "olympiads",
    title: "Победители районной олимпиады 2023",
    description: "Ученики 9-11 классов, занявшие призовые места на районной олимпиаде по математике"
  },
  {
    id: 2,
    src: "/placeholder.svg",
    alt: "Открытый урок по геометрии",
    category: "lessons",
    title: "Открытый урок по геометрии",
    description: "Изучаем трехмерные фигуры с помощью интерактивных моделей"
  },
  {
    id: 3,
    src: "/placeholder.svg",
    alt: "Мастер-класс по подготовке к ЕГЭ",
    category: "workshops",
    title: "Мастер-класс по решению задач №19 ЕГЭ",
    description: "Разбираем сложные задачи с параметрами из профильного ЕГЭ"
  },
  {
    id: 4,
    src: "/placeholder.svg",
    alt: "Математический кружок",
    category: "lessons",
    title: "Занятие математического кружка",
    description: "Решаем нестандартные задачи и готовимся к математическим боям"
  },
  {
    id: 5,
    src: "/placeholder.svg",
    alt: "Городская олимпиада по математике",
    category: "olympiads",
    title: "Городская олимпиада 2023",
    description: "Наши ученики приняли участие в городской олимпиаде по математике"
  },
  {
    id: 6,
    src: "/placeholder.svg",
    alt: "Семинар для учителей",
    category: "workshops",
    title: "Семинар «Современные методики преподавания математики»",
    description: "Обмен опытом с коллегами из других школ города"
  },
  {
    id: 7,
    src: "/placeholder.svg",
    alt: "Летний математический лагерь",
    category: "events",
    title: "Летний математический лагерь",
    description: "Две недели интенсивной подготовки и математических игр"
  },
  {
    id: 8,
    src: "/placeholder.svg",
    alt: "Экскурсия в технический музей",
    category: "events",
    title: "Экскурсия в музей науки и техники",
    description: "Изучаем практическое применение математики в реальном мире"
  },
  {
    id: 9,
    src: "/placeholder.svg",
    alt: "Региональный этап всероссийской олимпиады",
    category: "olympiads",
    title: "Региональный этап ВсОШ 2023",
    description: "Наши ученики достойно представили школу на региональном этапе"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    { id: "all", name: "Все" },
    { id: "lessons", name: "Уроки" },
    { id: "olympiads", name: "Олимпиады" },
    { id: "workshops", name: "Мастер-классы" },
    { id: "events", name: "Мероприятия" }
  ];

  const showNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const filterImagesByCategory = (category: string) => {
    return category === "all" 
      ? galleryImages 
      : galleryImages.filter(img => img.category === category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-math-blue mb-2">Галерея</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Фотографии с уроков, олимпиад и других математических мероприятий
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterImagesByCategory(category.id).map(image => (
                  <Card 
                    key={image.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <Dialog open={isDialogOpen && selectedImage?.id === image.id} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <div onClick={() => handleImageClick(image)} className="group">
                          <div className="relative">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm font-medium">Открыть</span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-math-blue">{image.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{image.description}</p>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-4xl p-0 bg-white/95 backdrop-blur-sm">
                        <div className="relative">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="absolute right-2 top-2 z-10 rounded-full bg-white/70 hover:bg-white"
                            onClick={() => setIsDialogOpen(false)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          
                          <div className="flex flex-col md:flex-row">
                            <div className="relative md:w-2/3">
                              <img 
                                src={selectedImage?.src} 
                                alt={selectedImage?.alt} 
                                className="w-full h-[300px] md:h-[500px] object-cover"
                              />
                              
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white"
                                onClick={showPrevImage}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 hover:bg-white"
                                onClick={showNextImage}
                              >
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="p-6 md:w-1/3">
                              <h2 className="text-xl font-bold text-math-blue mb-2">
                                {selectedImage?.title}
                              </h2>
                              <p className="text-gray-600 mb-4">
                                {selectedImage?.description}
                              </p>
                              <span className="inline-block bg-math-light-blue/20 text-math-blue px-3 py-1 rounded-full text-sm">
                                {categories.find(c => c.id === selectedImage?.category)?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
