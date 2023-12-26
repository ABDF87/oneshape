import React, { useState, useEffect } from 'react';

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
  backgroundColor,
  border,
  customWidth,
  customHeight,
  customFontSize,
}: Props) => {
  const bookOnlineHandler = () => {
    setIsModalOpen!(true);
    console.log('additionalFormInfo', additionalFormInfo);
    if (additionalFormInfo && setFormInfo) {
      setFormInfo(additionalFormInfo);
    }
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color ? color : '#fff',
    backgroundColor: backgroundColor ? backgroundColor : '#070707',
    border: border ? border : 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: customWidth ? customWidth : width < 420 ? '100px' : width < 768 ? '150px' : '200px',
    // width: customWidth ? customWidth : width > 768 ? '200px' : '100px',
    height: customHeight ? customHeight : width < 420 ? '30px' : width < 768 ? '30px' : '40px',
    fontSize:  customFontSize ? customFontSize : width < 420 ? '10px' : width < 768 ? '18px' : '20px',
    padding: '5px 10px',
   
  };

  return (
    <div
      style={buttonStyle}
      onClick={bookOnlineHandler}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#070707';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor
          ? backgroundColor
          : '#070707';

        e.currentTarget.style.color = color ? color : '#fff';
      }}
    >
      {text ? text : 'ЗАПИС ONLINE'}
    </div>
  );
};

export default BookOnlineButton;
