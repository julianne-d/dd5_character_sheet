import React, {useState, useEffect} from 'react';
import optionsData from '../../data/optionsData.json';

export default function IdCard() {
    const [characterRace, setRace] = useState([]);
    const [characterClass, setClass] = useState([]);
    const [characterBackground, setBackground] = useState([]);

    useEffect(() => {
        setRace(optionsData.races);
        setClass(optionsData.classes);
        setBackground(optionsData.backgrounds);
    })

    return (
      <div>
        <label htmlFor="name">Nom</label>
        <input id="name" name="name" type="text"></input>

        <select>
            {characterRace.map((item, index) => (
                <option key={`race_${index}`}>{item}</option>
            ))}
        </select>

        <select>
            {characterClass.map((item, index) => (
                <option key={`class_${index}`}>{item}</option>
            ))}
        </select>

        <select>
            {characterBackground.map((item, index) => (
                <option key={`background_${index}`}>{item}</option>
            ))}
        </select>
      </div>
    )
}