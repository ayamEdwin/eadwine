import React from 'react';
import MagicWandButton from '@site/src/components/MagicWandButton';

export default function Root({ children }) {
  React.useEffect(() => {
    console.log('Root component mounted');
  }, []);

  return (
    <>
      <MagicWandButton />
      {children}
    </>
  );
}
