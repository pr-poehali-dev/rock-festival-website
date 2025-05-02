import React from 'react';
import { CONTACTS } from '@/lib/constants';
import Icon from '@/components/ui/icon';

const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="festival-section bg-rock-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Телефон</p>
                    <p className="text-lg font-medium">{CONTACTS.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email</p>
                    <p className="text-lg font-medium">{CONTACTS.email}</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="mb-4">Мы в социальных сетях:</p>
                  <div className="flex gap-4">
                    {CONTACTS.socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-primary transition-colors duration-300 p-3 rounded-full"
                      >
                        <Icon name={social.icon} size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">Организационные вопросы</h3>
              <p className="mb-4">
                По вопросам организации, партнерства, пресс-аккредитаций и другим деловым вопросам:
              </p>
              <a href="mailto:org@rockfest-rassvet.ru" className="text-primary hover:underline">
                org@rockfest-rassvet.ru
              </a>
            </div>
          </div>
          
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm opacity-70 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm opacity-70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm opacity-70 mb-1">
                  Тема
                </label>
                <select
                  id="subject"
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="general">Общие вопросы</option>
                  <option value="tickets">Вопросы по билетам</option>
                  <option value="partnership">Партнерство</option>
                  <option value="press">Для прессы</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm opacity-70 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="fire-btn w-full"
                >
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
