'use client';

import React, { useEffect, useState } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=> {
        const scroll = ()=> {
            const position = window.scrollY || document.documentElement.scrollTop;
            setScrollPosition(position);
        }

        window.addEventListener('scroll', scroll);
    }, [])

    return scrollPosition;
}

export default useScrollPosition