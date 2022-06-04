import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Calendar } from '@mantine/dates';
import React, { useState } from "react";
import { NewsFeeds } from "./trying";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const today = new Date();

export const Cal = () => {
    const [value, setValue] = useState(today);
    // console.log(value)
    return (
        <div className="flex flex-col md:flex-row">
            <section className="dark:bg-gray-900 md:min-h-screen shadow-xl p-8">
                <h1 className="logo">News Archiver</h1>
                <Calendar value={value} onChange={setValue} className='md:sticky md:top-14 dark:bg-gray-100 rounded-xl m-auto' />

            </section>
            <NewsFeeds dates={value} />
        </div>
    )
}






