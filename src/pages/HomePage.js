import { Outlet } from 'react-router-dom';
import Layout from '../components/homepage/Layout';
import Login from '../components/registerLoginForm/login';
import BlurBg from '../components/homepage/blurBg';
import Main from '../components/homepage/main';

function HomePage() {
  return (
    <>
      <Layout>
        <Login />
        <BlurBg>
          <Outlet />
        </BlurBg>
      </Layout>
    </>
  );
}

export default HomePage;
