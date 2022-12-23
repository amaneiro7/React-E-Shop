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
import '@styles/globals.css'

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter basename='/React-E-Shop'>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
<<<<<<< HEAD
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/recovery-password" element={<RecoverPassword />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/new.password' element={<NewPassword />} />
                        <Route path='/account' element={<MyAccount />} />
                        <Route path='/signup' element={<CreateAccount />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/orders' element={<Orders />} />
=======
                        <Route path="/#Home" element={<Home />} />
                        <Route path="/#Login" element={<Login />} />
                        <Route path="/#recovery-password" element={<RecoverPassword />} />
                        <Route path='/#send-email' element={<SendEmail />} />
                        <Route path='/#new.password' element={<NewPassword />} />
                        <Route path='/#account' element={<MyAccount />} />
                        <Route path='/#signup' element={<CreateAccount />} />
                        <Route path='/#checkout' element={<Checkout />} />
                        <Route path='/#orders' element={<Orders />} />
>>>>>>> 7adcaf6320637693476978fc29cbfc7f48f16a5f
                        <Route path='*' element={<NotFound />} />
                    </Routes>            
                </Layout>
            </BrowserRouter> 
        </AppContext.Provider>
        );
}

export default App;