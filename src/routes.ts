import express from "express";
import * as HandlerUser from './user-medical-api/index'
import * as HandlerLab from './lab-ittyni-api/src'



interface expressExchange {
    req : express.Request
    res : express.Response
    next : express.NextFunction
}

const routes = ($: express.Router) => {

    $.get("/", (
        req : express.Request,
        res : express.Response,
        next : express.NextFunction)=>
    {
        res.send('<bold> Hello World </b>')
    });

    $.all('/tests', HandlerLab.LabTests)

    $.all('/users', HandlerUser.User);

    // $.all('/search', HandlerSearch.Search)

    $.all('/labos', HandlerLab.Labo)

    return $;
}





export default routes;