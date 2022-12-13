import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoverPassword from '../containers/RecoverPassword';
import '../styles/global.css'

const App = () => {
    return (
        <Layout>
            <Login/>
            <RecoverPassword/>
        </Layout>
    );
}

export default App;