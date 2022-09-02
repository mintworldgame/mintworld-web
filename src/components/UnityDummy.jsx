import React from 'react';
import { useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: 'build/FinalVersion.loader.js',
    dataUrl: 'build/FinalVersion.data',
    frameworkUrl: 'build/FinalVersion.framework.js',
    codeUrl: 'build/FinalVersion.wasm'
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
            <p style={{ visibility: `${isloaded ? 'hidden' : 'visible'}` }} className="text-center">{`Loading... ${progression * 100}%`}</p>
            <Unity style={{ width: '960px', height: '600px', visibility: `${isloaded ? 'visible' : 'hidden'}` }} unityContext={unityContext} />
        </div>
    );
};

export default UnityDummy;
