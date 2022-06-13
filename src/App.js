import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import TechStack from "./components/TechStack/TechStack";
//componrtn to be made
// 1. navbar
// 2. about
// 3. tech stack
// 4. experience
// 5. projects
function App()
{
    return (
        
        <div classsName="App">
            <Navbar/>
            <About/>
            <TechStack />
        </div>
    );
}

export default App;