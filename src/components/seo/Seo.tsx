import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const Seo = ({ title, description, path = "/" }: SeoProps) => {
  const url = typeof window !== "undefined" ? window.location.origin + path : path;
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    url,
    applicationCategory: "BusinessApplication",
    inLanguage: "ru-RU",
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
};

export default Seo;
