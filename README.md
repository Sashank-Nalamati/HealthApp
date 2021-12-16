# KillerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## How to run the code
After installing node in your machine, paste the aws_exports file into the root folder of this project. After this run "npm i" to install all dependencies. Finally run "ng serve" to run the application.
In case of failure, try to delete the package_lock.json file and run the above two commands again.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components introduction

There are "Home Component", "Login", "Register", "Confirm User", "Doctor/patient List", "Medical Record", "Schedule" and "Video Chat" Compoents.

The page routing details can be found in "app-routing.module.ts" file.

## Patient Instruction

Once you started the app, we can register a new account based on your info. One verify-code email will be sent to your email account and copy the code to confirm your code on the web.

As a patient, you can have the access the home page, schedule page, medical record page, doctor list page and video chat page.

## Doctor Instruction

Doctor Account: sashank/123123123.

In addition to the all the pages metioned in patient instruction, doctors have the access to uploading the medical record of each patient. The gate is in the patient list page with the medical record button. Also, doctors can approve the requests in the home page.
