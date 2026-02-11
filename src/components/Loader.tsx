'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`} id="loader">
      <div className="loader-content">
        <div className="loader-circle"></div>
        <span className="loader-text">Loading...</span>
      </div>
    </div>
  );
}
