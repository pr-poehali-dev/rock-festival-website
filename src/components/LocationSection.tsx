import React from 'react';
import { FESTIVAL_LOCATION } from '@/lib/constants';
import Icon from '@/components/ui/icon';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="festival-section bg-rock-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Как добраться</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="glass-card mb-8">
              <h3 className="text-2xl font-bold mb-4">Место проведения</h3>
              <p className="text-lg font-medium text-primary mb-2">{FESTIVAL_LOCATION}</p>
              <p className="mb-6">
                Фестиваль проходит на живописном берегу озера Байкал, в окружении прекрасных пейзажей Красноярского края.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Координаты
                  </h4>
                  <p>55.7558° с. ш., 37.6173° в. д.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Время работы
                  </h4>
                  <p>1-3 августа, с 10:00 до 23:00</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card">
                <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Icon name="Info" className="text-primary" />
                  Важная информация
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>На территории фестиваля работает кемпинг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Доступны платные парковочные места</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Работают точки питания и бары</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Медицинские пункты расположены у каждой сцены</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
              {/* Карта - в реальном проекте можно заменить на Google Maps или Яндекс Карты */}
              <img 
                src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Карта местности" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Варианты транспорта</h3>
                
                <div className="space-y-4">
                  <div className="glass-card">
                    <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Icon name="Bus" className="text-primary" />
                      Автобусы
                    </h4>
                    <p>Специальные шаттлы будут курсировать от ж/д вокзала Красноярска до места проведения фестиваля. Отправление каждые 2 часа.</p>
                  </div>
                  
                  <div className="glass-card">
                    <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Icon name="Car" className="text-primary" />
                      На автомобиле
                    </h4>
                    <p>Следуйте по трассе M-53 до указателя "Фестиваль РАССВЕТ". Парковка платная, рекомендуем бронировать заранее.</p>
                  </div>
                  
                  <div className="glass-card">
                    <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Icon name="Train" className="text-primary" />
                      Поезд + трансфер
                    </h4>
                    <p>Доберитесь до ж/д вокзала Красноярска, далее воспользуйтесь нашими шаттлами или такси до места фестиваля.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
