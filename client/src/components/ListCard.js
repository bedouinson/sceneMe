import React from 'react';

const ListCard = ({ list }) => {
  const firstMedia = list.items[0];

  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/original${firstMedia.poster}`}
        alt={firstMedia.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{list.title}</h2>
      </div>
    </div>
  );
};

export default ListCard;