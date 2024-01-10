import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Menu from '../menu/Menu';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import MobileMenu from '../mobile_menu/MobileMenu';
import localFont from 'next/font/local';
const subTitlteFont = localFont({
  src: '../../public/fonts/Angelica.ttf',
});
const Header = () => {
  const [activePage, setActivePage] = useState('');
  const [deployedMenu, setDeployedMenu] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const deployMobMenuHandler = () => {
    setDeployedMenu(!deployedMenu);
  };

  useEffect(() => {
    setActivePage(pathName);
    console.log(pathName);
  }, [pathName]);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (window.scrollY > 1) {
        setScrolling(true);

      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrolling ? styles.mainContainerScrolled : styles.mainContainer
      }
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.mainWrapper}>
        <div className={styles.topHeaderWrapper}>
          <div className={styles.titleWrapper}>
            <span
              className={styles.titleName}
              onClick={() => {
                router.push('/');
              }}
            >
             One Shape
            </span>
            {/* <span className={styles.titleSubName} >
              Форма твого ідеального тіла
            </span> */}
          </div>

          <div className={styles.menuContainer}>
            <Menu />
          </div>
          {/* <div className={styles.verticalDivider}></div> */}

          <div className={styles.contactsContainer}>
            <div className={styles.contactsWrapper}>
              <div className={styles.contactsTelIcon}>
                <a href='tel:+380635711996'>
                  <BsTelephone />
                </a>
              </div>
              <div className={styles.contactsTel}>
                <a href='tel:+380635711996'> +38 (063) 57-11-996</a>
              </div>
            </div>

            <div
              className={styles.deployedMenuContainerMobile}
              onClick={deployMobMenuHandler}
            >
              <FiMenu style={{ fontSize: '25px', color: 'color: #020202' }} />
              <MobileMenu
                setDeployedMenu={setDeployedMenu}
                deployedMenu={deployedMenu}
              />
              {/* {deployedMenu && (
                <div className={styles.deployedMobMenuContainer} ref={menuRef}>
                  <div
                    className={
                      activePage === '/'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    <p>Головна</p>
                  </div>
                  <div
                    className={
                      activePage === '/prices'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/prices');
                    }}
                  >
                    {' '}
                    <p>Ціни</p>
                  </div>
                  <div
                    className={
                      activePage === '/massage'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/massage');
                    }}
                  >
                    {' '}
                    <p>Масаж</p>
                  </div>
                  <div
                    className={
                      activePage === '/manicure'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/manicure');
                    }}
                  >
                    {' '}
                    <p>Манікюр</p>
                  </div>
                  <div
                    className={
                      activePage === '/courses/massage'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/courses/massage');
                    }}
                  >
                    {' '}
                    <p>Навчання</p>
                  </div>
                  <div
                    className={
                      activePage === '/contact'
                        ? styles.activeMobMenuItem
                        : styles.mobMenuItem
                    }
                    onClick={() => {
                      router.push('/contact');
                    }}
                  >
                    {' '}
                    <p>Контакти</p>
                  </div>
                </div>
              )}  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
