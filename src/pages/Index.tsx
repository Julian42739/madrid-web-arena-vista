
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import PlayerCard from '@/components/PlayerCard';
import MatchCard from '@/components/MatchCard';
import TrophyCard from '@/components/TrophyCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const news = [
    {
      id: '1',
      title: 'Victoria crucial contra el Barcelona en El Clásico',
      summary: 'El Real Madrid venció al Barcelona por 3-1 en un partido lleno de emociones y momentos destacados en el Santiago Bernabéu.',
      image: 'https://source.unsplash.com/random/800x600/?football',
      date: '20 Mayo, 2025',
      category: 'Partido'
    },
    {
      id: '2',
      title: 'Mbappé completa entrenamientos con el equipo',
      summary: 'El nuevo fichaje del Real Madrid ha completado su primera semana de entrenamientos con el equipo antes del primer partido de pretemporada.',
      image: 'https://source.unsplash.com/random/800x600/?soccer',
      date: '19 Mayo, 2025',
      category: 'Entrenamiento'
    },
    {
      id: '3',
      title: 'Nuevo contrato para Vinicius Jr.',
      summary: 'El club ha anunciado la renovación del contrato de Vinicius Jr. por cinco temporadas más, asegurando su futuro en el equipo.',
      image: 'https://source.unsplash.com/random/800x600/?football,player',
      date: '17 Mayo, 2025',
      category: 'Club'
    }
  ];
  
  const featuredPlayers = [
    {
      name: 'Vinicius Jr.',
      position: 'Delantero',
      number: 7,
      image: 'https://source.unsplash.com/random/400x600/?soccer,player'
    },
    {
      name: 'Jude Bellingham',
      position: 'Centrocampista',
      number: 5,
      image: 'https://source.unsplash.com/random/400x600/?football,player'
    },
    {
      name: 'Thibaut Courtois',
      position: 'Portero',
      number: 1,
      image: 'https://source.unsplash.com/random/400x600/?goalkeeper'
    },
    {
      name: 'Kylian Mbappé',
      position: 'Delantero',
      number: 10,
      image: 'https://source.unsplash.com/random/400x600/?soccer,striker'
    }
  ];
  
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
    }
  ];
  
  const recentMatches = [
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
    }
  ];
  
  const trophies = [
    {
      name: 'UEFA Champions League',
      count: 14,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/UEFA_Champions_League_logo.png/800px-UEFA_Champions_League_logo.png',
      years: ['2022', '2018', '2017', '2016', '2014', '2002', '2000', '1998', '1966', '1960', '1959', '1958', '1957', '1956']
    },
    {
      name: 'La Liga',
      count: 35,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LaLiga.svg/2560px-LaLiga.svg.png',
      years: ['2023', '2022', '2020', '2017', '2012']
    },
    {
      name: 'Copa del Rey',
      count: 20,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Copa_del_Rey_logo.svg/1200px-Copa_del_Rey_logo.svg.png',
      years: ['2023', '2014', '2011', '2004', '1993']
    },
    {
      name: 'Mundial de Clubes',
      count: 5,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/FIFA_Club_World_Cup_logo.svg/1200px-FIFA_Club_World_Cup_logo.svg.png',
      years: ['2022', '2018', '2017', '2016', '2014']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 relative">
        <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?soccer,stadium')" }}>
          <div className="absolute inset-0 hero-gradient flex flex-col justify-center items-center text-white p-4">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                REAL MADRID CF
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
                El club más grande y exitoso del mundo, con 14 Champions League y una rica historia de excelencia deportiva.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-madrid-navy hover:bg-madrid-gold hover:text-white">
                  Ver Últimos Resultados
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-madrid-navy">
                  Calendario de Partidos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-madrid-navy">Últimas Noticias</h2>
            <Link to="/noticias" className="text-madrid-navy hover:text-madrid-gold flex items-center">
              Ver todas <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Players Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-madrid-navy">Jugadores Destacados</h2>
            <Link to="/jugadores" className="text-madrid-navy hover:text-madrid-gold flex items-center">
              Ver plantilla completa <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlayers.map((player) => (
              <PlayerCard key={player.name} {...player} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Matches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-madrid-navy mb-8">Partidos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-madrid-navy mb-4">Próximo Partido</h3>
              {upcomingMatches.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-madrid-navy mb-4">Último Resultado</h3>
              {recentMatches.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/partidos">Ver Calendario Completo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Trophies Section */}
      <section className="py-16 bg-madrid-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Palmarés</h2>
            <Link to="/trofeos" className="text-white hover:text-madrid-gold flex items-center">
              Ver palmarés completo <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trophies.map((trophy) => (
              <TrophyCard key={trophy.name} {...trophy} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stadium Section */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?santiago,bernabeu')" }}>
        <div className="absolute inset-0 bg-madrid-navy bg-opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Santiago Bernabéu</h2>
            <p className="max-w-2xl mx-auto">
              Un estadio de leyenda, testigo de las mayores gestas del fútbol mundial y hogar del Real Madrid desde 1947.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button className="bg-white text-madrid-navy hover:bg-madrid-gold hover:text-white">
              Tour Virtual
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
