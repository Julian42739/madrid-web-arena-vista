
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Noticias = () => {
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
    },
    {
      id: '4',
      title: 'Inauguración de la nueva zona del Santiago Bernabéu',
      summary: 'El club ha inaugurado la nueva zona de restaurantes y tiendas en el estadio Santiago Bernabéu, completando la renovación del icónico estadio.',
      image: 'https://source.unsplash.com/random/800x600/?stadium',
      date: '16 Mayo, 2025',
      category: 'Club'
    },
    {
      id: '5',
      title: 'El Real Madrid CF y la sostenibilidad ambiental',
      summary: 'El club presentó su nuevo plan de sostenibilidad ambiental, con el objetivo de reducir su huella de carbono en un 50% para el año 2030.',
      image: 'https://source.unsplash.com/random/800x600/?environment',
      date: '15 Mayo, 2025',
      category: 'Club'
    },
    {
      id: '6',
      title: 'Modric renueva por una temporada más',
      summary: 'La leyenda croata del Real Madrid ha firmado una extensión de contrato por una temporada más, llegando así a su decimotercera temporada con el club.',
      image: 'https://source.unsplash.com/random/800x600/?football,midfielder',
      date: '14 Mayo, 2025',
      category: 'Club'
    },
    {
      id: '7',
      title: 'El Real Madrid Femenino gana la Liga F',
      summary: 'Las jugadoras del Real Madrid Femenino se proclamaron campeonas de la Liga F tras una temporada impecable.',
      image: 'https://source.unsplash.com/random/800x600/?women,soccer',
      date: '13 Mayo, 2025',
      category: 'Femenino'
    },
    {
      id: '8',
      title: 'La cantera del Real Madrid: futuro asegurado',
      summary: 'Un análisis de los jóvenes talentos de La Fábrica que prometen ser el futuro del club blanco en los próximos años.',
      image: 'https://source.unsplash.com/random/800x600/?youth,soccer',
      date: '12 Mayo, 2025',
      category: 'Cantera'
    },
    {
      id: '9',
      title: 'El Santiago Bernabéu acogerá la final de Champions League en 2027',
      summary: 'La UEFA ha anunciado que el renovado estadio Santiago Bernabéu será la sede de la final de la Champions League en 2027.',
      image: 'https://source.unsplash.com/random/800x600/?stadium,football',
      date: '11 Mayo, 2025',
      category: 'Club'
    }
  ];
  
  const categories = ['Todos', 'Partido', 'Entrenamiento', 'Club', 'Femenino', 'Cantera'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-madrid-navy py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Noticias del Real Madrid</h1>
            <p className="text-xl">Mantente al día con las últimas noticias del mejor club del mundo</p>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="relative w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-madrid-navy"
                  placeholder="Buscar noticias..."
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={category === 'Todos' ? 'default' : 'outline'} 
                    size="sm"
                    className={category === 'Todos' ? 'bg-madrid-navy' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map(item => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button size="lg" className="bg-madrid-navy hover:bg-madrid-gold">
                Cargar Más Noticias
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Noticias;
