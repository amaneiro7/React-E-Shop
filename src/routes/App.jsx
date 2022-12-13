import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoverPassword from '../containers/RecoverPassword';
import '../styles/global.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoverPassword />} />
                    <Route path='*' element={<NotFound />} />
                </Layout>
            </Routes>            
        </BrowserRouter> 
    );
}

export default App;