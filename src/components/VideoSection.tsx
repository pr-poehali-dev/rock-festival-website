import React from 'react';
import { VIDEO_GALLERY } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="festival-section bg-rock-dark text-white">
      <div className="container mx-auto">
        <h2 className="section-title">Видео</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_GALLERY.map((video, index) => (
            <Card key={index} className="bg-black/50 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg opacity-80 mb-6">
            Больше видео доступно на нашем канале YouTube
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>Перейти на YouTube</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"/>
              <path d="m13 17 5-5-5-5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
