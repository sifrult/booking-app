import React from 'react';
import {
    PiWifiHighLight,
    PiDoor,
    PiCarSimpleLight,
    PiDesktopLight,
    PiDogLight
} from "react-icons/pi";


export default function Amenities({selected, onChange}) {

    function handleCbClick(ev) {
        const {checked,name} = ev.target;
        if (checked) {
          onChange([...selected,name]);
        } else {
          onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
      }
      
    return (
        <>
            <div>
                <input type='checkbox' />
                <PiWifiHighLight />
                <span>Wifi</span>
            </div>
            <div>
                <input type='checkbox' />
                <PiCarSimpleLight />
                <span>Parking</span>
            </div>
            <div>
                <input type='checkbox' />
                <PiDesktopLight />
                <span>TV</span>
            </div>
            <div>
                <input type='checkbox' />
                <PiDogLight />
                <span>Pets</span>
            </div>
            <div>
                <input type='checkbox' />
                < PiDoor />
                <span>Private entrance</span>
            </div>
        </>
    );
}
