import { Shield, CheckCircle, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/seo/Seo";
import Header from "@/components/layout/Header";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Gyat Panel — Панель управления TikTok" description="Три модуля: чекер отлеги, чекер аккаунтов и шоп. Управление аккаунтами TikTok." />
      <Header />
      <section className="text-center max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Добро пожаловать в панель управления</h1>
        <p className="text-muted-foreground text-base md:text-lg">Выберите нужную функцию для работы с аккаунтами и контентом</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        <Card className="glass-card glow-hover">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="size-10 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center"><Shield /></div>
            <div className="font-semibold text-lg">Чекер отлеги аккаунтов</div>
            <p className="text-sm text-muted-foreground">Проверка аккаунтов на активность и статус отлеги</p>
            <Link to="/otlega" className="mt-2">
              <Button variant="hero" size="lg">Открыть модуль</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="glass-card glow-hover">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="size-10 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center"><CheckCircle /></div>
            <div className="font-semibold text-lg">Чекер аккаунтов</div>
            <p className="text-sm text-muted-foreground">Массовая проверка валидности аккаунтов и статистики</p>
            <Link to="/checker" className="mt-2">
              <Button variant="hero" size="lg">Начать проверку</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="glass-card glow-hover">
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="size-10 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center"><ShoppingCart /></div>
            <div className="font-semibold text-lg">Шоп</div>
            <p className="text-sm text-muted-foreground">Покупка аккаунтов по категориям, GEO и цене</p>
            <Link to="/shop" className="mt-2">
              <Button variant="hero" size="lg">Перейти в шоп</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Index;
