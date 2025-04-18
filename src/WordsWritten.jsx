import React from 'react'
import { Modal } from 'react-bootstrap'

const WordsWritten = ({ show, handleClose, accurateWords, yourWords }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className='words_written'
        >
            <h3>Your words</h3>
            {
                yourWords ? <p>{yourWords.map((item, index) => <span key={index} className={!item.isCorrect ? "danger" : ""}>{item.word}</span>)}</p> : <p>No words found</p>
            }
            <h3 className='mt-5'>Accurate words</h3>
            {
                accurateWords ? <p>{accurateWords.map((item, index) => <span key={index}>{item}</span>)}</p> : <p>No words found</p>
            }
        </Modal>
    )
}

export default WordsWritten