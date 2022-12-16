import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
import '@styles/global.css';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import RecoverPassword from '@pages/RecoverPassword';
import SendEmail from '@pages/SendEmail';
import NotFound from '@pages/NotFound';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState }>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/recovery-password" element={<RecoverPassword />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/new.password' element={<NewPassword />} />
                        <Route path='/account' element={<MyAccount />} />
                        <Route path='/signup' element={<CreateAccount />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>            
                </Layout>
            </BrowserRouter> 
        </AppContext.Provider>
        );
}

export default App;