import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Headlogo from '../Images/cash4deaddreamslogo.png';
import GtaWoman from '../Images/gta5woman.png';
import Goldline from '../Images/goldline.png';
import Colorline from '../Images/colorline.gif';
import C4ddAd from '../Images/cash4deaddreamsadd.png';
import Dreams from '../Images/dreams.png';
import AnotherPic from '../Images/Cashfordeaddreams-GTAV-alt-logo.png'

const Homepage = () => {
  return (
    <div style={landingPadStyle} className="landingpad">
      <div>
        <img src={Headlogo}/>
        <h2> Welcome to the CashForDeadDreams Marketplace</h2>
        <div style={{color: '#B8B8B8'}}>
          <p>
            Dreams are like our lives - they come on in an instant, are very powerful,
            <br/>
            but often make no sense at all or are sexually deviant.
          </p>
          <p>
            Dreams are what days are made of, but as we move on to the different stages of our lives,
            <br/>
            it's time to get rid of old dreams and invest in the future.
          </p>
        </div>
        <img src={Goldline}/>
        <div>
          <div style={hpPhotoBoxStyle}>
            <p>
              This is especially true of older family members,
              <br/>
              who work their whole lives to amass possessions and
              <br/>
              wealth that they will be too senile to enjoy.
              <br/><br/>
              That's where we come in! 
              <br/>
              Helping you turn those dead dreams into cash.
              <br/>
              So many television shows celebrate the new found wealth 
              <br/>
              in an old barn or attic - keepsakes that were literally
              <br/>
              gathering dust and doing nobody any good.
            </p>
            <img style={gtaWomanStyle} src={GtaWoman}/>
          </div>
          <img src={C4ddAd}/>
        </div>
      </div>
      <br/>
      <Link to="ForSale"><img src={Dreams}/></Link>
    </div>
  );
};

export default Homepage;

const landingPadStyle = {
  color: 'orange',
  textAlign: 'center',
  marginTop: 150
}

const hpPhotoBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  color: '#B8B8B8'
}

const gtaWomanStyle = {
  float: 'right',
  position: 'relative',
}
