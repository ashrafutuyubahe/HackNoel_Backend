  const express = require("express");
  const http = require("http");
 
  const dotenv = require("dotenv");
  dotenv.config();
  const PORT = process.env.PORT || 3000;
  const connectDB = require("./config/db");
  const authRoutes = require("./routes/authRoute");
   const logger = require("./utils/logger");
  const swaggerUi = require('swagger-ui-express');
  // const swaggerSpec = require('./config/swagger'); 
  const cors= require("cors");


  

  const app = express();

  app.use(express.json());

  const server = http.createServer(app);

  app.use(cors({
    credentials: true,
    origin: "*",
    methods:"GET,POST,PUT,DELETE"
  }));




  //api section
  app.use("/choir_manager/v1/auth", authRoutes);  
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



  server.listen(PORT, () => {
    logger.info(`WebSocket  and server are both running on port ${PORT}...`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
