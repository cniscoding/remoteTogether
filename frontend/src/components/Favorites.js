import React, { useState, useContext, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"
import { mapContext } from "../providers/mapProvider";
import { LocationDetails } from "./LocationDetails";
import './MapList.css'
import Axios from "axios";

export function Favorites() {
  // get request to DB for favorites list

  const [favoriteList, setFavoriteList] = useState();

  // Axios.get('/api/favorites')
  //   .then((response) => {
  //     console.log(response.data.review)
  //     setFavoriteList(response.data.review)
  //   }
  // .catch((err) => {
  //   console.log(err.message);
  // })
  // )

  const { markers } = useContext(mapContext)
  const [places, setPlaces] = useState([]);

  const location = useLocation();

  // populate locations saved in DB
  // AXIOS calls
  // useEffect(() => {
  //   Axios.get('/api/favorites')
  //     .then((response) => {
  //       console.log('response.data from axios', response.data)
  //       setTestDB(response.data)

  //       console.log("testDB", testDB)
  //       console.log("testDB", testDB.favList)
  //       return response.data
  //     }).catch((error) => {
  //       console.error(error);
  //     })
  // });


  const locations = markers.map((result, index) => {
    return (
      <Link to={`../findalocation/${result.name}`} key={index}>
        <div className='div_mapList-locations'>
          <div className='div_mapList-location-image'>
            {console.log('result', result.photos)}
            <img
              src={result.photos && result.photos[0].getUrl()}
              alt="Picture of the location"
              width="150px"
              height="100%"
            />
          </div>
          <div className='div_mapList-location-description'>
            <div className='div_mapList-location-description-splitdiv'>
              <li key={index} className="MapList_div-styling">
                <p>{result.name}</p>
                <p>{result.vicinity}</p>
                <p>{result.rating} stars</p>
              </li>
              <div>
                distance
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div>

      <div>
        {/* {location.pathname === "/findalocation" ? */}
        <ul className="div_MapList-ul-itemList">
          {locations}
        </ul>
        {/* : null
      } */}

        {/* <Routes> */}
        {/* probably have the update this route */}
        {/* <Route path="findalocation/:id/*" element={<LocationDetails />} /> */}
        {/* </Routes> */}
      </div>
    </div>)
}