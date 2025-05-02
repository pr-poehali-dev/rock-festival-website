import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SPONSOR_PACKAGES } from '@/lib/constants';
import Icon from '@/components/ui/icon';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="festival-section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Для спонсоров и партнёров</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SPONSOR_PACKAGES.map((pack, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{pack.name}</CardTitle>
                <CardDescription>Спонсорский пакет</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pack.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Почему стоит стать спонсором <span className="text-primary">РАССВЕТ</span>?</h3>
            <div className="space-y-4">
              <p>
                Мы предлагаем уникальные возможности для брендов, которые хотят связать свой имидж с одним из крупнейших музыкальных событий года.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Охват целевой аудитории</p>
                    <p className="text-sm text-gray-600">Более 50,000 посетителей за 3 дня, активная онлайн-аудитория в соцсетях.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Zap" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Повышение узнаваемости бренда</p>
                    <p className="text-sm text-gray-600">Размещение логотипа, интеграция в коммуникации фестиваля, брендированные зоны.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Target" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Прямое взаимодействие с потребителями</p>
                    <p className="text-sm text-gray-600">Возможность проведения активаций, сэмплинга, тест-драйвов на территории фестиваля.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Название компании
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="ООО Рок-компания"
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  Контактное лицо
                </label>
                <input
                  type="text"
                  id="contact"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Расскажите о ваших целях сотрудничества"
                ></textarea>
              </div>
              <button
                type="button"
                className="fire-btn w-full"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
