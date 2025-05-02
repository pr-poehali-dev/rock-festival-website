import React from 'react';
import Logo from '@/components/Logo';
import { SECTIONS, FESTIVAL_YEAR, FESTIVAL_NAME } from '@/lib/constants';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="opacity-70 mb-4">
              Рок-фестиваль РАССВЕТ — одно из самых ярких музыкальных событий года, объединяющее любителей рок-музыки со всей страны.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Разделы сайта</h4>
            <ul className="space-y-2">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`} 
                    className="opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                  >
                    <Icon name={section.icon} size={16} />
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Правила поведения на фестивале
                </a>
              </li>
              <li>
                <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  Договор оферты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="opacity-70">
                Красноярский край, озеро Байкал
              </li>
              <li>
                <a href="tel:+79991234567" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@rockfest-rassvet.ru" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  info@rockfest-rassvet.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            © {FESTIVAL_YEAR} Рок-фестиваль {FESTIVAL_NAME}. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              <Icon name="Vk" size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              <Icon name="Youtube" size={20} />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              <Icon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
