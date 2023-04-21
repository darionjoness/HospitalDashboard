import React from 'react'
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';

const PatientsMenuModal = ({ toggleModal, handlePatientData, openRooms, onChange, selectValue, genderOnChange, genderValue}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()


  return (
    <div className='patientsMenuModal'>
        <div className="patientsMenuModalItems">
            <h1>Add Patient</h1>
            <form className='patientsMenuModalForm' onSubmit={handleSubmit((data) => handlePatientData(data))}>
                <div className="patientFormDate">
                    <p className='patientsModalError'>{errors.date?.message}</p>
                    <input type="date" {...register('dateArrived', {required: 'Please select a date'})} />
                </div>
                <div className="patientFormName">
                    <div className="patientsFirstName">
                        <p className='patientsModalError'>{errors.firstName?.message}</p>
                        <input {...register('firstName', {required: 'Please type in a First Name'})} type="text" placeholder='First Name' />
                    </div>
                    <div className="patientsLastName">
                        <p className='patientsModalError'>{errors.lastName?.message}</p>
                        <input {...register('lastName', {required: 'Please type in a Last Name'})} type="text" placeholder='Last Name' />
                    </div>
                </div>
                <div className="patientFormContactInfo">
                    <div className="patientsPhoneNumber">
                        <p className='patientsModalError'>{errors.phoneNumber?.message}</p>
                        <input {...register('phoneNumber', {required: 'Please type in a Phone Number'})} type="tel" placeholder='Phone Number' />
                    </div>
                    <div className="patientsEmail">
                        <p className='patientsModalError'>{errors.email?.message}</p>
                        <input {...register('email', {required: 'Please type in a working Email'})} type="email" placeholder='Email' />
                    </div>
                </div>
                <div className="patientFormInfo">
                    <div className="patientsAge">
                        <p className='patientsModalError'>{errors.age?.message}</p>
                        <input {...register('age', {required: 'Please type in a age'})} type="number" placeholder='Age' />
                    </div>
                    <div className="patientsWeight">
                        <p className='patientsModalError'>{errors.weight?.message}</p>
                        <input {...register('weight', {required: 'Please type in a weight'})} type="number" placeholder='Weigh(lbs)' />
                    </div>
                    <div className="patientsHeight">
                        <p className='patientsModalError'>{errors.height?.message}</p>
                        <input {...register('height', {required: 'Please type in a height'})} type="number" placeholder='Height(in)' />
                    </div>
                </div>
                <div className="selectRoom">
                    <p>{errors.roomNumber?.message}</p>
                    <label htmlFor="room">Select Room</label>
                    <select onChange={(e) => onChange(e)} value={selectValue} name="room" id="">
                        {openRooms.map((item, idx)  => (
                        <option key={idx}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="selectGender">
                    <label htmlFor="gender">Gender</label>
                    <select onChange={(e) => genderOnChange(e)} value={genderValue} name="gender" id="">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <button className='addPatient'>Add Patient</button>
            </form>
            <button
             onClick={toggleModal}
             className='closeAddPatient'><AiOutlineClose /></button>
        </div>
    </div>
  )
}

export default PatientsMenuModal