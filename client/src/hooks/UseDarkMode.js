import {UseLocalStorage} from './UseLocalStorage';
import {useEffect} from 'react';

export const UseDarkMode = () => {
    const [value, setValue] = UseLocalStorage('darkMode');
    useEffect(() => {
        if(value) {
            window.document.body.classList.add('dark-mode')
        } else {
            window.document.body.classList.remove('dark-mode')
        }
    }, [value])
    return [value, setValue]
}