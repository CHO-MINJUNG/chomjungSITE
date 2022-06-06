import { Button, TextField } from "@mui/material";
import "./ContentInput.css"
const ContentInput = () => {
  return (
    <div id="contentDiv">
      <TextField 
        id="textInput" 
        multiline
      />
      <Button
        id="textButton"
      >작성하기</Button>
    </div>
  )
}

export default ContentInput;