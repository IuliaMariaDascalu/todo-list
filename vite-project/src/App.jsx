import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Tasks from './pages/Tasks';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='tasks' element={<Tasks />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;