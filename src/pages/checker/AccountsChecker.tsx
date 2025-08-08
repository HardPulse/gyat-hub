import Seo from "@/components/seo/Seo";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AccountsChecker = () => {
  const stats = [
    { label: "В выборке", value: 897 },
    { label: "Активные", value: 670 },
    { label: "Пустые/Приватные", value: 191 },
    { label: "Проблемные", value: 36 },
    { label: "Просмотры", value: 4097846 },
  ];

  const rows = [
    { login: "b80sbqzichga", status: "Active", geo: "IE", video: 2, views: 466, subs: 0, cookies: "Not Generated", email: "user@example.com" },
  ];

  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Чекер аккаунтов — Gyat Panel" description="Массовая проверка аккаунтов TikTok и детальная статистика." />
      <Header />

      <section className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mx-auto mb-5">
        {stats.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="text-2xl font-bold">{s.value.toLocaleString("ru-RU")}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-3">
          <div className="glass-card rounded-xl p-3 flex gap-2">
            <Input placeholder="Вставьте логины через перевод строки" />
            <Button variant="hero">Старт</Button>
          </div>

          <Card className="glass-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40">
                    <tr>
                      <th className="p-3 text-left">ЛОГИН</th>
                      <th className="p-3 text-left">СТАТУС</th>
                      <th className="p-3 text-left">ГЕО</th>
                      <th className="p-3 text-left">ВИДЕО</th>
                      <th className="p-3 text-left">ПРОСМОТРЫ</th>
                      <th className="p-3 text-left">ПОДПИСЧИКИ</th>
                      <th className="p-3 text-left">СТАТУС КУКОВ</th>
                      <th className="p-3 text-left">EMAIL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.login} className="border-t border-border">
                        <td className="p-3">{r.login}</td>
                        <td className="p-3"><span className="rounded-full px-2 py-0.5 text-xs bg-emerald-400/20 border border-emerald-400/30">{r.status}</span></td>
                        <td className="p-3">{r.geo}</td>
                        <td className="p-3">{r.video}</td>
                        <td className="p-3">{r.views.toLocaleString("ru-RU")}</td>
                        <td className="p-3">{r.subs}</td>
                        <td className="p-3">{r.cookies}</td>
                        <td className="p-3">{r.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-3">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="font-semibold mb-2">Статистика банов по ГЕО</div>
              <div className="text-sm text-muted-foreground">Всего проблемных аккаунтов: 227</div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="font-semibold mb-2">Статистика просмотров по ГЕО</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default AccountsChecker;
