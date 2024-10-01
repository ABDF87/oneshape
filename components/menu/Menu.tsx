import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Menu = () => {
  const [activePage, setActivePage] = useState('');
  const [deployedServiceMenu, setDeployedServiceMenu] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  // const showServiceMenuHandler = () => {
  //   setDeployedServiceMenu(!deployedServiceMenu);
  // };

  useEffect(() => {
    setActivePage(pathName);
  }, [pathName]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.deployedMenuContainer}>
        {/* <div className={styles.serviceSubMenuContainer}>
          <div
            className={ styles.menuItem}
            onMouseEnter={showServiceMenuHandler}
          >
            <Link href=''>Послуги</Link>
          </div>
          {deployedServiceMenu && (
            <div
              className={styles.deployedServiceMenuContainer}
              onMouseLeave={showServiceMenuHandler}
            >
              <div className={styles.serviceMenuSubItem}>
                <Link href='/massage'>Масаж</Link>
              </div>
              <div className={styles.serviceMenuSubItem}>
                <Link href='/manicure'>Манікюр</Link>
              </div>
              <div className={styles.serviceMenuSubItem}>
                <Link href='/about'>Косметологія</Link>
              </div>
            </div>
          )}
        </div> */}
             <div className={activePage === '/' ?  styles.activeMenuItem : styles.menuItem}>
          <Link href='/'>Головна</Link>
        </div>
           <div className={activePage === '/prices' ?  styles.activeMenuItem : styles.menuItem}>
          <Link href='/prices'>Ціни</Link>
        </div>
        <div className={activePage === '/massage' ?  styles.activeMenuItem : styles.menuItem}>
        <Link href='/massage'>Масаж</Link>
        </div>
        {/* <div className={activePage === '/manicure' ?  styles.activeMenuItem : styles.menuItem}>
        <Link href='/manicure'>Манікюр</Link>
        </div> */}

  
        <div className={activePage === '/courses/massage' ?  styles.activeMenuItem : styles.menuItem}>
          <Link href='/courses/massage'>Навчання</Link>
        </div>
        <div className={activePage === '/contact' ?  styles.activeMenuItem : styles.menuItem}>
          <Link href='/contact'>Контакти</Link>
        </div>
      </div>
    </main>
  );
};

export default Menu;
