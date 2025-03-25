import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NoteEditor.css';

const NoteEditor = ({ isDarkMode, toggleTheme }) => {
    const [note, setNote] = useState('');
    const { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (index !== undefined) {
            const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
            setNote(storedNotes[index] || '');
        }
    }, [index]);

    const saveNote = () => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        if (index !== undefined) {
            storedNotes[index] = note;
        } else {
            storedNotes.push(note);
        }
        localStorage.setItem('notes', JSON.stringify(storedNotes));
        navigate('/');
    };

    const goToMainPage = () => {
        navigate('/');
    };

    return (
        <div className={`note-editor ${isDarkMode ? 'note-editor-dark' : 'note-editor-light'}`}>
            <h1>{index !== undefined ? 'Edit Note' : 'New Note'}</h1>
            <div className='toggle'>
                <label className="switch">
                    <input
                        id="input"
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    <div className="slider round">
                        <div className="sun-moon">
                            <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                            <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                                <circle cx={50} cy={50} r={50} />
                            </svg>
                        </div>
                        <div className="stars">
                            <svg id="star-1" className="star" viewBox="0 0 20 20">
                                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                            </svg>
                            <svg id="star-2" className="star" viewBox="0 0 20 20">
                                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                            </svg>
                            <svg id="star-3" className="star" viewBox="0 0 20 20">
                                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                            </svg>
                            <svg id="star-4" className="star" viewBox="0 0 20 20">
                                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
                            </svg>
                        </div>
                    </div>
                </label>
            </div>
            <textarea
                className={isDarkMode ? 'textarea-dark' : 'textarea-light'}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows="10"
                cols="50"
            />
            <br />
            <button onClick={saveNote}>Save</button>
            {/* <button onClick={goToMainPage} className="back-to-main-button"> */}
            <button onClick={goToMainPage} className="back-to-main-button">
                <div className="button-box">
                    <span className="button-elem">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                        </svg>
                    </span>
                    <span className="button-elem">
                        <svg viewBox="0 0 46 40">
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
                        </svg>
                    </span>
                </div>
            </button>
            {/* </button> */}
        </div >
    );
};

export default NoteEditor;