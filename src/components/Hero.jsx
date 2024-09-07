// import React from 'react'
// import { motion } from 'framer-motion'
// import {styles} from '../styles'
// import { ComputersCanvas } from './canvas'
// import Type from './Type'
// import { SectionWrapper } from '../hoc'
// const Hero = () => {
  
//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-green-600'/>
//           <div className='w-1 sm:h-80 h-40 green-gradient'/>
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-green-500'>Bishwayan</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
//             <Type/>
//             </p>
//         </div>
//       </div>
//       <ComputersCanvas/>
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-10'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-tertiary mb-1'
//             />
//           </div>
//         </a>
//       </div>
    
//     </section>
//   )
// }

// export default Hero













// import React from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import Type from './Type';
// import { SectionWrapper } from '../hoc';
// import {myheroimg} from '../assets'

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-between pt-[110px]'>
//       <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start gap-5`}>
        
//         <div className='text-center sm:text-left flex flex-col items-center sm:items-start'>
//           <div className='flex flex-row items-start sm:justify-start'>
//             <div className='flex flex-col justify-center items-center mt-5 mr-4'>
//               <div className='w-5 h-5 rounded-full bg-green-600'/>
//               <div className='w-1 sm:h-80 h-40 green-gradient'/>
//             </div>
//             <div>
//               <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-green-500'>Bishwayan</span></h1>
//               <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//                 <Type />
//               </p>
//               <p className="mt-4 text-white-100 max-w-lg">
//                 I am a passionate developer with a knack for creating innovative solutions.
//                 I specialize in full-stack development and enjoy working on projects that challenge my skills and creativity.
//                 When I'm not coding, you can find me exploring new technologies, learning something new, or enjoying a good book.
//               </p>
//             </div>
//           </div>
//         </div>

//         <motion.div 
//           className='flex justify-center items-center mt-10 sm:mt-0'
//           whileTap={{ rotate: 10 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           <div className='rounded-full overflow-hidden shadow-lg transform transition-all duration-500 bg-gradient-to-r from-gray-200 via-white to-gray-200 p-1 hover:shadow-xl'>
//             <motion.img 
//               src={myheroimg} 
//               alt='Your Name'
//               className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-full'
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ rotate: -10, scale: 0.95 }}
//             />
//           </div>
//         </motion.div>

//       </div>

//       {/* Div for Desktop/Laptop View */}
//       <div className='hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center mt-10'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//               className='w-3 h-3 rounded-full bg-tertiary mb-1'
//             />
//           </div>
//         </a>
//       </div>

//       {/* Div for Mobile View */}
//       <div className='flex sm:hidden w-full justify-center items-center mt-10'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//               className='w-3 h-3 rounded-full bg-tertiary mb-1'
//             />
//           </div>
//         </a>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import Type from './Type';
// import { SectionWrapper } from '../hoc';
// import { myheroimg } from '../assets';

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-between pt-[110px]'>
//       <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start gap-5`}>
        
//         <div className='text-left sm:text-left flex flex-col items-start sm:items-start'>
//           <div className='flex flex-row items-start sm:justify-start'>
//             <div className='flex flex-col justify-center items-center mt-5 mr-4'>
//               <div className='w-5 h-5 rounded-full bg-green-600'/>
//               <div className='w-1 sm:h-80 h-40 green-gradient'/>
//             </div>
//             <div>
//               <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-green-500'>Bishwayan</span></h1>
//               <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//                 <Type />
//               </p>
//               <p className="mt-4 text-white-100 max-w-lg">
//                 I am a passionate developer with a knack for creating innovative solutions.
//                 I specialize in full-stack development and enjoy working on projects that challenge my skills and creativity.
//                 When I'm not coding, you can find me exploring new technologies, learning something new, or enjoying a good book.
//               </p>
//             </div>
//           </div>
//         </div>

//         <motion.div 
//           className='flex justify-center items-center mt-10 sm:mt-0'
//           whileTap={{ rotate: 10 }}
//           transition={{ type: 'spring', stiffness: 300 }}
//         >
//           <div className='rounded-full overflow-hidden shadow-lg transform transition-all duration-500 bg-gradient-to-r from-gray-200 via-white to-gray-200 p-1 hover:shadow-xl'>
//             <motion.img 
//               src={myheroimg} 
//               alt='Your Name'
//               className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-cover rounded-full'
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ rotate: -10, scale: 0.95 }}
//             />
//           </div>
//         </motion.div>

//       </div>

//       {/* Div for Desktop/Laptop View */}
//       <div className='hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center mt-10'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//               className='w-3 h-3 rounded-full bg-tertiary mb-1'
//             />
//           </div>
//         </a>
//       </div>

//       {/* Div for Mobile View */}
//       <div className='flex sm:hidden w-full justify-center items-center mt-10'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//               className='w-3 h-3 rounded-full bg-tertiary mb-1'
//             />
//           </div>
//         </a>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;












import React from 'react';
import { motion } from 'framer-motion';
import  Tilt  from 'react-parallax-tilt';  // Ensure this library is installed
import { styles } from '../styles';
import Type from './Type';
import { SectionWrapper } from '../hoc';
import { myheroimgg } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-between pt-[110px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start gap-5`}>
        
        <div className='text-left sm:text-left flex flex-col items-start sm:items-start'>
          <div className='flex flex-row items-start sm:justify-start'>
            <div className='flex flex-col justify-center items-center mt-5 mr-4'>
              <div className='w-5 h-5 rounded-full bg-green-600'/>
              <div className='w-1 sm:h-80 h-40 green-gradient'/>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-green-500'>Bishwayan</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                <Type />
              </p>
              <p className="mt-4 text-white-100 max-w-lg">
                I am a passionate developer with a knack for creating innovative solutions.
                I specialize in full-stack development and enjoy working on projects that challenge my skills and creativity.
                When I'm not coding, you can find me exploring new technologies, learning something new, or enjoying a good book.
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          className='flex justify-center items-center mt-10 sm:mt-0'
          whileTap={{ rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Tilt effect wrapper for hero image */}
          <Tilt 
            className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-gradient-to-r from-gray-200 via-white to-gray-200 p-1 rounded-full shadow-lg hover:shadow-xl'
            tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={450}
          >
            <motion.img 
              src={myheroimgg} 
              alt='Your Name'
              className='w-full h-full object-cover rounded-full'
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: -10, scale: 0.95 }}
            />
          </Tilt>
        </motion.div>

      </div>

      {/* Div for Desktop/Laptop View */}
      <div className='hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center mt-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-tertiary mb-1'
            />
          </div>
        </a>
      </div>

      {/* Div for Mobile View */}
      <div className='flex sm:hidden w-full justify-center items-center mt-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-tertiary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;

