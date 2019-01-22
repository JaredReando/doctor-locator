# Doctor Locator

#### January 18th, 2019

### _Jared Reando_

## Description

Doctor search site built off of the BetterDoctor API. Search for local health care providers by doctor name or symptom terms.

Features:
  - Uses ZIP code input to search for local results.
  - Narrow search results by radius from location.
  - Select search filtering by doctor or symptoms.

Utilizes custom NPM package ['convert-zip-to-gps'](https://github.com/JaredReando/convert-zip-to-gps) to determine GPS location by ZIP code input.

## Setup and Installation

1. Clone the project from https://github.com/jaredreando/doctor-locator.git to a local directory

2. Install project dependencies:
```console
npm install
```
3. Build and launch project into web browser:
```console
npm run build
```
```console
npm run start
```
4. For testing, obtain a free BetterDoctor API key from https://developer.betterdoctor.com/

4. Using the Terminal, create a '.env' file in the root project directory and save your unique API key as the variable "exports.apiKey":
```console
touch .env
```
```console
echo "exports.apiKey=[YOUR KEY INFO GOES HERE]" >> .env
```

## Support and Contact Details

For questions or feedback, email me at jaredreando@gmail.com

## Technologies used

Created with JavaScript, using Webpack

## Legal
MIT License

Copyright 2019 Jared Reando

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
