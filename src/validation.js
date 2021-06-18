import yargs from "yargs";
import _ from "lodash";

import { failMsgToUser, in_array_exist } from "./helpers";
import * as CONST from "./constants";

/**
 * @var {object} user_input 
 */
const user_input = {
    make_component : {
        key : "-c",
        field : "c",
        options: {
            alias: "name", 
            describe: "Make Component : Component Name | --class for Class Component", 
            type: "string", 
            demandOption: true 
        }
    },
    make_reducer : {
        key : "-r",
        field : "r",
        options: {
            alias: "name", 
            describe: "Make Reducer : Reducer Name", 
            type: "string", 
            demandOption: true 
        }
    },
    make_redux : {
        key : "-redux",
        key2 : "--redux",
        field : "redux",
        options: {
            alias: null, 
            describe: "Create React Redux Store | --saga for react saga", 
            type: "string", 
            demandOption: true 
        }
    }
};

/**
 * @param {array} args 
 * @param {boolean} isNative 
 */
export function validateRequest(args, isNative = false) { 
    if(args.length > 0){
        const selectedOption  = _.get(args, 0);

        if(selectedOption == "--hint" || selectedOption == "--help") {
            hintToUser(isNative); // Hint to user
        }else{
            let result = false;
            switch(selectedOption)
            {
                // For Both JS & Native
                case user_input.make_component.key:
                    var options = yargs.usage(`Usage: ${user_input.make_component.key} <name>`)
                        .option(user_input.make_component.field, {
                            ...user_input.make_component.options
                        }).argv;
    
                    result = { 
                        type : CONST.COMPONENT, 
                        name : options.name, 
                        class: in_array_exist(args,'--class') 
                    };
                    break;
    
                // For Both JS & Native
                case user_input.make_reducer.key:
                    var options = yargs.usage(`Usage: ${user_input.make_reducer.key} <name>`)
                        .option(user_input.make_reducer.field, {
                            ...user_input.make_reducer.options
                        }).argv;
    
                    result = { 
                        type : CONST.REDUCER, 
                        name : options.name 
                    };
                    break;
    
                // For Both JS & Native
                case user_input.make_redux.key:
                case user_input.make_redux.key2:
                    result = { 
                        type : CONST.REDUX, 
                        saga : in_array_exist(args,'--saga') 
                    };
                    break;
            }
    
            if(result === false){
                failMsgToUser("Invalid param " + _.get(args, 0));
            }
            return result;
        }

    }else{
        hintToUser(isNative); // Hint to user
    }
    return false;
}

/**
 * @param {boolean} isNative 
 */
function hintToUser(isNative){
    let options = yargs.option(user_input.make_component.field, {
        ...user_input.make_component.options
    }).option(user_input.make_reducer.field, { 
        ...user_input.make_reducer.options
    }).option(user_input.make_redux.field, { 
        ...user_input.make_redux.options
    });

    if(isNative){

    }
    
    options.argv;
}