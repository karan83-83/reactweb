import React from 'react';

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/1/200/300',
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden ">
      <div className="flex animate-marquee   ">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Marquee Image ${index}`} className="w-80 h-80 object-cover mx-2 mt-10 rounded-3xl" />
        ))}
      </div>
      <div className="absolute top-0 left-0 flex animate-marquee2 ">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Marquee Image ${index}`} className="w-80 h-80 object-cover mx-2 mt-10 rounded-3xl" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
