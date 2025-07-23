import Calendar from './widgets/calendar/ui/Calendar';
import Sidebar from './widgets/sidebar/ui/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default App;
