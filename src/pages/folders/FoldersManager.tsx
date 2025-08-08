import Seo from "@/components/seo/Seo";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FolderPlus, UploadCloud, Trash2, Clock, MoveRight, MousePointer } from "lucide-react";

const FoldersManager = () => {
  const folders = [{ id: "1", name: "Main" }];
  const accounts: any[] = [];

  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Чекер отлеги — Gyat Panel" description="Управление папками и временем отлежки аккаунтов TikTok." />
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">Папки</div>
            <Button variant="hero" size="sm" className="rounded-full"><FolderPlus className="mr-1" />+</Button>
          </div>
          <div className="space-y-2">
            {folders.map((f) => (
              <Card key={f.id} className="glass-card glow-hover">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="font-medium">{f.name}</div>
                  <div className="text-xs text-muted-foreground">0 accounts</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 glass-card rounded-xl p-4">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Button variant="hero"><UploadCloud />Загрузить аккаунты</Button>
            <Button variant="surface"><MousePointer />Забрать</Button>
            <Button variant="surface"><Trash2 />Удалить</Button>
            <Button variant="surface"><Clock />Установить время</Button>
            <Button variant="surface"><MoveRight />Переместить</Button>
            <Button variant="outlineGlow">Выделить</Button>
          </div>

          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">Main <span className="text-muted-foreground text-sm">(0 accounts)</span></div>
                <div className="text-sm">Cooldown: <span className="text-accent">1 hours</span></div>
              </div>
              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40">
                    <tr>
                      <th className="text-left p-3">Логин</th>
                      <th className="text-left p-3">Гео</th>
                      <th className="text-left p-3">Время</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounts.length === 0 && (
                      <tr>
                        <td colSpan={3} className="p-6 text-center text-muted-foreground">No accounts found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default FoldersManager;
