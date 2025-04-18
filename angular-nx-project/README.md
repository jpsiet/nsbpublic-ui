# Angular Nx Project

This project is an Angular application managed with Nx, a powerful set of tools for monorepo development. It provides an organized structure for building and maintaining applications and libraries.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd angular-nx-project
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```
nx serve nsbpublic-ui
```

This will start the development server and open the application in your default web browser.

### Building the Application

To build the application for production, run:

```
nx build nsbpublic-ui
```

The output will be generated in the `dist` directory.

### Testing

To run tests for the application, use:

```
nx test nsbpublic-ui
```

### Directory Structure

- `apps/nsbpublic-ui`: Contains the main application code.
- `libs`: Intended for shared libraries across applications.
- `tools/scripts`: Custom scripts for various tasks.
- `nx.json`: Nx workspace configuration.
- `angular.json`: Angular CLI configuration.
- `package.json`: npm configuration file.
- `tsconfig.base.json`: Base TypeScript configuration.
- `workspace.json`: Workspace-wide configuration for Nx.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.