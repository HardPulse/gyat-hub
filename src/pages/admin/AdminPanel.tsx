import Seo from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const AdminPanel = () => {
  const pending = [{ id: "u1", email: "new@user.com" }];
  const users = [
    { id: "1", email: "user@demo.com", role: "user", balance: 25, status: "approved" },
    { id: "2", email: "vip@demo.com", role: "user", balance: 120, status: "vip" },
  ];

  const stats = [
    { label: "Обычные", value: 12 },
    { label: "VIP", value: 3 },
    { label: "Админы", value: 1 },
    { label: "Тикеты", value: 5 },
  ];

  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Админ-панель — Gyat Panel" description="Управление заявками, пользователями, балансами и статистикой платформы." />
      <Header />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto mb-5">
        {stats.map((s) => (
          <Card key={s.label} className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-7xl mx-auto">
        <Tabs defaultValue="requests" className="glass-card rounded-xl p-4">
          <TabsList className="mb-4">
            <TabsTrigger value="requests">Заявки</TabsTrigger>
            <TabsTrigger value="users">Пользователи</TabsTrigger>
          </TabsList>
          <TabsContent value="requests">
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/40">
                  <tr>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {pending.map((p) => (
                    <tr key={p.id} className="border-t border-border">
                      <td className="p-3">{p.email}</td>
                      <td className="p-3 flex gap-2">
                        <Button variant="hero" size="sm">Одобрить</Button>
                        <Button variant="destructive" size="sm">Отклонить</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="users">
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/40">
                  <tr>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Роль</th>
                    <th className="p-3 text-left">Баланс</th>
                    <th className="p-3 text-left">Статус</th>
                    <th className="p-3 text-left">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t border-border">
                      <td className="p-3">{u.email}</td>
                      <td className="p-3">{u.role}</td>
                      <td className="p-3">${u.balance.toFixed(2)}</td>
                      <td className="p-3">{u.status}</td>
                      <td className="p-3 flex gap-2">
                        <Button variant="surface" size="sm">Заблокировать</Button>
                        <Button variant="outlineGlow" size="sm">Изменить баланс</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default AdminPanel;
