
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  date: string;
  time: string;
  venue: string;
  competition: string;
  isUpcoming?: boolean;
  homeScore?: number;
  awayScore?: number;
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  homeTeamLogo,
  awayTeamLogo,
  date,
  time,
  venue,
  competition,
  isUpcoming = true,
  homeScore,
  awayScore
}) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-center">
        <span className="text-xs bg-madrid-gold text-white px-2 py-1 rounded">{competition}</span>
      </div>
      
      <div className="flex items-center justify-between my-6">
        <div className="flex flex-col items-center w-1/3">
          <img src={homeTeamLogo} alt={homeTeam} className="h-16 w-16 object-contain" />
          <h4 className="mt-2 text-center font-medium">{homeTeam}</h4>
        </div>
        
        {isUpcoming ? (
          <div className="flex flex-col items-center w-1/3">
            <span className="text-lg font-bold text-madrid-navy">VS</span>
            <div className="flex items-center mt-2">
              <Calendar size={14} className="mr-1 text-gray-500" />
              <span className="text-xs text-gray-600">{date}</span>
            </div>
            <div className="flex items-center mt-1">
              <Clock size={14} className="mr-1 text-gray-500" />
              <span className="text-xs text-gray-600">{time}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-1/3">
            <div className="text-xl font-bold text-madrid-navy">
              {homeScore} - {awayScore}
            </div>
            <span className="text-xs text-gray-600 mt-1">Finalizado</span>
          </div>
        )}
        
        <div className="flex flex-col items-center w-1/3">
          <img src={awayTeamLogo} alt={awayTeam} className="h-16 w-16 object-contain" />
          <h4 className="mt-2 text-center font-medium">{awayTeam}</h4>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        {venue}
      </div>
    </Card>
  );
};

export default MatchCard;
