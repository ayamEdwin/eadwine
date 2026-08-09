import React from 'react';

export default function Root({ children }) {
  React.useEffect(() => {
    console.log('Root component mounted');
  }, []);

  return <>{children}</>;
}
