import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  animate
} from 'framer-motion';

const MonsterCard = ({ path, alt }) => {
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
  return (
    <motion.div
      className='col-span-4'
      layout
      //important the layout id is what lets she animatedsharedlayout in index now which components to animate together with
      layoutId={'card' + alt}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 400,
        display: "flex",
        placeItems: "center",
        placeContent: "center",

      }}
      onMouseMove={handleMouse}
      //puts the card back to its original position, 
      //note that here you can see the duration declared and not in the modal monster card
      // that is because it causes some unwanted behaviour when the card is presented as a modal when adding duration there, here is fine
      onMouseLeave={() => {
        animate(x, 200, {
          duration: 1
        });
        animate(y, 200, {
          duration: 1
        });
      }}
      animate={controls}
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
  )
}

export default MonsterCard;