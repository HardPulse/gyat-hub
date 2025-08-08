import Seo from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Вход — Gyat Panel" description="Авторизация в панели управления Gyat Panel." />
      <section className="max-w-md mx-auto">
        <Card className="glass-card">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Вход</h1>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Пароль" type="password" />
            <Button variant="hero" className="w-full">Войти</Button>
            <div className="text-sm text-muted-foreground text-center">
              Нет аккаунта? <Link to="/register" className="underline">Зарегистрироваться</Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Login;
