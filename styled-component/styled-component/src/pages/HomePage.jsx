import { Outlet } from 'react-router';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
      <main>
        <Header></Header>
      </main>
      {<Outlet />}
    </div>
  );
}

export default HomePage;
