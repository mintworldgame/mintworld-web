import Box from './components/Box';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { BsTelegram, BsDiscord } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import CookieConsent from 'react-cookie-consent';
import Footer from './components/Footer';
import { BoxData, TextBoxData } from './data/DummyData';
import React from 'react';
import UnityDummy from './components/UnityDummy';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <p className="main-text d-flex justify-content-center">
                            <br></br>
                            Welcome to <br></br>Mint World
                        </p>
                        <h3 className="d-flex justify-content-center">Catch, Fight, and Collect Monsters!</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 main-image">
                        <img src="./logo.png" className="img-fluid w-75" alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-2 py-lg-5 info">
                    <div className="col-lg-12 py-4 d-flex justify-content-center">
                        <h1 className="main-font">Monsters</h1>
                    </div>
                    {BoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center">
                                <Box Img={item.img} Text={item.text} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="container">
                <div className="center-text">
                    <h3 className="main-font about">Start your Journey</h3>
                </div>
                <div className="row py-2 py-lg-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <p className="about-p">Claim your free daily Monster NFT via the Mint World Faucet Game, if you're lucky you can catch one of the four shiny monsters</p>
                        <p className="about-p">Release ten common Monsters to receive one MintWorldGame Coin</p>
                        <p className="about-p">Be one of the very first MintPlayers to unlock new content</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 main-image">
                        <img src="./img/dragon.gif" className="img-fluid w-50" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row py-2 py-lg-5 play">
                    <div className="col-lg-12 py-4 d-flex justify-content-center">
                        <h2 className="main-font">Play MintWorld v0 (Polygon)</h2>
                    </div>
                    <div className="col-lg-12 py-4 d-flex justify-content-center">
                        <UnityDummy />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row py-2 py-lg-5 justify-content-center">
                    {TextBoxData.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-3 d-flex justify-content-center ">
                                <TextBox Title={item.title} Desc={item.desc} />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2 py-lg-5 community">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <div className="mb-4 d-flex justify-content-between">
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://discord.gg/vkjrn2a84R" target="_blank" className="social-link" rel="noreferrer">
                                    <BsDiscord size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center me-5 p-2">
                                <a href="https://twitter.com/MintWorldGG" target="_blank" className="social-link" rel="noreferrer">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </div>
                            <div className="round d-flex justify-content-center align-items-center p-2">
                                <a href="https://t.me/mintworldgame" target="_blank" className="social-link" rel="noreferrer">
                                    <BsTelegram size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Understood"
                cookieName="myAwesomeCookieName2"
                style={{ background: '#2B373B', textAlign: 'center' }}
                buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
                expires={150}
            >
                This website uses cookies to enhance the user experience
            </CookieConsent>
            <Footer />
        </div>
    );
}

export default App;
