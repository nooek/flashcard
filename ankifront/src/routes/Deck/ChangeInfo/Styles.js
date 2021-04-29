import styled from "styled-components"
import { Button, TextField } from "@material-ui/core"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`

export const FieldChangeInfo = styled(TextField)`
    margin-bottom: 10px;
    width: 350px;
    @media(max-width: 500px)
    {
        width: 100%;
    }
`

export const ChangeButton = styled(Button)`
    width: 200px;
    text-transform: none;
    @media(max-width: 350px)
    {
        width: 100%;
    }
`