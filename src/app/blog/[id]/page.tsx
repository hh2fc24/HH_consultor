import { notFound } from 'next/navigation';
import Article1 from '@/components/blog/Article1';
import Article2 from '@/components/blog/Article2';
import Article3 from '@/components/blog/Article3';

const articleMap: Record<string, JSX.Element> = {
  '1': <Article1 />,
  '2': <Article2 />,
  '3': <Article3 />,
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = articleMap[params.id];

  if (!article) {
    notFound();
  }

  return <>{article}</>;
}