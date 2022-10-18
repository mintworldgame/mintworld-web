import React from 'react';
import { useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { AiOutlineAndroid } from 'react-icons/ai';

const unityContext = new UnityContext({
    loaderUrl: 'build/FinalTestv4.loader.js',
    dataUrl: 'build/FinalTestv4.data',
    frameworkUrl: 'build/FinalTestv4.framework.js',
    codeUrl: 'build/FinalTestv4.wasm'
});

const UnityDummy = () => {
    const [progression, setProgression] = useState(0);
    const [isloaded, setIsLoaded] = useState(false);

    unityContext.on('progress', (progression) => {
        setProgression(progression);
    });

    unityContext.on('loaded', () => {
        setIsLoaded(true);
    });

    return (
        <div>
            <a button type="button" href="https://play.google.com/store/apps/details?id=com.MintWorld.MintWorld" target="_blank" rel="noreferrer" class="btn btn-outline-info">
                <AiOutlineAndroid /> Android Version
            </a>
            <p style={{ visibility: `${isloaded ? 'hidden' : 'visible'}` }} className="text-center">{`Loading... ${progression * 100}%`}</p>
            <Unity style={{ width: '960px', height: '600px', visibility: `${isloaded ? 'visible' : 'hidden'}` }} unityContext={unityContext} />
        </div>
    );
};

export default UnityDummy;
