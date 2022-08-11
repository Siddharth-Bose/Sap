// import './App.css';
import Tabs from './Components/TabComponent/Tabs';
import PersonalDetails from './Components/PersonalDetails';
import MultiStepProgressBar from './Components/MultiStepProgressBar/MultiStepProgressBar';
function App() {
  return (
    <div className='container'>
      <h1 className="m-4">Account Setup</h1>
      <Tabs>
          <MultiStepProgressBar/>
          <PersonalDetails />
      </Tabs>
    </div>
  );
}

export default App;
