const { v4 } = require("uuid")
const AWS = require("aws-sdk")

const addTodo = async(event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const { todo } = JSON.parse(event.body);
    const crteatedAt = new Date();
    const id = V4();

    console.log("This is an Id", id)
    const newTodo = {
        id,
        todo,
        createdAt,
        completed: false,
    }
    await dynamo.put({
        TableName: "TodoTable",
        Item: newTodo
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(newTodo),
    };
};
module.exports = {
    handler: addTodo
}