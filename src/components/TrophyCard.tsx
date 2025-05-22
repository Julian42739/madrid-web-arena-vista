
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface TrophyCardProps {
  name: string;
  count: number;
  image: string;
  years: string[];
}

const TrophyCard: React.FC<TrophyCardProps> = ({ name, count, image, years }) => {
  return (
    <Card className="p-6 text-center trophy-card transition-all duration-300 bg-white border border-gray-200 hover:border-madrid-gold">
      <div className="flex justify-center mb-4">
        <img src={image} alt={name} className="h-24 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-madrid-navy mb-2">{name}</h3>
      <div className="flex items-center justify-center text-madrid-gold mb-4">
        <Trophy size={20} className="mr-2" />
        <span className="font-bold text-xl">{count}</span>
      </div>
      <div className="text-sm text-gray-600">
        {years.length > 5 ? (
          <div>
            <span>Últimos años: {years.slice(0, 5).join(', ')}</span>
            <button className="text-madrid-navy hover:text-madrid-gold ml-1">
              +{years.length - 5} más
            </button>
          </div>
        ) : (
          <span>{years.join(', ')}</span>
        )}
      </div>
    </Card>
  );
};

export default TrophyCard;
