import Seo from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Регистрация — Gyat Panel" description="Создание аккаунта с модерацией администратора." />
      <section className="max-w-md mx-auto">
        <Card className="glass-card">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Регистрация</h1>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Пароль" type="password" />
            <Button variant="hero" className="w-full">Создать аккаунт</Button>
            <div className="text-sm text-muted-foreground text-center">
              Уже есть аккаунт? <Link to="/login" className="underline">Войти</Link>
            </div>
            <p className="text-xs text-muted-foreground">После регистрации ваша заявка будет рассмотрена администратором.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Register;
