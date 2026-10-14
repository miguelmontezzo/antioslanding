import { Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { EditKeyGate } from './components/EditKeyGate';
import LandingPage from './pages/LandingPage';
import EditPage from './pages/EditPage';

export default function App() {
  return (
    <ContentProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/edit"
          element={
            <EditKeyGate>
              <EditPage />
            </EditKeyGate>
          }
        />
      </Routes>
    </ContentProvider>
  );
}
