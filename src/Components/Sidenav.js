import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import { Link } from "react-router-dom";
import { Divider, List } from "@mui/material";

const iconStyle = {
  color: 'orange',
  fontSize: 30,
  paddingTop: 0
}

function Sidenav() {
  return (
    <List>
      <SideNav
        on
        select={(selected) => {
          console.log(selected);
        }}
        className="mySideNav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem>
            <NavIcon style={{paddingTop: 10}}>
              <Link to="/">
                <HomeOutlinedIcon style={iconStyle} />
              </Link>
            </NavIcon>
            <NavText className="navText">
              <Link to="/">Home</Link>
            </NavText>
          </NavItem>
          <Divider style={{backgroundColor: '#404040'}}/>
          <NavItem>
            <NavIcon style={{paddingTop: 10}}>
              <Link to="ForSale">
                <PointOfSaleOutlinedIcon style={iconStyle} />
              </Link>
            </NavIcon>
            <NavText className="navText">
              <Link to="ForSale">Marketplace</Link>
            </NavText>
          </NavItem>
          <Divider style={{backgroundColor: '#404040'}}/>
          <NavItem>
            <NavIcon style={{paddingTop: 10}}>
              <InfoOutlinedIcon style={iconStyle} />
            </NavIcon>
            <NavText className="navText">
              <Link to="Profile">Profile</Link>
            </NavText>
          </NavItem>
          <Divider style={{backgroundColor: '#404040'}}/>
          <NavItem>
            <NavIcon style={{paddingTop: 10}}>
              <Link to="Settings">
                <TuneOutlinedIcon style={iconStyle} />
              </Link>
            </NavIcon>
              <NavText className="navText">
                <Link to="Settings">Settings</Link>
              </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </List>
  );
}
export default Sidenav;
