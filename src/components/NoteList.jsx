import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ isDarkMode, toggleTheme }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    return (
        <div className="notes-container">
            <div>
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
            <h1>Notes</h1>
            <Link to="/new" className="new-note-button">New Note</Link>
            <div className="notes-list">
                {notes.map((n, index) => (
                    <div key={index} className="note">
                        <p>{n}</p>
                        <button onClick={() => deleteNote(index)}>Delete</button>
                        <Link to={`/edit/${index}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default NoteList;