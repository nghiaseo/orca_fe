"use client";
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './languageSelector.module.css';
const langs = [
    { code: 'vi', label: 'lang_vi' },
    { code: 'en', label: 'lang_en' }
];
export default function LanguageSelector() {
    const componentRef: any = useRef(null); // Ref to check if the click is inside or outside the component

    const handleClickOutside = (event: any) => {
        // Check if the click occurred outside of this component
        // current property of the ref is null if the component is not mounted
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
        // Add the event listener when the component mounts
        window.addEventListener('click', handleClickOutside);
         // get language from localStorage
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {            
            setSelectedLanguage(storedLanguage);
        } else {
            // If no language is stored, default to English
            // Set the initial language based on the browser's language setting
            // const browserLanguage = navigator.language;
            // const langCode = browserLanguage.startsWith('vi') ? 'vi' : 'en';            
            // setSelectedLanguage(langCode);
        }

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
    const [selectedLanguage, setSelectedLanguage] = useState(''); // Default to English
    const handleLanguageChange = (lang: string) => {
        if (lang === selectedLanguage) {
            setIsOpen(false); // Close the dropdown if the same language is selected
            return; // If the selected language is already active, do nothing
        }
        setSelectedLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
        // change to same route with new language
        const currentPath = window.location.pathname;        
        const langPrefix = currentPath.split('/'); 
        langPrefix[1] = lang; // Update the language prefix in the path
        // Join the parts back into a path string
        const newPath = langPrefix.join('/');        
        // Update the URL without reloading the page
        window.history.pushState({}, '', newPath);
        setIsOpen(false); // Close the dropdown after changing the language        
        window.location.reload(); // Reload the page to apply the new language
    }    


    return (
        <div className={`${styles.languageSelector}`} ref={componentRef}>
            <button className={`${styles.languageButton} ${styles[selectedLanguage]}`} onClick={toggleLanguageList}></button>
            <ul className={styles.languageList + (isOpen ? ' flex' : ' hidden')}>
                {langs.map(lang => (
                    <li key={lang.code} className={styles.languageItem} onClick={() => { handleLanguageChange(lang.code)}}>
                        <button className={`${styles.languageButton} ${styles[lang.code]}`}></button>
                        <span className={styles.languageLabel}>{t(lang.label)}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}