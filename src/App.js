// import './App.css';
import Tabs from './Components/TabComponent/Tabs';
import PersonalDetails from './Components/PersonalDetails';
import MultiStepProgressBar from './Components/MultiStepProgressBar/MultiStepProgressBar';
function App() {
  return (
    <div className='container'>
      <Tabs>
          <MultiStepProgressBar/>
          <PersonalDetails />
      </Tabs>
    </div>
  );
}

export default App;
