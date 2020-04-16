import express from "express";
import * as HandlerUser from './user-medical-api/index'
import * as HandlerLab from './lab-medical-api/index'



interface expressExchange {
    req : express.Request
    res : express.Response
    next : express.NextFunction
}

const routes = ($: express.Router) => {

    $.get("/api", (
        req : express.Request,
        res : express.Response,
        next : express.NextFunction)=>
    {
        res.send('<bold> Hello World </b>')
    });

    $.all('/api/tests', HandlerLab.LabTests)

    $.all('/api/users', HandlerUser.User);

    // $.all('/search', HandlerSearch.Search)

    $.all('/api/labos/staff', HandlerLab.Staff);

    $.all('/api/labos', HandlerLab.Labo);

    return $;
}





export default routes;