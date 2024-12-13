# 08 TypeScript and OOP: Vehicle Builder

## Discription

This project is a Command Line Interface (CLI) application for managing a fleet of vehicles. It allows users to create different types of vehicles (Cars, Trucks, and Motorbikes), interact with them, and perform various actions.

## Features
   ** Create Vehicles: Add new vehicles to your fleet (Car, Truck, or Motorbike).

   ** Select Vehicles: Choose a vehicle from the existing fleet to perform actions on.

   ** Perform Actions:

   ** Print details of the selected vehicle.

   ** Start, accelerate, decelerate, and stop vehicles.

   ** Turn vehicles left or right, or put them in reverse.

   ** Perform specific actions like towing (for Trucks) or wheelies (for Motorbikes).

   ** Dynamic Prompts: The CLI dynamically updates based on available vehicles and their capabilities.

## Installation
   ** Prerequisites
   ** Node.js (version 14 or later)

## Usage 

 * Clone the repository:

git clone <repository_url>
cd <repository_directory>
Install dependencies:

npm install
Run the application:

node index.js
Usage
Start the CLI
con

Creating a Vehicle
Select the type of vehicle (Car, Truck, or Motorbike).

Enter details for the vehicle, such as color, make, model, year, weight, and top speed.

If creating a Truck, specify its towing capacity.

Selecting a Vehicle
Choose an existing vehicle from the fleet to perform actions. The vehicle's details will be displayed in the selection prompt.

Performing Actions
After selecting a vehicle, you can:

Print its details.

Start or stop the vehicle.

Adjust the speed (accelerate or decelerate).

Perform specialized actions:

Towing: Trucks can tow another vehicle from the fleet.

Wheelies: Motorbikes can perform wheelies.

Exiting
Choose the "Exit" option at any point to quit the application.

Project Structure
index.js: Entry point for the application.

Cli.js: Main CLI logic for managing vehicles and user interactions.

Car.js, Truck.js, Motorbike.js: Classes representing different vehicle types.

Vehicle.js: Base class for all vehicles.

Extending the Application
To add new vehicle types or actions:

Create a new class extending the Vehicle base class.

Update the Cli.js file to include prompts and logic for the new vehicle type.

Add any specialized actions to the performActions method.

Dependencies
inquirer: Used for interactive CLI prompts.

Install dependencies using:

## Installation

`
Using Typescript, run npm start in index.ts Integrated Terminal. Follow input prompts to add new vehicle or select eupdate an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.
```

## Usage



## Demonstration Video

## License

This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

Your application should use [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
npm start
```

## 📝 Notes

Moving forward, you will be provided with the `tsconfig.json` file. This is to reflect the fact that most companies assign you projects with these configurations already set up.

## Helpful TypeScript Resources

* [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

* [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

* [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

* [More on functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Grading Requirements

> **Note** If a Challenge assignment submission is marked as "0," it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 20%

* A walkthrough video that demonstrates the functionality of the Vehicle Builder.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate all the prompts and functionality related to trucks and motorbikes working properly.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * It uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

  * The application must have properly implemented `Truck` and `Motorbike` classes:

    * The user should be able to choose between a car, a truck, or a motorbike when creating a vehicle.

    * The `Truck` and `Motorbike` classes must prompt the user for details that the `Car` class doesn't.

    * The `Truck` class must allow the user to implement an action that the `Car` and `Motorbike` classes cannot.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
