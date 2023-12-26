import React from 'react';
import styles from './OrderButton.module.css';
import Link from 'next/link';

interface Props {
    text: string;
    url: string;
    backgroundColor?: string;
    color?: string;
}

const OrderButton = ({text, url, backgroundColor, color}:Props) => {
  const clickHandler = (url: string) => {
    <Link href={url} />;
  };

  const buttonStyle = {
    backgroundColor: backgroundColor ? backgroundColor : '#FFB800',
    color: color ? color : '#000',
    border: 'none',
    borderRadius: '4px',
    padding: '15px 50px',
    fontSize: '1rem',
    fontWeight: 'lighter',
    cursor: 'pointer',
    zIndex: '100',
    margin: '20px',
  };

  return (
    <div style={buttonStyle}>
      <button  onClick={() => clickHandler(url)}>
        {text}
      </button>
    </div>
  );
};

export default OrderButton;
