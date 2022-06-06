import {React} from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/chomjungLogo.jpg';
import "./Navigator.css";
import "../../assets/font/font.css";

const Navigator = () => {
	return (
		<>
    <Toolbar id="ToolBar">
      <div id="category">
        <a href="/diary">
            일기
        </a>
      </div>
      <img id="logoImg" src={logo} alt="logo"/>
			<div id="category">
        <a href="/guestbook">
          방명록
        </a>
      </div>
		</Toolbar>
    </>
		);
	};


export default Navigator;