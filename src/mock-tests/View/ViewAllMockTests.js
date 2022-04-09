import { useState,useEffect } from "react";
import MockTestThumbnail from "./MockTestThumbnail";
import { Container, Grid, Fab,Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { fetchMockTests, fetchPublicMockTests } from "../../utils/RequestEndPoints";
const ViewAllMockTests = ({setView,setId }) => {
    const [mockTests, setMockTests] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [publicMockTests,setPublicMockTests] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const response = fetchMockTests();
            setMockTests(response);
            const publicResponse = fetchPublicMockTests();
            setPublicMockTests(publicResponse);
        setIsPending(false);
        }, 1000);
    }, []);
    
    return (
        <Container>
        <Grid container spacing={2}>{!isPending && mockTests.map((mockTest, index) => (
            <MockTestThumbnail key={index} mockTest={mockTest} setView={setView} setId={setId}/>
        ))}</Grid>
            <Divider/>
            <Grid container spacing={2}>{!isPending && publicMockTests.map((mockTest, index) => (
            <MockTestThumbnail key={index} mockTest={mockTest} setView={setView} setId={setId}/>
        ))}</Grid>
            <Fab color="primary" aria-label="add" style={{ position: "absolute",right: "0",bottom: "0",margin:"2.5%" }} onClick={() => setView("create")}>
  <AddIcon />
</Fab>
            </Container>);
}
 
export default ViewAllMockTests;