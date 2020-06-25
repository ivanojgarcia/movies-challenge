
const { movie } = require('./models');
const db = require('./config/database');
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        const body = JSON.parse(event.body) ;

        let createMovie = await movie.create({ 
            title: body.title,
            year: body.year,
            age: body.age,
            IMdb: body.IMdb,
            rottenTomatoes: body.rottenTomatoes,
            netflix: body.netflix,
            hulu: body.hulu,
            primeVideo: body.primeVideo,
            disneyPlus: body.disneyPlus,
            type: body.type,
            directors: body.directors,
            genres: body.genres,
            country: body.country,
            language: body.language,
            runtime: body.runtime
         });
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                data: createMovie
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        response = {
            'statusCode': 500,
            'body': JSON.stringify({
                error: err
                // location: ret.data.trim()
            })
        }
    }

    return response
};
