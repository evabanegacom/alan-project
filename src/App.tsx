import { useState } from "react";
import "./App.css";
import data from "./data";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import  Table from './table';

function App() {

  const [query, setQuery] = useState("");

  const [info, setInfo] = useState<any>([]);

  const onChange = (e:any) => {
    setQuery(e.target.value);
  };

  const isValid = query ===''

  const inputMargin = { marginTop: '50px'}

  const onClick = () => {
    const random = Math.floor(Math.random() * data.length);
    setInfo(data[random]);
  
    setQuery("");
  };

  return (
    <div className="App">
      <Paper elevation={10} className="paper">
        <TextField
          type="text"
          label="Query"
          required
          id="query"
          fullWidth
          multiline
          onChange={onChange}
        />
      </Paper>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
        onClick={onClick}
        style={inputMargin}
        disabled={isValid}
      >Submit query</Button>

      <Typography style={inputMargin}>
        This is a table that randomly shows the year and club each footballer who won the FIFA best player award in the world.
      </Typography>

      <Table info={info}/>
    </div>
  );
}

export default App;
