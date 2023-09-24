import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'routes';
import { Container, Head, Link } from './HeaderStyled';

const Header = () => {
  return (
    <div>
      <Container>
        <Head>
          <nav>
            <Link to={routes.HOME}>Home</Link>
            <Link to={routes.MOVIES}>Movies</Link>
          </nav>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Head>
      </Container>
    </div>
  );
};

export default Header;
