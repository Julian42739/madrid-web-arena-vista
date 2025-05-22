
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlayerCard from '@/components/PlayerCard';

const Jugadores = () => {
  const players = [
    // Porteros
    {
      name: 'Thibaut Courtois',
      position: 'Portero',
      number: 1,
      image: 'https://source.unsplash.com/random/400x600/?goalkeeper'
    },
    {
      name: 'Andriy Lunin',
      position: 'Portero',
      number: 13,
      image: 'https://source.unsplash.com/random/400x600/?soccer,goalkeeper'
    },
    
    // Defensas
    {
      name: 'Dani Carvajal',
      position: 'Defensa',
      number: 2,
      image: 'https://source.unsplash.com/random/400x600/?football,defender'
    },
    {
      name: 'Éder Militão',
      position: 'Defensa',
      number: 3,
      image: 'https://source.unsplash.com/random/400x600/?soccer,defender'
    },
    {
      name: 'David Alaba',
      position: 'Defensa',
      number: 4,
      image: 'https://source.unsplash.com/random/400x600/?football,defender'
    },
    {
      name: 'Ferland Mendy',
      position: 'Defensa',
      number: 23,
      image: 'https://source.unsplash.com/random/400x600/?soccer,defender'
    },
    
    // Centrocampistas
    {
      name: 'Jude Bellingham',
      position: 'Centrocampista',
      number: 5,
      image: 'https://source.unsplash.com/random/400x600/?football,midfielder'
    },
    {
      name: 'Luka Modric',
      position: 'Centrocampista',
      number: 10,
      image: 'https://source.unsplash.com/random/400x600/?soccer,midfielder'
    },
    {
      name: 'Eduardo Camavinga',
      position: 'Centrocampista',
      number: 12,
      image: 'https://source.unsplash.com/random/400x600/?football,midfielder'
    },
    {
      name: 'Federico Valverde',
      position: 'Centrocampista',
      number: 15,
      image: 'https://source.unsplash.com/random/400x600/?soccer,midfielder'
    },
    
    // Delanteros
    {
      name: 'Kylian Mbappé',
      position: 'Delantero',
      number: 9,
      image: 'https://source.unsplash.com/random/400x600/?football,striker'
    },
    {
      name: 'Vinicius Jr.',
      position: 'Delantero',
      number: 7,
      image: 'https://source.unsplash.com/random/400x600/?soccer,striker'
    },
    {
      name: 'Rodrygo',
      position: 'Delantero',
      number: 11,
      image: 'https://source.unsplash.com/random/400x600/?football,striker'
    },
    {
      name: 'Endrick',
      position: 'Delantero',
      number: 16,
      image: 'https://source.unsplash.com/random/400x600/?soccer,striker'
    },
    {
      name: 'Brahim Díaz',
      position: 'Delantero',
      number: 21,
      image: 'https://source.unsplash.com/random/400x600/?football,striker'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-madrid-navy py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Plantilla 2024-2025</h1>
            <p className="text-xl">Conoce a los jugadores que defienden la camiseta del Real Madrid en esta temporada</p>
          </div>
        </div>
        
        {/* Players Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-madrid-navy mb-6">Porteros</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {players
                  .filter(player => player.position === 'Portero')
                  .map(player => (
                    <PlayerCard key={player.name} {...player} />
                  ))
                }
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-madrid-navy mb-6">Defensas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {players
                  .filter(player => player.position === 'Defensa')
                  .map(player => (
                    <PlayerCard key={player.name} {...player} />
                  ))
                }
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-madrid-navy mb-6">Centrocampistas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {players
                  .filter(player => player.position === 'Centrocampista')
                  .map(player => (
                    <PlayerCard key={player.name} {...player} />
                  ))
                }
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-madrid-navy mb-6">Delanteros</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {players
                  .filter(player => player.position === 'Delantero')
                  .map(player => (
                    <PlayerCard key={player.name} {...player} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Jugadores;
