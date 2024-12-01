import { Outlet } from 'react-router';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
      <main>
        <Header></Header>
        {<Outlet />}
      </main>
    </div>
  );
}

export default HomePage;
