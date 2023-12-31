import { useState, useEffect } from "react";
import * as userService from '../services/userService'


const CHANGE_KEYS = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    imageUrl: 'imageUrl',
    country: 'country',
    city: 'city',
    street: 'street',
    streetNumber: 'streetNumber'
};



export default function EditUserModal({
    userId,
    closeEditModal,
    setUsers
}){
    const [userDetails, setUserDetails] = useState({});

    
    

    
    

    const onChangeHandler = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        const nameAttribute = e.target.name;

      if(e.target.name === 'country' || e.target.name === 'city' || e.target.name === 'street' || e.target.name === 'streetNumber'){

        setUserDetails(state => ({
          ...state,
          address: {
            ...state.address,
            [nameAttribute] : e.target.value

          }
        }))
      }else{

        setUserDetails(state => ({
            ...state,
            [e.target.name]: e.target.value,
            
        }))
      }
    }
    
    useEffect(() => {
        userService.getOne(userId)
        .then(result => setUserDetails(result))
    }, [userId])

    

    const onSubmit = async(e) => {
        e.preventDefault();
    
        const updated = await userService.updateOne(userId, userDetails)
        console.log(userDetails)

        setUsers(state => {

        return state.map((item) => {
          if(item._id === userId){
                 item = updated;
             } 
                return item;
         })
        });

        closeEditModal();
        }

    return (
        <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" onClick={closeEditModal}>
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
          </header>
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="firstName" name="firstName" type="text" defaultValue={userDetails.firstName} onChange={onChangeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="lastName" name="lastName" type="text" defaultValue={userDetails.lastName} onChange={onChangeHandler}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <input id="email" name="email" type="text" defaultValue={userDetails.email} onChange={onChangeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={userDetails.phoneNumber} onChange={onChangeHandler}/>
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span><i className="fa-solid fa-image"></i></span>
                <input id="imageUrl" name="imageUrl" type="text" defaultValue={userDetails.imageUrl} onChange={onChangeHandler}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="country" name="country" type="text" defaultValue={userDetails.address?.country} onChange={onChangeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-city"></i></span>
                  <input id="city" name="city" type="text" defaultValue={userDetails.address?.city} onChange={onChangeHandler}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street"></label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map">Street</i></span>
                  <input id="street" name="street" type="text" defaultValue={userDetails.address?.street} onChange={onChangeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street Number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-house-chimney"></i></span>
                  <input id="streetNumber" name="streetNumber" type="text" defaultValue={userDetails.address?.streetNumber} onChange={onChangeHandler}/>
                </div>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">Save</button>
              <button id="action-cancel" className="btn" type="button" onClick={closeEditModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> 
    );
}