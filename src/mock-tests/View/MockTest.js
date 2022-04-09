import { Accordion,AccordionSummary,AccordionDetails,Typography,Stack,Box } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionType from "../../questionTypes/QuestionType";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MockTest = ({ setView, id }) => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/mockTests/'+id)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                    setCards(data.mockTests);
                    setIsPending(false);
                })
        }, 1000);
    }, []);
    return (
        <>
            {!isPending && (
                <Box sx={{padding:"2%"}}>
                <Stack  spacing={2}>
                        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
                                    <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
                    </Accordion>
                    {cards.map((card, index) => (
                        <QuestionType card={card}/>
                    ))}
                    </Stack></Box>)}</>      );
}
 
export default MockTest;