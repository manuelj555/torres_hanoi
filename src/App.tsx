import './app.css'
import 'animate.css';
import { Table } from './components/Table'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  return (
    <div className='flex items-center justify-center h-screen bg-violet-900'>
      <DndProvider backend={HTML5Backend}>
        <Table />
      </DndProvider>
    </div>
  )
}

export default App
