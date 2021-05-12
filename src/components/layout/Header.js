import {useAuth} from "../../authContext";
import {Button} from "../../ui";
import {Link, useHistory} from "react-router-dom";
import {store} from "../../scripts";
import Net from "../../scripts/net";

const Header = ({ toggle }) => {
    const userInfo = JSON.parse(sessionStorage.getItem('user'));

    const history = useHistory();

    const handlelogout = () =>{
        Net.logout((response)=> {
          if(response.status === 200) {
              history.replace("/signin");
          }
        })
    }

  return (
    <>
      <div className="mid">
          <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom" >
              <button className="btn btn-primary" id="menu-toggle" onClick={toggle} >Menu</button>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navb">
                  <ul className="navbar-nav mr-sm-auto" />
                  <form className="form-inline ">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-success my-2 my-sm-0" type="submit"  style={{float : 'right', marginRight : '5px'}}  >Search
                      </button>
                  </form>

                  {userInfo.username !== null ? (
                      <div>Welcome, {userInfo.username} / <Button onClick={handlelogout}>Sign Out</Button></div>
                  ) : (
                      <Link to="/signin">SignIn</Link>
                  )}
              </div>
          </nav>
      </div>
    </>
  );
}

export default Header;
