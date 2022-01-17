import { Routes, Route, NavLink } from 'react-router-dom';

import NotMicroPage from './app/components/NotMicro';
import MicroFrontendContainer from './app/components/MicroFrontendContainer';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="not-micropage">NotMicroPage</NavLink>
          </li>
          <li>
            <NavLink to="micro-react">MicroReact</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route index element={<main>Main</main>} />
        <Route path="not-micropage" element={<NotMicroPage />} />
        <Route
          path="micro-react"
          element={
            <MicroFrontendContainer
              host="http://localhost:3001"
              renderMethodName="renderMicroReact"
              targetId="MicroReact"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
