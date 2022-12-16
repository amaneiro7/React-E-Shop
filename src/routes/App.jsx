import React from 'react';
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';
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
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="React-E-Shop/" element={<Home />} />
                        <Route path="React-E-Shop/Home" element={<Home />} />
                        <Route path="React-E-Shop/Login" element={<Login />} />
                        <Route path="React-E-Shop/recovery-password" element={<RecoverPassword />} />
                        <Route path='React-E-Shop/send-email' element={<SendEmail />} />
                        <Route path='React-E-Shop/new.password' element={<NewPassword />} />
                        <Route path='React-E-Shop/account' element={<MyAccount />} />
                        <Route path='React-E-Shop/signup' element={<CreateAccount />} />
                        <Route path='React-E-Shop/checkout' element={<Checkout />} />
                        <Route path='React-E-Shop/orders' element={<Orders />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>            
                </Layout>
            </BrowserRouter> 
        </AppContext.Provider>
        );
}

export default App;