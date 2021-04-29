import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputFields = styled(TextField)`
    width: 80%;
    margin-bottom: 10px;
`

export const SendEmail = styled(Button)`
    text-transform: none;
    width: 350px;
    @media(max-width: 600px){
        width: 80%;
    }
`