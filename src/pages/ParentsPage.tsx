import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeetingsTab from "@/components/parents/MeetingsTab";
import RecommendationsTab from "@/components/parents/RecommendationsTab";
import ConsultationsTab from "@/components/parents/ConsultationsTab";

/**
 * Страница для родителей с информацией о родительских собраниях,
 * рекомендациями и консультациями
 */
const ParentsPage = () => {
  const [activeTab, setActiveTab] = useState("meetings");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <PageHeader />
          
          <Tabs 
            defaultValue="meetings" 
            className="mb-12"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6">
              <TabsTrigger value="meetings">Родительские собрания</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
              <TabsTrigger value="consultations">Консультации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="meetings">
              <MeetingsTab />
            </TabsContent>
            
            <TabsContent value="recommendations">
              <RecommendationsTab />
            </TabsContent>
            
            <TabsContent value="consultations">
              <ConsultationsTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

/**
 * Заголовок страницы для родителей
 */
const PageHeader = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Для родителей</h1>
      <p className="text-xl text-gray-600">Информация, рекомендации и график консультаций</p>
    </div>
  );
};

export default ParentsPage;
