import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoverPassword from '../containers/RecoverPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoverPassword />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>            
            </Layout>
        </BrowserRouter> 
    );
}

export default App;