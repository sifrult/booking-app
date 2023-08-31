import React, { useState } from 'react';
import { CiCirclePlus, CiSaveUp2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import Amenities from '../components/amenitiesForm';

export default function PlacesForm() {

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);

  function formHeader(text) {
    return (
      <h2>{text}</h2>
    )
  }

  function formDesc(text) {
    return (
      <p>{text}</p>
    )
  }

  function formInput(header, description) {
    return (
      <>
        {formHeader(header)}
        {formDesc(description)}
      </>
    );
  }

  return (
    <div>
      <form>
        {formInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
        <input
          type="text"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
          placeholder="title, for example: My lovely apt"
        />
        {formInput('Address', 'Address to this place')}
        <input
          type='text'
          value={address}
          onChange={ev => setAddress(ev.target.value)}
          placeholder='Address'
        /><br />
        {formInput('Photos', 'more = better')}
        <input
          type='text'
          value={photoLink}
          onChange={ev => setPhotoLink(ev.target.value)}
          placeholder='Add using a link ...jpeg'
        />
        <button><CiCirclePlus /></button><br />
        <button>Upload from device <CiSaveUp2 /></button>
        {formInput('Description', 'description of the place')}
        <textarea
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />
        {formInput('Amenities', 'select all the amenities of your place')}
        <Amenities
          selected={amenities}
          onChange={setAmenities}
        />
        {formInput('Extra info', 'house rules, etc')}
        <textarea
          value={extraInfo}
          onChange={ev => setExtraInfo(ev.target.value)}
        />
        {formInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
        <h3>Check in time</h3>
        <input
          type='time'
          value={checkIn}
          onChange={ev => setCheckIn(ev.target.value)}
        />
        <h3>Check out time</h3>
        <input
          type='time'
          value={checkOut}
          onChange={ev => setCheckOut(ev.target.value)}
        />
        {formInput('Max guests', 'How many people are allowed to stay in your home')}
        <input
          type='number'
          value={maxGuests}
          onChange={ev => setMaxGuests(ev.target.value)}
          min={1}
        />
        {formInput('Price', '$ per night')}
        <input
          type='number'
          value={price}
          onChange={ev => setPrice(ev.target.value)}
          min={0}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
