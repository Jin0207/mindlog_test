'use strict'

const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');

require('express-async-errors');

class ApiServer extends http.Server{
    constructor(config){
        const app = express();
        super(app);
        this.config = config;
        this.app = app;
    }

    //api서버 초기화 함수
    async start(){
        // 미들웨어 정의
        this.app.use();
        //라우팅 방법
        this.app.get('/', (req, res) => {
            // 정상 처리 코드
            //res.sendStatus(200);
            res.send('Welcome')
        })
        return this
        //CRUD 매소드 4가지
        //post : write
        //get : list
        //post, put : update -- 일반적으로 put
        //delete 
    }
}

module.exports = ApiServer;