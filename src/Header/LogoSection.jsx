import React from 'react';

const LogosSection = () => {
  const logos = [
    {
      id: 533,
      url: 'http://theme.creativemox.com/cinemox/wp-content/uploads/sites/23/2024/03/Netflix.png',
      alt: 'Netflix',
    },
    {
      id: 534,
      url: 'http://theme.creativemox.com/cinemox/wp-content/uploads/sites/23/2024/03/Sony.png',
      alt: 'Sony',
    },
    {
      id: 535,
      url: 'http://theme.creativemox.com/cinemox/wp-content/uploads/sites/23/2024/03/Spotify.png',
      alt: 'Spotify',
    },
    {
      id: 536,
      url: 'http://theme.creativemox.com/cinemox/wp-content/uploads/sites/23/2024/03/Vimeo.png',
      alt: 'Vimeo',
    },
    {
      id: 537,
      url: 'http://theme.creativemox.com/cinemox/wp-content/uploads/sites/23/2024/03/Walmart.png',
      alt: 'Walmart',
    },
  ];

  return (
    <div className="bg-[#2F3845] pt-3 pb-3 md:pt-1 md:pb-1">
      <div className="w-full flex items-center justify-center space-x-6 mx-auto md:gap-6 md:flex  md:items-center md:justify-center md:space-x-10">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.url}
            alt={logo.alt}
            className="h-10 md:h-24 opacity-75 hover:opacity-10 transition-opacity "
          />
        ))}
      </div>
    </div>
  );
};

export default LogosSection;
