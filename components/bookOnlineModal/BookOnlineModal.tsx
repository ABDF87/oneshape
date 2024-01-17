import React, { useState } from 'react';
import styles from './BookOnlineModal.module.css';
import Modal from 'react-modal';
import BookForm from '@/components/bookForm/BookForm';
import { IoMdCloseCircleOutline } from 'react-icons/io';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  formInfo?: {
    service: string;
    master: string;
  };
};

const BookOnlineModal = ({ isModalOpen, setIsModalOpen }: Props) => {

  return (
    <Modal
      isOpen={isModalOpen}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <IoMdCloseCircleOutline
          className={styles.closeIcon}
          onClick={() => setIsModalOpen(false)}
        />
        <BookForm />
      </div>
    </Modal>
  );
};

export default BookOnlineModal;
