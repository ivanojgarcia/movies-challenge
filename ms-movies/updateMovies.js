
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
        const {
            id,
            title,
            year,
            age,
            IMdb,
            rottenTomatoes,
            netflix,
            hulu,
            primeVideo,
            disneyPlus,
            type,
            directors,
            genres,
            country,
            language,
            runtime
        } = JSON.parse(event.body);
        
        if(!id) throw new Error("ID is required");
        let updateMovie = await movie.update({ 
            title,
            year,
            age,
            IMdb,
            rottenTomatoes,
            netflix,
            hulu,
            primeVideo,
            disneyPlus,
            type,
            directors,
            genres,
            country,
            language,
            runtime
         },
         {where: {
             id
         }}
         );

         if(updateMovie){
            res = {
                message: `Movie with ID ${id} updated.`
            }
         }else{
            res = {
                message: `Movie with ID ${id} not found.`
            }
         }
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                data: res
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
