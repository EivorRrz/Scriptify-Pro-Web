import React from 'react';
import { motion } from 'framer-motion';
import { LANGUAGES } from '../utils/presets';

export default function Translation(props) {
    const { textElement, translatedText, toLanguage, translating, setToLanguage, generateTranslation } = props;

    return (
        <>
            {translating && (
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center text-xl text-gray-800 mt-6 mb-4'
                >
                    Translating...
                </motion.p>
            )}

            {!translating && textElement && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='text-center text-xl text-gray-800 mt-6 mb-4'
                >
                    <p className='mb-2'>{textElement}</p>
                    <p className='text-lg font-semibold text-blue-600'>{translatedText}</p>
                </motion.div>
            )}

            {!translating && (
                <motion.div
                    className='flex flex-col gap-1 mb-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p className='text-xs sm:text-sm font-medium text-slate-500 mr-auto'>To language</p>
                    <motion.div
                        className='flex items-stretch gap-2 sm:gap-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <select
                            value={toLanguage}
                            className='flex-1 outline-none w-full focus:outline-none bg-white duration-200 p-2 rounded'
                            onChange={(e) => setToLanguage(e.target.value)}
                        >
                            <option value={'Select language'}>Select language</option>
                            {Object.entries(LANGUAGES).map(([key, value]) => (
                                <option key={key} value={value}>{key}</option>
                            ))}
                        </select>
                        <motion.button
                            onClick={generateTranslation}
                            className='specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                        >
                            Translate
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
