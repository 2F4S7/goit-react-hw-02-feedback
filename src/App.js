import MyGit from './MyGit/MyGit';
import './MyGit/MyGit.module.css';
import HeaderSection from './components/Section/Header/Header';
import Feedback from './components/Feedback/Feedback';
import Main from './components/Section/Main/Main';
import Statistics from './components/Statistics/Statistics';

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
      <Main>
        <Statistics />
      </Main>
    </>
  );
}

export default App;
