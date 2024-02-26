const dotenv=require('dotenv');
dotenv.config();

const envVariables={
    PORT:process.env.PORT //process is global variable that is accessible across my node project
}

module.exports=envVariables; //module.exports is used because of common js moduling which is require based syntax