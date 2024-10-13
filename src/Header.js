import React from 'react'
import "./Header.css";
import Person2Icon from '@mui/icons-material/Person2';
import ForumIcon from '@mui/icons-material/Forum';
import tinderlogo from "./tinderlogo.png"
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ArrowBack } from '@mui/icons-material';

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
        <ArrowBack fontSize="large" className="header__icon"/>
        </IconButton>
      ): (
        <IconButton>
      <Person2Icon className="header__icon" fontSize="large"/>
      </IconButton>
     )}

      <Link to="/">
      <img 
      className="header__logo"
      src={tinderlogo} 
      alt="tinder logo"
      />
      </Link>
      <Link to="/chat">
      <IconButton>
      <ForumIcon className="header__icon" fontSize="large"/>
      </IconButton>
      </Link>
    </div>
  );
}

export default Header;
