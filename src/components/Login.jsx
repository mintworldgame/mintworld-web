import React from 'react';
import { useState } from 'react';
import Spinner from 'react-activity/dist/Spinner';
import 'react-activity/dist/Spinner.css';

const Login = ({ onLogin, text }) => {
    const [isConnecting, seIsConnecting] = useState(false);
    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert('No Ethereum browser detected! Check out MetaMask');
        }
        return provider;
    };

    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.log('Not window.ethereum provider. Do you have multiple wallets installed ?');
            }
            seIsConnecting(true);
            await provider.request({
                method: 'eth_requestAccounts'
            });
            seIsConnecting(false);
            onLogin(provider);
        }
    };
    return (
        <div>
            {!isConnecting ? (
                <button onClick={onLoginHandler} className="p-3">
                    {text}
                </button>
            ) : (
                <Spinner className="center-container" size={30} color="#98ff98" />
            )}
        </div>
    );
};

export default Login;
