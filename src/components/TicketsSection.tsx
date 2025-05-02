import React from 'react';
import { TICKET_TYPES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TicketsSection: React.FC = () => {
  return (
    <section id="tickets" className="festival-section bg-zinc-100">
      <div className="container mx-auto">
        <h2 className="section-title">Купить билеты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TICKET_TYPES.map((ticket, index) => (
            <Card key={index} className="ticket-card relative overflow-hidden">
              {ticket.name === "VIP" && (
                <span className="absolute top-0 right-0 bg-rock-red text-white px-4 py-1 text-sm font-bold">
                  ПОПУЛЯРНЫЙ
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                <CardDescription>{ticket.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-6">{ticket.price}</p>
                <ul className="space-y-2">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full fire-btn">
                  Купить билет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Можно ли вернуть билет?</h4>
              <p className="text-gray-600">
                Да, возврат билетов возможен не позднее, чем за 7 дней до начала фестиваля. 
                Для возврата необходимо обратиться по email: tickets@rockfest-rassvet.ru
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Есть ли скидки для групп?</h4>
              <p className="text-gray-600">
                Да, при покупке от 5 билетов действует скидка 10%. 
                Для групповых заказов от 20 человек предоставляются специальные условия.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Могут ли дети посещать фестиваль?</h4>
              <p className="text-gray-600">
                Дети до 10 лет могут посещать фестиваль бесплатно в сопровождении взрослых. 
                Для детей от 10 до 16 лет действуют специальные детские билеты со скидкой 50%.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Что включено в VIP-билет?</h4>
              <p className="text-gray-600">
                VIP-билет включает доступ в специальную зону с лучшим обзором сцены, 
                отдельные бары и рестораны, чистые туалеты без очередей, 
                встречи с некоторыми артистами и подарочный набор мерча фестиваля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
