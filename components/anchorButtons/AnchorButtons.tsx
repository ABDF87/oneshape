import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

interface IAnchorButtonsProps {
  customFlexDirection?: string;
  customColor?: string;
  setIsModalOpen?: (value: boolean) => void;
  serciveType?: string;
  url?: string;
  customBackgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  additionalFormInfo?: {
    service: string;
    master: string;
  };
  setFormInfo?: (value: { service: string; master: string }) => void;
}

const AnchorButtons = ({
  customFlexDirection,
  customColor,
  setIsModalOpen,
  serciveType,
  customBackgroundColor,
  hoverBackgroundColor,
  hoverColor,
  url,
  additionalFormInfo,
  setFormInfo,
}: IAnchorButtonsProps) => {
  const [flexDirection, setFlexDirection] = useState<string>('row');
  const [color, setColor] = useState<string>('white');
  const [backgroundColor, setBackgroundColor] = useState<string>('black');
  const [isOrderHovered, setIsOrderHovered] = useState<boolean>(false);
  const [isLearnHovered, setIsLearnHovered] = useState<boolean>(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const router = useRouter();
  let pathName: string;

  const bookOnlineHandler = () => {
    setIsModalOpen!(true);
    if (additionalFormInfo && setFormInfo) {
      setFormInfo(additionalFormInfo);
    }
  };

  useEffect(() => {
    if (customColor) {
      setColor(customColor);
    }
  }, [customColor]);
  useEffect(() => {
    if (customBackgroundColor) {
      setBackgroundColor(customBackgroundColor);
    }
  }, [customBackgroundColor]);

  if (url) {
    pathName = url;
  }

  const buttonContainerStyle: any = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: customFlexDirection ? customFlexDirection : width < 420 ? 'column' : 'row',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    padding: '20px',
    fontSize: '14px',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '2px',
    cursor: 'pointer',
  };

  const buttonStyleOrder: any = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '50px',
    margin: '10px',
    padding: '20px',
    fontSize: '14px',
    fontFamily: 'Nunito Sans, sans-serif',
    color: isOrderHovered ? hoverColor : color,
    backgroundColor: isOrderHovered ? hoverBackgroundColor : backgroundColor,
    border: '1px solid ',
    borderColor: color,
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    zIndex: '100',
  };
  const buttonStyleLearnMore: any = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '50px',
    margin: '10px',
    padding: '20px',
    fontSize: '14px',
    fontFamily: 'Nunito Sans, sans-serif',
    color: isLearnHovered ? hoverColor : color,
    backgroundColor: isLearnHovered
      ? hoverBackgroundColor
      : customBackgroundColor,
    border: '1px solid ',
    borderColor: color,
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    zIndex: '100',
  };

  const hoverOrderHandler = () => {
    setIsOrderHovered(true);
  };
  const hoverOrderOffHandler = () => {
    setIsOrderHovered(false);
  };
  const hoverLearnHandler = () => {
    setIsLearnHovered(true);
  };
  const hoverLearnOffHandler = () => {
    setIsLearnHovered(false);
  };

  const modalOpenHandler = () => {
    setIsModalOpen!(true);
  };

  useEffect(() => {
    if (customFlexDirection) {
      setFlexDirection(customFlexDirection);
    }
    if (customColor) {
      setColor(customColor);
    }
  }, [customFlexDirection, customColor]);

  return (
    <main style={buttonContainerStyle}>
      <div
        style={buttonStyleOrder}
        onMouseEnter={() => hoverOrderHandler()}
        onMouseLeave={() => hoverOrderOffHandler()}
        onClick={bookOnlineHandler}
      >
        ONLINE ЗАПИС
      </div>
      <div
        style={buttonStyleLearnMore}
        onMouseEnter={() => hoverLearnHandler()}
        onMouseLeave={() => hoverLearnOffHandler()}
        onClick={() => router.push(`${pathName}`)}
      >
        ДІЗНАТИСЯ БІЛЬШЕ
      </div>
    </main>
  );
};

export default AnchorButtons;
