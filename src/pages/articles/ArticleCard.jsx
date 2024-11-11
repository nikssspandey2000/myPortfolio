import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myarticles from '../../utils/articles';

const ArticleCard = () => {
  const excerptLength = 100; 

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
      {myarticles.map((article) => (
        <ArticleExcerpt key={article.id} article={article} excerptLength={excerptLength} />
      ))}
    </section>
  );
};


const ArticleExcerpt = ({ article, excerptLength }) => {


  return (
    <div className='bg-white p-4 m-4 rounded-lg shadow-md'>
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p>
        {article.content.length > excerptLength 
          ? `${article.content.slice(0, excerptLength)}...` 
          : article.content}
      </p>
      <Link to={`/articles/${article.id}`} className="text-blue-500 mt-2">
        Read more
      </Link>
    </div>
  );
};

export default ArticleCard;
