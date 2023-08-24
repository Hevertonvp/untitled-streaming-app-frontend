import Layout from '../components/homepage/Layout';
import Main from '../components/homepage/main';
import LoginForm from '../components/homepage/login-form';

function HomePage() {
  return (
    <div className="HomePage">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default HomePage;
