import React from 'react';
import { motion } from 'framer-motion';

const Transcribing = (props) => {
    const { downloading } = props;

    return (
        <motion.div
            className='flex items-center flex-1 flex-col justify-center gap-10 md:gap-14 text-center pb-24 p-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className='flex flex-col gap-2 sm:gap-4'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
                    <span className='text-blue-400'>Transcribing</span>
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {!downloading ? 'Preparing for transcription' : 'Transcription in progress'}
                </motion.p>
            </motion.div>
            <motion.div
                className='flex flex-col gap-2 sm:gap-3 max-w-[400px] mx-auto w-full'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {[0, 1, 2].map((val) => (
                    <motion.div
                        key={val}
                        className={`rounded-full h-2 sm:h-3 bg-slate-400 loading loading${val}`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
                    ></motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Transcribing;
