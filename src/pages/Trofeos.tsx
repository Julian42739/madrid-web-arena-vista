
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrophyCard from '@/components/TrophyCard';

const Trofeos = () => {
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
      years: ['2023', '2022', '2020', '2017', '2012', '2008', '2007', '2003', '2001', '1997', '1995', '1990', '1989', '1988', '1987', '1986', '1980', '1979', '1978', '1976', '1975', '1972', '1969', '1968', '1967', '1964', '1963', '1962', '1961', '1957', '1955', '1954', '1933', '1932', '1931']
    },
    {
      name: 'Copa del Rey',
      count: 20,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Copa_del_Rey_logo.svg/1200px-Copa_del_Rey_logo.svg.png',
      years: ['2023', '2014', '2011', '2004', '1993', '1989', '1982', '1980', '1975', '1974', '1970', '1962', '1947', '1936', '1934', '1917', '1908', '1906', '1905', '1904']
    },
    {
      name: 'Mundial de Clubes',
      count: 5,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/FIFA_Club_World_Cup_logo.svg/1200px-FIFA_Club_World_Cup_logo.svg.png',
      years: ['2022', '2018', '2017', '2016', '2014']
    },
    {
      name: 'Supercopa de Europa',
      count: 5,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/UEFA_Super_Cup_logo.svg/1200px-UEFA_Super_Cup_logo.svg.png',
      years: ['2022', '2017', '2016', '2014', '2002']
    },
    {
      name: 'Supercopa de España',
      count: 12,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Supercopa_de_Espa%C3%B1a.svg/1200px-Supercopa_de_Espa%C3%B1a.svg.png',
      years: ['2023', '2022', '2020', '2017', '2012', '2008', '2003', '2001', '1997', '1990', '1989', '1988']
    },
    {
      name: 'Copa de la UEFA',
      count: 2,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/UEFA_Europa_League_logo.svg/1200px-UEFA_Europa_League_logo.svg.png',
      years: ['1985', '1986']
    },
    {
      name: 'Copa Intercontinental',
      count: 3,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Intercontinental_cup_toyota_trophy.svg/1200px-Intercontinental_cup_toyota_trophy.svg.png',
      years: ['2002', '1998', '1960']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-madrid-navy py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Palmarés</h1>
            <p className="text-xl">El club más laureado de la historia del fútbol mundial</p>
          </div>
        </div>
        
        {/* Trophy Count Summary */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <div className="text-4xl font-bold text-madrid-navy">96</div>
                <div className="text-gray-600 mt-2">Títulos totales</div>
              </div>
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <div className="text-4xl font-bold text-madrid-navy">14</div>
                <div className="text-gray-600 mt-2">Champions League</div>
              </div>
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <div className="text-4xl font-bold text-madrid-navy">35</div>
                <div className="text-gray-600 mt-2">Ligas</div>
              </div>
              <div className="p-6 bg-white shadow-sm rounded-lg">
                <div className="text-4xl font-bold text-madrid-navy">8</div>
                <div className="text-gray-600 mt-2">Mundiales de Clubes</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trophies Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-madrid-navy mb-8 text-center">Nuestros Títulos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trophies.map((trophy) => (
                <TrophyCard key={trophy.name} {...trophy} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Historical Moments */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-madrid-navy mb-8 text-center">Momentos Históricos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-madrid-navy mb-4">La Décima (2014)</h3>
                <p className="text-gray-700 mb-4">
                  Después de 12 años de espera, el Real Madrid conquistó su décima Champions League en Lisboa contra el Atlético de Madrid con un inolvidable gol de Sergio Ramos en el minuto 93.
                </p>
                <div className="h-48 overflow-hidden rounded">
                  <img 
                    src="https://source.unsplash.com/random/800x600/?football,celebration" 
                    alt="La Décima" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-madrid-navy mb-4">El Triplete Europeo (2016-2018)</h3>
                <p className="text-gray-700 mb-4">
                  El Real Madrid hizo historia al ganar tres Champions League consecutivas bajo la dirección de Zinedine Zidane, algo nunca antes logrado en la era moderna de la competición.
                </p>
                <div className="h-48 overflow-hidden rounded">
                  <img 
                    src="https://source.unsplash.com/random/800x600/?trophy,football" 
                    alt="Triplete Europeo" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Trofeos;
