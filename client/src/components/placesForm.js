import React from 'react';
import { CiCirclePlus, CiSaveUp2 } from "react-icons/ci";

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
                <button>Upload from computer <CiSaveUp2 /></button>
            </form>
        </div>
    );
}
