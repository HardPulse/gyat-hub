import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen app-gradient flex items-center justify-center">
      <div className="text-center glass-card rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Страница не найдена</p>
        <a href="/" className="btn-outline-glow rounded-md px-4 py-2 inline-block">На главную</a>
      </div>
    </div>
  );
};

export default NotFound;
