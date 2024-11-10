import React from 'react';
import { useParams } from 'react-router-dom';
import myarticles from '../../utils/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = myarticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <section className='p-6'>
      <h1 className='text-3xl font-semibold mb-4'>{article.title}</h1>
      <p className='text-lg'>{article.content}</p>
    </section>
  );
};

export default ArticlePage;
