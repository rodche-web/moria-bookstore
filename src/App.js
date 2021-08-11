import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/cart'>
                    <ShoppingCart />
                </Route>
                <Route path='/about'>
                    <AboutPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
