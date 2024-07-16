import _ from 'lodash';
import React from 'react';
import './Key.css';
import { NOTE_TO_KEY } from '../global/constants';

class Key extends React.Component {
    noteIsFlat = (note) => {
        return note.length > 1;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }

    render() {
        const { note, pressedKeys } = this.props;
        const isFlat = note.includes('b');

        let classNames = 'key';
        if (isFlat) {
            classNames += ' flat';
        }
        if (this.keyIsPressed(note, pressedKeys)) {
            classNames += ' pressed';
        }

        return (
            <div className={classNames}>
                <div className={isFlat ? 'key-text-half' : 'key-text-natural'}>
                    {note.toUpperCase()}
                </div>
            </div>
        );
    }
}

export { Key };
