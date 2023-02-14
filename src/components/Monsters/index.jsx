import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react'

import MonsterCard from './MonsterCard.jsx'
import ModalMonsterCard from './ModalMonsterCard.jsx'


const nfts = [{ path: '/img/Watery-web.png', alt: 'Watery' }, { path: '/img/Windry-web.png', alt: 'Windry' }, { path: '/img/Octopus-web.png', alt: 'Octopus' }, { path: '/img/Wingron-web.png', alt: 'Wingron' }, { path: '/img/Stoneman-web.png', alt: 'Stoneman' }, { path: '/img/Lavagron-web.png', alt: 'Lavagron' }]

const Monsters = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div className='container'>
      {/* This is what makes the two animations smoothly transition into eachother */}
      <AnimateSharedLayout type='crossfade'>
        <div className='grid-cols-6 gap-4 flex flex-col sm:flex-row'>
          <div className='col-span-6'>
            <p>
              Claim your free daily Monster NFT via the Mint World Faucet Game. If
              you're lucky you can catch one of the 4 rare shiny monsters. Release
              10 common Monsters to receive 1 free MintWorldGame Coin ($MWG) Be
              one of the very first MintPlayers to unlock new content
            </p>
            <p>
              <a href='/play/' className='button color-success mt-8'>
                Start Your Journey
              </a>
            </p>
          </div>
          <div
            className='grid grid-cols-4 gap-4'
          >
            {/* Mapping over the nfts array so you have just one monstercard component that will render for each image in the list */}
            {nfts.map((item, index) => (
              <div key={item.alt + index} className='col-span-4' onClick={() => setSelectedCard(item)}>
                <MonsterCard path={item.path} alt={item.alt} />
              </div>
            ))}
          </div>
          {/* Helps the animation to smoothly appear when made visible */}
          <AnimatePresence>
            {selectedCard ? (
              <ModalMonsterCard
                alt={selectedCard.alt}
                path={selectedCard.path}
                onClick={setSelectedCard}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Monsters;
