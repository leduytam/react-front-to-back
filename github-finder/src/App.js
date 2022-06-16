import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { GithubProvider } from './contexts';
import { AboutPage, HomePage, NotFoundPage } from './pages';
import routes from './routes';

function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className='flex flex-col justify-between h-screen'>
          <Header />

          <main className='container mx-auto pb-12'>
            <Routes>
              <Route path={routes.home.path} element={<HomePage />} />
              <Route path={routes.about.path} element={<AboutPage />} />
              <Route path={routes.notfound.path} element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
