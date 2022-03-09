import {React} from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../assets/chomjungLogo.jpg';

const Header = () => {
	return (
		<Toolbar sx={{ justifyContent: "space-between" }}>
			<a href="/">
				<img height='42' src={logo} alt="logo"/>
			</a>
		</Toolbar>
		);
	};


export default Header;