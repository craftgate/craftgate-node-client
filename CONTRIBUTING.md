
# Contributing to Craftgate Node Client
As an open-source project, anyone can contribute to the development of `@craftgate/craftgate`. If you decide to do so, please be aware of the guidelines outlined below.

`@craftgate/craftgate` is written in TypeScript, which can be considered as a superset of JavaScript, so in order to contribute to the project, some familiarity with type systems and overall JavaScript knowledge is welcome.

## Prerequisites
This project uses [ava](https://github.com/avajs/ava) as its test runner, which in turn uses [yargs-parser](https://github.com/yargs/yargs-parser) to parse command-line arguments.

This dependency enforces an unnecessary Node.js version limitation which can be limiting for some people. In the future we might consider switching to a different test runner if this turns into an unmanageable issue.

- Node.js v10+

## Folder Structure
The project has a straightforward folder structrue; the source files are located under the [src/](./src), sample integrations are located under [samples/](./samples), and tests are located under [tests/](./tests). Any build or test/coverage artifacts are placed under untracked folder such as:

- `dist/`: Build artifacts
- `.nyc_output` and `coverage`: Coverage results

As outlined in the [README](./README.md), the bulk of the project is split into the following categories:

- Adapters: Located under the [src/adapters](./src/adapters) folder, these are classes that are responsible for managing a certain domain
- Libraries and Utilities: Located under [src/lib](./src/lib), these are utility functions and libraries that can be used project-wide
- Enumerations and Domain Objects: Located under [src/model](./src/model), these are enumerations, constants and domain object models that can be used by request and response classes
- Requests: Located under [src/request](./src/request), these are type definitions for request formats. Note that these are only `type` definitions, so they don't enforce or validate any request data, and only serve as type hints
- Response: Located under [src/response](./src/response), these are type definitions for response formats. Note that these are only `type` definitions, so they don't enforce or validate any response data, and only serve as type hints
- Module Globals: Located under [src/](./src), these files define global classes for the project, as well as the export the root module for Common-JS compatibility

## Code Style
This project contains an ESLint configuration that includes recommended settings for both JavaScript and TypeScript, arbitrary `prettier` settings that are built on JavaScript conventions, as well some import ordering rules. Before opening up a PR, please run the following command to check the code for errors:

```bash
$ npm run lint:check
```

While this command only lists any errors and warnings that are encountered, you can also try to fix them automatically, which will probably work most of the time:

```bash
$ npm run lint:fix
```

## Tests and Coverate
As a payment systems client, it's important to have a high test coverage. In addition to tests that test crucial parts of the libraries and utilities, we also have tests with mock HTTP clients for request/response formats, which act as contact tests.
