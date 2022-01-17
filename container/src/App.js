import { Routes, Route, NavLink } from 'react-router-dom';

import NotMicroPage from './app/components/NotMicro';
import MicroFrontendReact from './app/components/MicroFrontendContainer';

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
          <li>
            <NavLink to="micro-vue">MicroVue</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route index element={<main>Main</main>} />
        <Route path="not-micropage" element={<NotMicroPage />} />
        <Route
          path="micro-react"
          element={
            <MicroFrontendReact
              host="http://localhost:3001"
              methodName="MicroReact"
              targetId="MicroReact"
            />
          }
        />
        <Route
          path="micro-vue"
          element={
            <MicroFrontendReact
              host="http://localhost:3002"
              methodName="MicroVue"
              targetId="MicroVue"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
