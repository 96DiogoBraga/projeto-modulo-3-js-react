import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LockClockOutlined, LockOutlined } from '@mui/icons-material';

import './Header.css'

function Header(){
    return (
        <div className='header'>
            <Toolbar>
                <LockOutlined className='lock'/>
            </Toolbar>
        
            <div className='titulo'>
                <Typography variant='h5'>Cadastro</Typography>
            </div>
        </div>
    );
}

export default Header