import chalk from "chalk";
import boxen from "boxen";
import _ from "lodash";

export const in_array_exist = (arr, value) =>{
    return _.filter(arr, (val)=> {
        return val == value
    }).length != 0;
}

export function successMsgToUser(msg, options = {}) {  
    const bodyMsg = chalk.white.bold(msg);
    const boxenOptions = {
        padding: 1,
        margin: 0,
        borderStyle: "round",
        borderColor: "green",
        backgroundColor: "#555555",
        ...options
    };
    const msgBox = boxen( bodyMsg, boxenOptions );
    console.log(msgBox);
}

export function failMsgToUser(msg, options = {}) {  
    const bodyMsg = chalk.red.bold(msg);
    const boxenOptions = {
        padding: 1,
        margin: 0,
        borderStyle: "red",
        borderColor: "green",
        backgroundColor: "#555555",
        ...options
    };
    const msgBox = boxen( bodyMsg, boxenOptions );
    console.log(msgBox);
}