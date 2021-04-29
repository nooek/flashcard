import React from "react"
import {
    Container,
    Text
} from "./Styles"

const UserNotLogged = () => {
    return(
        <Container>
            <Text>Please, <a href="/login">Login</a> or <a href="/register">Register</a> to continue</Text>
        </Container>
    )
}

export default UserNotLogged