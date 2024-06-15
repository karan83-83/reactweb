// src/App.js
import React from 'react';

const items = [
  {
    id: 1,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Razvan Veze',
    likes: 153,
    views: '25k',
  },
  {
    id: 2,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Adam Grason',
    likes: 180,
    views: '33k',
  },
  {
    id: 3,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Webflow',
    likes: '',
    views: '',
  },
  {
    id: 4,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 4,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 5,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 6,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 7,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 8,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 9,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 10,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 11,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 12,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 13,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 14,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 15,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 17,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 18,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 19,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 20,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 21,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 22,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 23,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 24,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 25,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 26,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 27,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 28,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 29,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 30,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 31,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 32,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 33,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 24,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 35,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 36,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 37,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 38,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 39,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 40,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 41,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 42,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 43,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 44,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 45,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 46,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 47,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  {
    id: 48,
    imgSrc: 'https://picsum.photos/id/1/200/300',
    title: 'Uran Duo',
    likes: 260,
    views: '51.6k',
  },
  
  

  
  


];

function Component() {
  return (
    <div className="p-6 bg-gray-100 flex-start ">
      <h1 className="text-3xl font-bold mb-4 text-center ">Explore inspiring designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex items-center">
                  {item.likes && <span className="mr-2">❤️ {item.likes}</span>}
                  {item.views && <span>👁️ {item.views}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center  justify-center text-center mt-10 ">Browse more inspiration</button>
    </div>
  );
}

export default Component;
