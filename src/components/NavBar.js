import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {useLinkStyles} from "../styles/styles";

/*
    Navigation bar
 */

export default function NavBar() {
    const classes = useLinkStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ position: "static", background: '#2E3B55' }}>
                <Toolbar>
                    <Button>
                        <Link to="/" variant="h4"
                              style={{color: "white"}}
                              className={classes.link}>
                            home
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/products"
                              variant="h4"
                              style={{color: "white"}}
                              className={classes.link}>
                            Games
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}