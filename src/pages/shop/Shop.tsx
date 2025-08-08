import Seo from "@/components/seo/Seo";
import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const items = [
  { id: "1", name: "TikTok EU Pack", description: "EU GEO, mixed", price: 5.5, geo: "EU", platform: "TikTok" },
  { id: "2", name: "TikTok US", description: "US GEO", price: 7.9, geo: "US", platform: "TikTok" },
];

const Shop = () => {
  return (
    <main className="min-h-screen app-gradient px-4 md:px-8 py-6">
      <Seo title="Шоп аккаунтов — Gyat Panel" description="Покупка аккаунтов TikTok по категориям, GEO и цене." />
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {items.map((it) => (
          <Card key={it.id} className="glass-card glow-hover">
            <CardContent className="p-5">
              <div className="font-semibold text-lg mb-1">{it.name}</div>
              <div className="text-sm text-muted-foreground mb-3">{it.description}</div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl">${it.price.toFixed(2)}</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="hero">Купить</Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card">
                    <DialogHeader>
                      <DialogTitle>Подтвердите покупку — {it.name}</DialogTitle>
                    </DialogHeader>
                    <div className="text-sm text-muted-foreground">Баланс: <span className="font-medium text-foreground">$1000.00</span></div>
                    <Button variant="hero" className="w-full mt-2">Оплатить ${it.price.toFixed(2)}</Button>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Shop;
