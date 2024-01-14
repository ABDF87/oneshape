import React, { useState, useEffect } from 'react';
import styles from './BookOnlineButton.module.css';

type Props = {
  setIsModalOpen: (value: boolean) => void;
  additionalFormInfo?: {
    service: string;
    master: string;
  };
  setFormInfo?: (value: { service: string; master: string }) => void;
  text?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  customWidth?: string;
  customHeight?: string;
  customFontSize?: string;
};

const BookOnlineButton = ({
  setIsModalOpen,
  additionalFormInfo,
  setFormInfo,
  text,
  color,
  border,
  customWidth,
  customHeight,
  customFontSize,
}: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // set width and height on mount
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const bookOnlineHandler = () => {
    setIsModalOpen!(true);
    if (additionalFormInfo && setFormInfo) {
      setFormInfo(additionalFormInfo);
    }
  };

  //   const buttonStyle = {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     color: color ? color : '#fff',
  //     backgroundColor: backgroundColor ? backgroundColor : '#070707',
  //     border: border ? border : 'none',
  //     borderRadius: '4px',
  //     cursor: 'pointer',
  //     width: customWidth
  //       ? customWidth
  //       : width < 431
  //       ? '100px'
  //       : width < 768
  //       ? '150px'
  //       : '200px',
  //     // width: customWidth ? customWidth : width > 768 ? '200px' : '100px',
  //     height: customHeight
  //       ? customHeight
  //       : width < 431
  //       ? '30px'
  //       : width < 768
  //       ? '30px'
  //       : '40px',
  //     fontSize: customFontSize
  //       ? customFontSize
  //       : width < 431
  //       ? '10px'
  //       : width < 768
  //       ? '18px'
  //       : '20px',
  //     padding: '5px 10px',
  //   };
  //styles

  const buttonStyles = {
    color: color ? color : '#fff',
    border: border ? border : 'none',
    width: customWidth
      ? customWidth
      : width < 430
      ? '110px'
      : width < 830
      ? '200px'
      : '200px',
    fontSize: width < 430 ? '10px' : width < 830 ? '20px' : '20px',
  };

  return (
    <div
      className={styles.buttonContainer}
      style={buttonStyles}
      onClick={bookOnlineHandler}
    >
      {text ? text : 'ЗАПИС ONLINE'}
    </div>
  );
};

export default BookOnlineButton;
