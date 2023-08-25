import React from 'react'

export default function BookingWidget() {
  return (
    <div className=" bg-white shadow-200 p-4 rounded-2xl">
      <div className=" text-2xl text-center mb-4">
        Price: $123/ per day
      </div>
      <div className=" border rounded-2xl mt-4">
        <div className="flex">
          <div className="  py-3 px-4 ">
            <label>start     Date: </label>
            <input
              type="date"
            //   value={checkIn}
            //   onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className=" py-3 px-4 border-l ">
            <label>End date: </label>
            <input
              type="date"
            //   value={checkOut}
            //   onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        
        {/* {numberOfNights > 0 && ( */}
          <div className="   py-3 px-4 border-t ">
            <label>Your Name: </label>
            <input
              type="text"
            //   value={name}
            //   onChange={(ev) => setName(ev.target.value)}
            />
            <label>Phone Number: </label>
            <input
              type="text"
            //   value={phone}
            //   onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        {/* )} */}
      </div>
      <button  className="mt-4 main">
        Let's make payment
       <span> $2133</span>
      </button>
      {/* <button onClick={bookThisPlace} className="mt-4 primary">
        Book this place
        {numberOfNights > 0 && <span> ${numberOfNights * price}</span>}
      </button> */}
    </div>
  )
}
