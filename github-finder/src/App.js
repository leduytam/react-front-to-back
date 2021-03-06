import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Alert, Footer, Header } from './components';
import { AlertProvider, GithubProvider } from './contexts';
import { AboutPage, HomePage, NotFoundPage, UserPage } from './pages';
import routes from './routes';

function App() {
  return (
    <AlertProvider>
      <GithubProvider>
        <BrowserRouter>
          <div className='flex flex-col justify-between h-screen'>
            <Header />

            <main className='container mx-auto pb-12'>
              <Alert />

              <Routes>
                <Route path={routes.home.path} element={<HomePage />} />
                <Route path={routes.about.path} element={<AboutPage />} />
                <Route path={routes.user.path} element={<UserPage />} />
                <Route path={routes.notfound.path} element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </GithubProvider>
    </AlertProvider>
  );
}

export default App;
