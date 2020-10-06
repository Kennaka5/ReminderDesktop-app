# Reminder Project

## About the Application ##
 
The ReminderProject is a destop app that reads a .yaml in the root directory to send reminder messages via  **Desktop notificatios** or **Email notifications**, pending on how the user would like their reminder message recived.



## Steps to install this app ## 

1. Create a folder on your computer so you have a _designated folder_ to open the application.

2. run npm init to create a package Json

3. Install the following dependencies: npm install **CronJob, js-yaml nodemailer, node-notifier** 

4. Git Clone this project into your _designated folder_



## Required Data##

- ### .reminder.yaml
    - there will already be a .reminder.yaml file in your cloned project for you to test the application.  
    - Each reminder obect must have the following parameters defined:
        1. name (the subject header of the message)
        2. message (the message body)
        3. schedule (this must be a value compatable with the Cron time format)
           - for help defining cron time please visit _https://crontab.guru/_
        4. type (the type of notification you would like to recive: Desktop or Email)
    - For more information see **exmaple yaml config**

- ### required ENV variables (email)
    -this application uses a .env file to protect the email address and password of the useres email account
        1. create a .env file in your root directory and assigin the following variables:

        REMINDER_EMAIL=<YOUR EMAIL HERE>
        REMINDER_EMAIL_PASSWORD=<YOUR EMAIL PASSWORD HERE>


## exmaple yaml config ##

- name: Trash reminder
  schedule: '5 * * * *'
  message: remind me to take out the trash
  alert: email,desktop
- name: Pay phone bill
  schedule: '5 4 1 * *'
  message: time to pay the phone bill
  alert: email


## how to run this application

To run this application navigate to the root directory of your _designated folder_ and run 'npm start' to run the application 
