const mongoose = require( 'mongoose' )
const quizSchema = require( './quizzes.schema.server' )
const quizModel = mongoose . model (
    'QuizzesModel' ,
    quizSchema
)

module.exports = quizModel
