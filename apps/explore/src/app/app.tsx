// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import '../styles.scss';

import { Route, Routes } from 'react-router-dom';
import ExploreIndex from '../Pages/Explore/ExploreIndex/ExploreIndex';
import Cart from '../Pages/Cart';

export function App() {
  return (
    <Routes>
      <Route path="/" Component={ExploreIndex} />
      <Route path="/cart" Component={Cart} />
    </Routes>
  );
}

export default App;
