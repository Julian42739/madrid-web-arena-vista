
import React from 'react';
import { Card } from '@/components/ui/card';

interface PlayerCardProps {
  name: string;
  position: string;
  number: number;
  image: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, position, number, image }) => {
  return (
    <Card className="overflow-hidden group relative">
      <div className="h-64 lg:h-80 overflow-hidden bg-madrid-gray">
        <img 
          src={image} 
          alt={`${name} - Real Madrid`} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="absolute top-0 right-0 bg-madrid-navy text-white text-2xl font-bold px-3 py-1">
        {number}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-montserrat font-bold text-madrid-navy">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </Card>
  );
};

export default PlayerCard;
