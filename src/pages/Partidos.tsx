
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatchCard from '@/components/MatchCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Partidos = () => {
  const upcomingMatches = [
    {
      homeTeam: 'Real Madrid',
      awayTeam: 'Manchester City',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png',
      date: '25 Mayo, 2025',
      time: '21:00 CEST',
      venue: 'Santiago Bernabéu',
      competition: 'Champions League',
      isUpcoming: true
    },
    {
      homeTeam: 'Athletic Club',
      awayTeam: 'Real Madrid',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Athletic_Club_Bilbao_logo.svg/1200px-Athletic_Club_Bilbao_logo.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      date: '29 Mayo, 2025',
      time: '19:00 CEST',
      venue: 'San Mamés',
      competition: 'La Liga',
      isUpcoming: true
    },
    {
      homeTeam: 'Real Madrid',
      awayTeam: 'Sevilla FC',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png',
      date: '2 Junio, 2025',
      time: '21:00 CEST',
      venue: 'Santiago Bernabéu',
      competition: 'La Liga',
      isUpcoming: true
    },
    {
      homeTeam: 'Valencia CF',
      awayTeam: 'Real Madrid',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      date: '9 Junio, 2025',
      time: '19:00 CEST',
      venue: 'Mestalla',
      competition: 'La Liga',
      isUpcoming: true
    }
  ];
  
  const pastMatches = [
    {
      homeTeam: 'Real Madrid',
      awayTeam: 'FC Barcelona',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
      date: '20 Mayo, 2025',
      time: '21:00 CEST',
      venue: 'Santiago Bernabéu',
      competition: 'La Liga',
      isUpcoming: false,
      homeScore: 3,
      awayScore: 1
    },
    {
      homeTeam: 'Atlético Madrid',
      awayTeam: 'Real Madrid',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      date: '14 Mayo, 2025',
      time: '21:00 CEST',
      venue: 'Metropolitano',
      competition: 'La Liga',
      isUpcoming: false,
      homeScore: 1,
      awayScore: 2
    },
    {
      homeTeam: 'Real Madrid',
      awayTeam: 'Bayern Munich',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
      date: '7 Mayo, 2025',
      time: '21:00 CEST',
      venue: 'Santiago Bernabéu',
      competition: 'Champions League',
      isUpcoming: false,
      homeScore: 2,
      awayScore: 0
    },
    {
      homeTeam: 'Real Betis',
      awayTeam: 'Real Madrid',
      homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png',
      awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
      date: '3 Mayo, 2025',
      time: '19:00 CEST',
      venue: 'Benito Villamarín',
      competition: 'La Liga',
      isUpcoming: false,
      homeScore: 0,
      awayScore: 3
    }
  ];
  
  const competitions = ['Todos', 'La Liga', 'Champions League', 'Copa del Rey', 'Supercopa'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-madrid-navy py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Partidos y Resultados</h1>
            <p className="text-xl">Consulta el calendario de partidos y los resultados del Real Madrid</p>
          </div>
        </div>
        
        {/* Filter by Competition */}
        <div className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {competitions.map(competition => (
                  <Button 
                    key={competition}
                    variant={competition === 'Todos' ? 'default' : 'outline'} 
                    size="sm"
                    className={competition === 'Todos' ? 'bg-madrid-navy' : ''}
                  >
                    {competition}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Matches Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="upcoming" className="mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="upcoming">Próximos Partidos</TabsTrigger>
                <TabsTrigger value="results">Resultados</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingMatches.map((match, index) => (
                    <MatchCard key={index} {...match} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastMatches.map((match, index) => (
                    <MatchCard key={index} {...match} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="bg-madrid-navy hover:bg-madrid-gold">
                Cargar Más Partidos
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partidos;
