# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server might hang after receiving a request that involves a long-running operation without proper handling.

## Description

The `server.js` file contains a simple Express.js server that responds to requests after a 5-second delay.  Without proper asynchronous handling, if multiple requests arrive simultaneously, the server can become unresponsive and require a forceful termination.

## Solution

The `serverSolution.js` provides a solution using asynchronous operations to avoid blocking the event loop, ensuring the server remains responsive even under load.