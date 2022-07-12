/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  AppBar,
  makeStyles,
  Typography,
  Toolbar,
  Avatar,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import down from "../../../assets/icons/down.png";
import { useEffect, useState } from "react";
import Modal from "../molecules/Modal";
import logo from "../../../assets/logo.svg";
import searchicon from "../../../assets/icons/Vector.png";
import up from "../../../assets/icons/up.png";
import { useNavigate } from "react-router";
import DropComp from "../expandtobar/ExploreDropDownComponent";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

function Header() {
  const [underLine, setUnderLine] = useState("0px");
  const [icon, setIcon] = useState(down);
  const [profileIcon, setProfileIcon] = useState(down);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    api.get("/").then((response) => setData(response.data));
  }, []);
  const onChangeHandler = (text: string) => {
    let matches = [];
    if (text.length > 0) {
      matches = data.filter((bookData: any) => {
        const regex = new RegExp(`${text}`, "gi");
        return bookData.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const handle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    if (underLine !== "3px") {
      setUnderLine("3px");

      setIcon(up);
    } else {
      setUnderLine("0px");
      setIcon(down);
    }
  };
  const handleSearch = () => {
    isSearchClick ? setIsSearchClick(false) : setIsSearchClick(true);
  };
  const handleProfile = () => {
    isOpenProfile ? setIsOpenProfile(false) : setIsOpenProfile(true);
    if (isOpenProfile === true) {
      setProfileIcon(down);
    } else {
      setProfileIcon(up);
    }
  };
  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const { user } = useAuth0();

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <div>
            <div>
              <img src={logo} alt="logo" />
              <div
                onClick={() => {
                  console.log("search clicked");
                  handleSearch();
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={searchicon} alt="search" />
                <div>
                  <div>
                    <Modal
                      open={isSearchClick}
                      DropComp={() => {
                        return (
                          <>
                            {suggestions &&
                              suggestions.map((suggestion: any, i) => {
                                return (
                                  <>
                                    <div
                                      className={classes.suggestion}
                                      key={i}
                                      onClick={() => {
                                        onSuggestHandler(suggestion.name);
                                        navigate(
                                          `/bookdetailviewpage/${suggestion.id}`
                                        );
                                      }}
                                    >
                                      {suggestion.name +
                                        " by " +
                                        suggestion.author}
                                    </div>
                                  </>
                                );
                              })}
                          </>
                        );
                      }}
                    ></Modal>
                  </div>
                </div>
              </div>
            </div>

            {isSearchClick ? (
              <>
                <TextField
                  onChange={(e) => onChangeHandler(e.target.value)}
                  value={text}
                  placeholder="Search for titles and authors"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ClearRoundedIcon
                          fontSize="small"
                          onClick={() => {
                            setIsSearchClick(false);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            ) : (
              <div>
                <Typography variant="body1" onClick={handle}>
                  Explore
                </Typography>
                <img src={icon} alt="downlist" />
                <div >
                  <div>
                    <Modal open={isOpen} DropComp={DropComp} />
                  </div>
                </div>
              </div>
            )}
            <div >
              <Typography
                onClick={() => navigate("/library")}
                data-testid="lib"
                variant="body1"
              >
                My Library
              </Typography>
            </div>
          </div>
          <div  onClick={handleProfile}>
            <div>
              <Avatar >
                {user?.name?.charAt(0).toUpperCase()}
              </Avatar>{" "}
            </div>
            <img
              src={profileIcon}
              alt="downlist1" 
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Header;
