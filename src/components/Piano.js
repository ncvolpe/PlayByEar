import _ from 'lodash';
import React from 'react';

import './Piano.css';
import { Key } from './Key.js';
import {
    NOTES,
    VALID_KEYS,
    KEY_TO_NOTE,
    NOTE_TO_KEY
} from '../global/constants';

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const key = event.key;
        const updatedPressedKeys = this.state.pressedKeys.filter(k => k !== key);
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
    }

    handleClick = (note) => {
        const key = NOTE_TO_KEY[note];
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(note);

        setTimeout(() => {
            this.setState({
                pressedKeys: this.state.pressedKeys.filter(k => k !== key),
            });
        }, 200); // adjust this timeout to match the visual feedback duration
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                    onClick={this.handleClick}
                />
            );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id={note}
                    key={index}
                    src={`../../notes/${note}.mp3`}
                />
            );
        });

        return (
            <div>
                <div className="piano">
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        );
    }
}

export { Piano };
