# 22px Website

A NodeJS Express Application.

* Node - 8.15.0
* Express - 4.16.0

### Version control
**GitHub:** [https://github.com/twenty-two-pixels/twenty-two-pixels](https://github.com/twenty-two-pixels/twenty-two-pixels)

### Developing

* Run `git clone https://github.com/twenty-two-pixels/twenty-two-pixels`
* Run `cd twenty-two-pixels`
* Run `npm install`
* Run `DEBUG=* npm start`

##### Environment Variables
* `NODE_ENV` - Sets the env specific data. Defaults to `test`.

**How NODE_ENV is set**

This is set by the name of the folder the application is running in.
The file `.build-scripts/set-node-eng.js` contains the mappings for folder name to `NODE_ENV`.
If no folder name is matched the `NODE_ENV` is set to test.


##### Developing locally

To start working locally you should use the comments `debug` or `watch`. The later is the same as the first however it watches for changes.

##### NPM Scripts
* **start** - Starts the app.
