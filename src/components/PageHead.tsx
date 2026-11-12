import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/franchise-guides";

export function PageHead({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }) {
  const url = `${SITE_URL}${path}`;
  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
  </Helmet>;
}