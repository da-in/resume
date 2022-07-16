// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ContactScreen from './screens/ContactScreen';
import MainScreen from './screens/MainScreens';
import ProjectScreen from './screens/ProjectScreen';
import SkillScreen from './screens/SkillScreen';
import TimelineScreen from './screens/TimelineScreen';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainScreen />
            <SkillScreen />
            <TimelineScreen />
            <ProjectScreen />
            <ContactScreen />
        </ThemeProvider>
    );
}

export default App;
