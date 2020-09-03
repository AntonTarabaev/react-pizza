import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => {
  return (
    <ContentLoader className="pizza-card" speed={2} viewBox="0 0 280 526" height={526}>
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="260" rx="6" ry="6" width="280" height="25" />
      <rect x="0" y="300" rx="6" ry="6" width="280" height="65" />
      <rect x="0" y="385" rx="6" ry="6" width="280" height="80" />
      <rect x="0" y="487" rx="6" ry="6" width="90" height="30" />
      <rect x="140" y="480" rx="25" ry="25" width="140" height="44" />
    </ContentLoader>
  );
};

export default Loader;
