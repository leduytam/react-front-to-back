import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Explore, Offers, Profile, SignIn, SignUp, ForgotPassword } from './pages'
import { Navbar } from './components';
import routes from './routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routes.explore.path} element={<Explore />} />
          <Route path={routes.offers.path} element={<Offers />} />
          <Route path={routes.profile.path} element={<SignIn />} />
          <Route path={routes.signIn.path} element={<SignIn />} />
          <Route path={routes.signUp.path} element={<SignUp />} />
          <Route path={routes.forgotPassword.path} element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
