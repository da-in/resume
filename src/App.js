// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { MainContainer } from './components/Containers';
import Navigation from './components/Navigation';
import MainSection from './section/MainSection';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainContainer>
                <Navigation />
                <MainSection />
            </MainContainer>
        </ThemeProvider>
    );
}

export default App;
