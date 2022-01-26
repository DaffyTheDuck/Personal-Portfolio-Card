import React, {Fragment} from 'react';
import styles from './Modal.module.scss';
import ModalCard from './ModalCard';
import {createPortal} from 'react-dom';

export default function Modal(props) {

    const BackDropOverlay = (props) => {
        return <div className={styles.backdrop} onClick={props.onClose}/>
    }

    const ModalOverlay = (props) => {
        return(
            <ModalCard className={`${styles.modal} ${props.className}`}>
                <header className={styles.header}>
                    <h2>{props.title} {props.name}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <button onClick={props.onClose}>Close</button>
                </footer>
            </ModalCard>
        )
    }


    return (
        <Fragment>
            {createPortal(<BackDropOverlay onClose={props.onClose}/>, document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay 
                            title={props.title} 
                            name={props.name} 
                            message={props.message} 
                            onClose={props.onClose}/>, 
                            document.getElementById('modal-root')
                        )}
        </Fragment>
    )
}
