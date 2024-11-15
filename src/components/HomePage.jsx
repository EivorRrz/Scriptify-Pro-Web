import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HomePage = (props) => {
    const { setAudioStream, setFile } = props;

    const [recordingStatus, setRecordingStatus] = useState('inactive');
    const [audioChunks, setAudioChunks] = useState([]);
    const [duration, setDuration] = useState(0);

    const mediaRecorder = useRef(null);
    const mimeType = 'audio/webm';

    async function startRecording() {
        let tempStream;

        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            });
            tempStream = streamData;
        } catch (err) {
            console.log(err.message);
            return;
        }

        setRecordingStatus('recording');
        const media = new MediaRecorder(tempStream, { type: mimeType });
        mediaRecorder.current = media;

        let localAudioChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === 'undefined' || event.data.size === 0) {
                return;
            }
            localAudioChunks.push(event.data);
        };

        mediaRecorder.current.start();
        setAudioChunks(localAudioChunks);
    }

    async function stopRecording() {
        setRecordingStatus('inactive');
        mediaRecorder.current.stop();

        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            setAudioStream(audioBlob);
            setAudioChunks([]);
            setDuration(0);
        };
    }

    useEffect(() => {
        if (recordingStatus === 'inactive') {
            return;
        }

        const interval = setInterval(() => {
            setDuration(curr => curr + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [recordingStatus]);

    return (
        <motion.main
            className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='font-semibold text-5xl sm:text-6xl md:text-7xl'
                style={{ textShadow: '0px 4px 10px rgba(75, 0, 130, 0.5)', letterSpacing: '0.1em' }}
            >
                ScriptIfy Pro
            </motion.h1>
            <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='font-medium md:text-lg'
                style={{ textShadow: '0px 0px 8px rgba(29, 78, 216, 0.8)' }}
            >
                Capture <span className='text-blue-400'>→</span> Transform <span className='text-blue-400'>→</span> Interpret
            </motion.h3>
            <motion.button
                onClick={recordingStatus === 'recording' ? stopRecording : startRecording}
                className={`flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 ${recordingStatus === 'recording'
                    ? 'hover:bg-red-500 hover:text-white'
                    : 'hover:bg-gray-100 hover:text-indigo-800'
                    }`}
                whileHover={{ scale: 1.05, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
            >
                <p className='text-blue-400'>{recordingStatus === 'inactive' ? 'Record' : 'Stop recording'}</p>
                <div className='flex items-center gap-2'>
                    {/* <p className='text-sm'>{duration}s</p> */}
                    <i className={`fa-solid duration-200 fa-microphone${recordingStatus === 'recording' ? ' text-rose-300' : ''}`}></i>
                </div>
            </motion.button>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className='text-base'
            >
                Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload <input onChange={(e) => {
                    const tempFile = e.target.files[0];
                    setFile(tempFile);
                }} className='hidden' type='file' accept='.mp3,.wave' /></label> a mp3 file
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className='italic text-slate-400'
            >
                Always Free, Always Reliable
            </motion.p>
        </motion.main>
    );
};

export default HomePage;
