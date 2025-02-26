'use client';
import React from 'react'
import styles from './style.module.css';

export default function Index({index, title, setModal}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>Full Stack Application</p>
        </div>
    )
}