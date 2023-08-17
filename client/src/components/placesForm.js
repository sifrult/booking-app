import React from 'react';
import { CiCirclePlus, CiSaveUp2 } from "react-icons/ci";
import {
    PiWifiHighLight,
    PiDoor,
    PiCarSimpleLight,
    PiDesktopLight,
    PiDogLight
} from "react-icons/pi";

export default function NewPlaceForm() {
    return (
        <div>
            <form>
                <h2>Title</h2>
                <p>Title for your place, should be short and catchy</p>
                <input type='text' placeholder='Title' /><br />
                <h2>Address</h2>
                <p>Address to your place</p>
                <input type='text' placeholder='Address' /><br />
                <h2>Photos</h2>
                <p>The more, the better!</p>
                <input type='text' placeholder='Add using a link ...jpeg' /><button><CiCirclePlus /></button><br />
                <button>Upload from device <CiSaveUp2 /></button>
                <h2>Description</h2>
                <p>Description for your place</p>
                <textarea />
                <h2>amenities</h2>
                <p>Select all the perks of your place</p>
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
                <h2>Extra Info</h2>
                <p>House rules, etc</p>
                <textarea />
                <h2>Check in & out times</h2>
                <p>Remember to have extra time for cleaning between guests</p>
                <h3>Check in time</h3>
                <input type='time' />
                <h3>Check out time</h3>
                <input type='time' />
                <h2>Max Guests</h2>
                <p>How many people allowed to stay in your home</p>
                <input type='text' />
                <h2>Price</h2>
                <p>$ per night</p>
                <input type='text' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}
