# Welcome to Movies Challenge!

Hi, this is a services to see all movies from the best platforms as Netflix, Prime Video and Disney Plus.
You can Get, Create, Update and Delete a movie.
This service is developed in AWS SAM.

With these steps, you can get this service on your local machine.


# Prerequisite

You must install SAM CLI in your machine.

Install for **MAC** or **Linux** SAM CLI using Brew

    $~ brew tap aws/tap
    $~ brew tap aws/tap


Install for **Windows**  SAM CLI using an MSI

 - For SO [64 bit](https://github.com/awslabs/aws-sam-cli/releases/latest/download/AWS_SAM_CLI_64_PY3.msi)


Requires Docker and the AWS CLI. You can to see [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) how

## Get Started

After that you installed the SAM CLI, you can clone the repository.

    git clone https://github.com/ivanojgarcia/movies-challenge.git

Now we enter the folder **movies-challenge** and after that the service folder **ms-movies**

    $~ cd movies-challenge
    $~ cd ms-movies
We install the node modules

    $~ npm install

With this you have to install the service in your machine.

## Import Data Dummy for tests

This services have a method or script for create the databases, tables and inject data for initial functionality.
It's possible thank to Sequelize ORM, installed in our services. For this is necessary execute the next commands:

> **Note**: You must be into the folder or directory **ms-movies** to make it work

**For create our DB:**

    $~ npm run create:db
**For create tables:** 

    $~ npm run migrate

**For inject data:**

    $~ npm run seed:all