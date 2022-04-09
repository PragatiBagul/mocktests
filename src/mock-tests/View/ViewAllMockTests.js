import { useState,useEffect } from "react";
import MockTestThumbnail from "./MockTestThumbnail";
import { Container, Grid, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const ViewAllMockTests = ({setView,setId }) => {
    const [mockTests, setMockTests] = useState([]);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/mockTests')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setMockTests(data.filter((mockTest,index) => mockTest.mode === "public"));
                    setIsPending(false);
                })
        }, 1000);
    }, []);
    
    return (
        <Container>
        <Grid container spacing={2}>{!isPending && mockTests.map((mockTest, index) => (
            <MockTestThumbnail key={index} mockTest={mockTest} setView={setView} setId={setId}/>
        ))}</Grid>
            <Fab color="primary" aria-label="add" style={{ position: "absolute",right: "0",bottom: "0",margin:"2.5%" }} onClick={() => setView("create")}>
  <AddIcon />
</Fab>
            </Container>);
}
 
export default ViewAllMockTests;