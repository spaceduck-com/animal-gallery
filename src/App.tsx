import './App.css'
import { Breadcrumbs } from './components/Breadcrumbs';
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    <>
      <NavigationBar />
      <Breadcrumbs>
        <li>App Library</li>
        <li>The Zoo, inc.</li>
        <li>Animals</li>
      </Breadcrumbs>
      <h1>Animals</h1>
      {/* Gallery goes here... */}
    </>
  )
}

export default App
