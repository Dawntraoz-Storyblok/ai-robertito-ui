const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { Nlu } = require('@nlpjs/nlu');
const { LangEn } = require('@nlpjs/lang-en');
const { QnaImporter } = require('@nlpjs/qna-importer')
const { dockStart, ConsoleConnector } = require('@nlpjs/basic');
const path = require("path");

const fs = require('fs');

exports.handler = async function (event, context) {
    // your server-side functionality
    let dock;

    const localDir = path.resolve(__dirname);
//    (async () => {
        dock = await dockStart({ use: ['Basic', 'Qna'], nlu: { useNoneFeature: false } });
        nlp = await dock.get('nlp');
        if (fs.existsSync('./model.nlp')) {
            await nlp.load('./model.nlp');
            console.log(nlp)
        } else {
            //return;
        }
//    })();

    question = event.queryStringParameters.question

    console.log(question)
    const response = await nlp.process('en', question);
    console.log(response);
    let answer = ""
    if (response.answer) {
        answer = response.answer.trim()
    } else {
        console.log("I don't know the answer, help me to train")
        answer = ""
    }

    let data = "Sorry I don't know the answer for your question: " + question
    try {

        answer = answer.replace(".", "/")
        data = fs.readFileSync('./content/' + answer + '.md', 'utf8');
        console.log('💫💫💫💫💫💫💫💫💫💫💫💫💫')
        console.log(data);
        console.log('💫💫💫💫💫💫💫💫💫💫💫💫💫')
    } catch (err) {
        //data = "Error:" + err
        console.error(err);
    }
    return {
        statusCode: 200,
        headers: {
            /* Required for CORS support to work */
            'Access-Control-Allow-Origin': '*',
            /* Required for cookies, authorization headers with HTTPS */
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        },
        body: JSON.stringify(
            { answer: data,
                question: question,
                answerCode: answer,
                response: response,
                dirname: __dirname,
                localDir: localDir
             }),
    };
};