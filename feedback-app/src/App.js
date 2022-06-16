import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutIconLink,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header
} from './components';
import { FeedbackProvider } from './contexts';
import { AboutPage } from './pages';
import './styles/App.css';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header text='Feedback UI' />

        <div className='feedback-container'>
          <Routes>
            <Route
              index
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
