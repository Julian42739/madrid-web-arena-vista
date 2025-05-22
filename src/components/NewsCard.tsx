
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, summary, image, date, category }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-madrid-navy text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 font-montserrat line-clamp-2 text-madrid-navy">
          {title}
        </h3>
        <p className="text-madrid-darkGray text-sm mb-4 line-clamp-3">
          {summary}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
          <Link 
            to={`/noticias/${id}`} 
            className="text-madrid-navy hover:text-madrid-gold font-medium text-sm transition-colors"
          >
            Leer más
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
