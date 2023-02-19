import { React, useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"
// import List from "./Components/List"
import "../../App.css";
import { styled } from '@material-ui/core/styles';
import global from '../../Global'

// search bar component on top of pages other than the homepage
const SearchBox = styled(TextField)(() => ({
  '& fieldset': {
    // borderRadius: '50px',
    height: '6vh',
    margin: 'auto',
    backgroundColor: 'white'
  },
}));

function App() {
  const [phrase, setPhrase] = useState("");
  const navigate = useNavigate()

  // record user input value
  const handleChange = (e) => {
    e.preventDefault();
    setPhrase(e.target.value);
  }


  return (
    <div style={{  backgroundColor: global.colors.grey}}>
      <div className="search-small">
            <SearchBox
            // id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Type your question or keywords here"
            onChange={e => handleChange(e)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') navigate("/results", {state:{phrase:phrase}})
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={() => navigate("/results", {state:{phrase:phrase}})}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
        {/* <div class='search-small-icon-container'>
            <SearchIcon fontSize="medium" style={{ color: "white", 'margin-top': '0.5em', width: '6vw'}} />
        </div> */}
      </div>
      {/* <List /> */}
    </div>
  );
}

export default App;