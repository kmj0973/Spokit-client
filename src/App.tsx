import Router from './app/providers/RouterProvider';
import { TQProvider } from './app/providers/TQProvider';

function App() {
  return (
    <TQProvider>
      <Router />
    </TQProvider>
  );
}

export default App;
