"use client";
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './languageSelector.module.css';
import Cookies from 'js-cookie';

const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';
const langs = [
    { code: 'vi', label: 'lang_vi' },
    { code: 'en', label: 'lang_en' }
];

export default function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en'); // Always 'en' on SSR    
    const [isMounted, setIsMounted] = useState(false); // State to track if the component has mounted
    const componentRef: any = useRef(null); // Ref to check if the click is inside or outside the component

    const handleClickOutside = (event: any) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            // Perform actions when a click outside occurs, e.g., close a dropdown
            setIsOpen(false); // Ensure the dropdown is closed when the component mounts
        }
        // Perform actions when a click inside occurs
        // else {
        //   console.log('Clicked inside MyComponent or on its children!');
        // }
    };

    useEffect(() => {
        const cookieLanguage = Cookies.get(LOCALE_COOKIE_NAME);
        if (cookieLanguage && cookieLanguage !== selectedLanguage) {
            setSelectedLanguage(cookieLanguage);
        }
        setIsMounted(true); // Set the component as mounted after the initial render
        // Add the event listener when the component mounts
        window.addEventListener('click', handleClickOutside);
        // Clean up the event listener when the component unmounts
        // This is crucial to prevent memory leaks        
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    const t = useTranslations('languageSelector');
    const [isOpen, setIsOpen] = useState(false);
    const toggleLanguageList = () => {
        setIsOpen(!isOpen);
    }

    const handleLanguageChange = (lang: string) => {
        if (lang === selectedLanguage) {
            setIsOpen(false); // Close the dropdown if the same language is selected
            return; // If the selected language is already active, do nothing
        }
        // setSelectedLanguage(lang);
        // change to same route with new language
        const currentPath = window.location.pathname;
        const langPrefix = currentPath.split('/');
        langPrefix[1] = lang; // Update the language prefix in the path
        // Join the parts back into a path string
        const newPath = langPrefix.join('/');
        // Update the URL without reloading the page
        window.history.pushState({}, '', newPath);
        // setIsOpen(false); // Close the dropdown after changing the language        
        window.location.reload(); // Reload the page to apply the new language
    }

    return (
        <div className={`${styles.languageSelector}`} ref={componentRef}>
            <button className={`${styles.languageButton} ${isMounted ? styles[selectedLanguage] : 'bg-gray-100 rounded-xl'}`} onClick={toggleLanguageList}></button>
            <ul className={styles.languageList + (isOpen ? ' flex' : ' hidden')}>
                {langs.map(lang => (
                    <li key={lang.code} className={styles.languageItem} onClick={() => { handleLanguageChange(lang.code) }}>
                        <button className={`${styles.languageButton} ${styles[lang.code]}`}></button>
                        <span className={styles.languageLabel}>{t(lang.label)}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}