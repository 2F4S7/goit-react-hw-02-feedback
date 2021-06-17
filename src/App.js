import MyGit from './MyGit/MyGit';
import './MyGit/MyGit.module.css';
import HeaderSection from './components/Section/Header/Header';
import Feedback from './components/Feedback/Feedback';

function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  return (
    <>
      <MyGit title="React Home Work Feedback 02" />
      <HeaderSection title="Pleaseleave feeedback">
        <Feedback />
      </HeaderSection>
    </>
  );
}

export default App;
