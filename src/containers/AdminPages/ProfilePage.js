import { conditionalExpression } from "@babel/types";
import { withRouter } from "react-router";

function ProfilePage(props)
{
    return (
        console.log(props),
        <div>
            <h1>Username is {props.match.params.username}</h1>
            </div>
    );
}

export default withRouter(ProfilePage)