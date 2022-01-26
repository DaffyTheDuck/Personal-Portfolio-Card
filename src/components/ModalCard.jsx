import React from 'react';
import styles from './ModalCard.module.scss'

export default function ModalCard(props) {
    return <div className={`${styles.modal_card} ${props.className}`}>{props.children}</div>;
}
