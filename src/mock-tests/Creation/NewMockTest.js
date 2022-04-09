import { Container, Stack,Divider,Fab,Typography } from "@mui/material";
import QuestionTypeEditable from "../../questionTypes/QuestionTypeEditable";
import NewMockTestThumbnail from "./NewMockTestThumbnail";
import { useState } from "react";
import CreateNewMockTest from "./CreateNewMockTest";
import HomeIcon from '@mui/icons-material/Home';
import { createMockTest } from "../../utils/RequestEndPoints";
const NewMockTest = ({setView}) => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mode, setMode] = useState("public");
  const [mockTest, setMockTest] = useState([]);

    const saveMockTest = () => {
      const body = {
        "title": title,
        "description": description,
        "mockTest": mockTest,
        "mode":mode
      };
      const res = createMockTest(body).then(() => {
      console.log('new mock test added');
    })
      setView("default");
    }
  return (

    <Container sx={{ p: 2 }}>
       <Fab color="primary" flex="start" style={{left:0}} aria-label="add" onClick={() => setView("default")}>
  <HomeIcon/>
</Fab>
      <Stack spacing={2}>   
        <CreateNewMockTest mode={mode} setMode={ setMode} title={title} setTitle={setTitle} description={description} setDescription={ setDescription} saveMockTest={ saveMockTest}/>
            <Divider />
            {mockTest.map((questions,index) => (
              <QuestionTypeEditable id={ index} key={index} mockTests={mockTest} setMockTests={ setMockTest}/>
            ))}
        <NewMockTestThumbnail mockTests={mockTest} setMockTests={setMockTest} />
      </Stack>
    </Container>);
}
 
export default NewMockTest;