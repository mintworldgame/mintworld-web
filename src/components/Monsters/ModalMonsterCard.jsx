import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  animate
} from 'framer-motion';
import { useEffect } from 'react';

export default function ModalMonsterCard({ path, alt, onClick }) {
  const popdown = () => onClick(undefined);
  //initial x and y values for the card
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const controls = useAnimation();
  // assigns new values to the rotate x and y whenever it changes
  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  //updates the x and y in the motion value whenever you hover over the card
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  //initiates the spin movement and adds some props to it, you can adjust the duration or ease for example.
  const spin = {
    rotate: 360,
    transition: {
      duration: 0.5,
      loop: Infinity,
      ease: 'easeInOut'
    }
  };

  useEffect(() => {
    controls.start(spin);
  }, []);

  return (
    <motion.div
      style={{
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }}
    >
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#535353'
        }}
        onClick={popdown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, filter: 'blur(30px)' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        style={{
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          perspective: 400,
          willChange: 'opacity',
          marginTop: -200,
          marginLeft: -200,
          width: 400,
          height: 400,
          borderRadius: 30,
          transformStyle: 'preserve-3d'

        }}
        layout
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          animate(x, 200);
          animate(y, 200);
        }}
        animate={controls}
        layoutId={'card' + alt}
        transition={1.5}
      >
        <motion.img
          className='object-cover h-full w-full'
          src={path}
          alt={alt}
          loading='lazy'
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        />
      </motion.div>
    </motion.div>
  );
}