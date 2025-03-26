
import styled from "styled-components";
import { CiFaceFrown } from "react-icons/ci";

const MissingRoute = () => {
    return (
        <MissingRouteMsg>
            <p>Unfortunately, the page you are looking for cannot be found</p>
            <p>Sorry <CiFaceFrown /> </p>
            
        </MissingRouteMsg>
    )
}

const MissingRouteMsg = styled.div`
text-align: center;
font-size: 30px;
`

export default MissingRoute