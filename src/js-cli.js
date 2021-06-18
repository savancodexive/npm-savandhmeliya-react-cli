import _ from "lodash";

import { failMsgToUser, successMsgToUser } from "./helpers";
import { validateRequest } from "./validation";

export function cli(args) {  
    let request = validateRequest(args);
    if(request !== false){
        console.log(request);
    }
}