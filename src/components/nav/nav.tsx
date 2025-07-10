import { Link } from '@/i18n/navigation';
import styles from './nav.module.css';
import {useTranslations} from 'next-intl';
import { MenuItem } from '@/interfaces';

export default function OrcaNav({ items }:{items:MenuItem[]}) {
    const t = useTranslations('home');
    return (
        <nav className="flex items-center justify-center">
            <ul className={styles.navMenu}>
                {items.map(item => (
                    <li key={item.key} className={`${styles.navMenuItem} ${item.disabled ? styles.disabled : ''} ${item.isActive ? styles.active : ''}`}>
                            <span className={styles.navMenuItemText}>{t(item.label)}</span>
                        {item.children && item.children.length > 0 && (
                            <ul className={styles.navSubMenu}>
                                {item.children.map(subItem => (subItem.href&&!subItem.disabled?
                                <Link key={subItem.key} href={subItem.href}>
                                    <li  className={`${styles.navSubMenuItem} ${subItem.disabled ? styles.disabled : ''} ${subItem.isActive ? styles.active : ''}`}>
                                        <span className={subItem.isActive ? styles.active : ''}>{t(subItem.label)}</span>
                                    </li></Link>:
                                    <li key={subItem.key} className={`${styles.navSubMenuItem} ${subItem.disabled ? styles.disabled : ''} ${subItem.isActive ? styles.active : ''}`}>
                                        <span className={subItem.isActive ? styles.active : ''}>{t(subItem.label)}</span>
                                    </li>
                                ))}
                            </ul>
                        )}                     
                    </li>
                ))}
            </ul>
        </nav>
    );
}