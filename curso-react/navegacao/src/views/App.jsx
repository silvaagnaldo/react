import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

function App(props) {
    return(
        <div className='App'>
            <BrowserRouter>
                <Menu />
                <Content />
             </BrowserRouter>
        </div>
    )
}

export default App;