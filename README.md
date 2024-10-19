# Cypress Project

This project uses Cypress for end-to-end testing with Cucumber for BDD (Behavior Driven Development).

## Project Structure

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running Tests

To run the Cypress tests, use the following command:
```sh
npx cypress open
```
This will open the Cypress Test Runner, where you can run the tests interactively.

## Project Configuration
The Cypress configuration can be found in the cypress.**config.js** file.

## Reports
Test reports are generated in the **cypress/cucumberReports/** directory. The HTML report can be found at **cypress/cucumberReports/cucumber-htmlreport.html/index.html**.

## Support
Support files and custom commands are located in the **cypress/support/** directory. For example, custom commands are defined in **cypress/support/commands.js**.

## Fixtures
Test data is stored in the **cypress/fixtures/** directory. For example, **cypress/fixtures/example.json** contains sample data.