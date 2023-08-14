import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

const LandingPage = React.lazy(() => import('landing-page/Module'));

const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <React.Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore/*" element={<Explore />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
