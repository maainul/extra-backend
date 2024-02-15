//API DOCUMENTATION
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from "colors";
import connectDB from './config/connectDB.js';
import routes from "./routes/route.js";
import dotenv from "dotenv";


//configure env
dotenv.config()

//databse config
connectDB()

let BACKEND_URL = ""
if (process.env.DEV_MODE === "development") {
    BACKEND_URL = process.env.DEV_URL
} else if (process.env.DEV_MODE === "production") {
    BACKEND_URL = process.env.PROD_URL
}

//Swagger api config
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Expense Tracker Application",
            description: "Nodejs Express Expense Tracker Application"
        },
        servers: [
            {
                url: BACKEND_URL
            },
        ]
    },
    apis: [
        './routes/*.js'
    ]
};

const spec = swaggerJSDoc(options)

//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

// Router
app.use('/api/v1', routes)

//homeroute of Swagger
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec))


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});