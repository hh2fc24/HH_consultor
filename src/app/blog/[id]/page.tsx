// src/app/blog/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import Article1 from '@/components/blog/Article1';
import Article2 from '@/components/blog/Article2';
import Article3 from '@/components/blog/Article3';
import React from 'react'; // Importar React para usar React.use()

interface PageProps {
  params: {
    id: string;
  };
}

const articleMap: Record<string, JSX.Element> = {
  '1': <Article1 />,
  '2': <Article2 />,
  '3': <Article3 />,
};

const BlogArticlePage = ({ params }: PageProps) => {
  // Usar React.use() para desenvolver la promesa de params
  const resolvedParams = React.use(Promise.resolve(params));
  const article = articleMap[resolvedParams.id];
  if (!article) {
    notFound();
  }
  return article;
};

export default BlogArticlePage;