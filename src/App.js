// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import {
    MainContainer,
    MainSectionContainer,
    Margin,
} from './components/Containers';
import Navigation from './components/Navigation';
import Title from './section/Title';
import Intro from './section/Intro';
import Contact from './section/Contact';
import Skill from './section/Skill';
import Project from './section/Project';
import Timeline from './section/Timeline';
import Footer from './section/Footer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Margin>
                <MainContainer>
                    <Navigation />
                    <MainSectionContainer>
                        <Title />
                        <Intro />
                        <Contact />
                        <Skill />
                        <Project />
                        <Timeline />
                    </MainSectionContainer>
                </MainContainer>
                <Footer />
            </Margin>
        </ThemeProvider>
    );
}

export default App;
