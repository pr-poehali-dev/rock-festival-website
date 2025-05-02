import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PHOTO_GALLERY } from '@/lib/constants';

const PhotoSection: React.FC = () => {
  return (
    <section id="photos" className="festival-section bg-zinc-100">
      <div className="container mx-auto">
        <h2 className="section-title">Фото</h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {PHOTO_GALLERY.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </AspectRatio>
                    <div className="p-4 bg-white">
                      <h3 className="font-medium">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTO_GALLERY.map((photo, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>
              <div className="p-4 bg-white">
                <h3 className="font-medium">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
