// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import MainSection from './section/MainSection';
import ProjectSection from './section/ProjectSection';
import SkillSection from './section/SkillSection';
import TimelineSection from './section/TimelineSection';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainSection />
            <SkillSection />
            <ProjectSection />
            <TimelineSection />
        </ThemeProvider>
    );
}

export default App;
