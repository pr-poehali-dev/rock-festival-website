import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { FESTIVAL_NAME, LINEUP } from '@/lib/constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="festival-section bg-rock-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">О фестивале</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              <span className="text-primary font-bold">{FESTIVAL_NAME}</span> — это крупнейший рок-фестиваль под открытым небом, который объединяет любителей рок-музыки всех направлений.
            </p>
            <p className="text-lg">
              Уже на протяжении 10 лет мы создаем незабываемые впечатления и атмосферу настоящего рока. Три дня живой музыки, драйва и свободы.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <Card className="bg-rock-light/10 border-rock-light/30 text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Users" className="text-primary" size={32} />
                  <div>
                    <p className="text-2xl font-bold">50,000+</p>
                    <p className="text-sm opacity-70">участников</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-rock-light/10 border-rock-light/30 text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Music" className="text-primary" size={32} />
                  <div>
                    <p className="text-2xl font-bold">30+</p>
                    <p className="text-sm opacity-70">групп</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-rock-light/10 border-rock-light/30 text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                  <div>
                    <p className="text-2xl font-bold">3 дня</p>
                    <p className="text-sm opacity-70">незабываемых эмоций</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div id="lineup" className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Лайнап</h3>
              <div className="space-y-4">
                {LINEUP.slice(0, 6).map((artist, index) => (
                  <div 
                    key={index}
                    className="p-3 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors rounded"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-lg">{artist.name}</p>
                      <div className="text-sm opacity-70">{artist.time}</div>
                    </div>
                    <div className="text-sm opacity-70 mt-1">
                      {artist.day} · {artist.stage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
