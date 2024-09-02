- [Frontend Task for Cyparta by Ahmed Saeed Fatahallah](#frontend-task-for-cyparta-by-ahmed-saeed-fatahallah)
  - [Installation](#installation)
  - [Run the App](#run-the-app)
  - [Navigate the App](#navigate-the-app)
  - [folder structure](#folder-structure)

# Frontend Task for Cyparta by Ahmed Saeed Fatahallah

## Installation

1. Start by installing all dependencies by opening the console and running `npm install`.

## Run the App

1. When the installation is complete, start the app by running `npm run dev`.

## Navigate the App

1. The app will start on the home page. Click on the **_Go to Login Page_** button to navigate to the login page.
2. Enter the username and password into the respective input fields to log in. Both inputs are required and will show an error message if left empty or if the username or password is incorrect:
   - Username: **test@task.com**
   - Password: **123456**
3. Click on the **_Login_** button to log in.
4. Once logged in, you will be redirected to the profile page with the user data fetched.
5. You can **click** the user photo in the header to show the dropdown menu for the **_Logout_** button. If you click **_Logout_**, you will be redirected back to the login page.
6. On the profile page, you will find a static sidebar on the left for navigation. You can use it to navigate to other pages, but they are not implemented. You can also click on the company's logo to navigate to the home page.
7. On the profile page, you will find the user data in two sections:
   - Upper section with fields for **_User Photo_**, **_Name_**, **_Bio_**, **_Email_**, and an **_Edit Profile_** button.
8. Click on the **_pen icon_** next to the bio field to edit it. You can submit your changes by pressing Enter after you are done.
9. Click on the **_Edit Profile_** button to start editing the user data in the lower section.
10. When the edit mode is activated, the bottom borders will change color to `red`. You can start editing, and when you are done, you can submit by clicking on the **_Submit_** button or abort by clicking on the **_Cancel_** button.

**_Note_**: The edit endpoint returns the same email even after changing it.

## folder structure

```
└── 📁src
    └── 📁app
        └── 📁(userPages)
            └── 📁advanced_payment
                └── page.tsx
            └── 📁dashboard
                └── page.tsx
            └── 📁employees
                └── 📁attendance
                    └── page.tsx
                └── 📁profile
                    └── BioForm.tsx
                    └── page.tsx
                    └── TabsContainer.tsx
                    └── UserDataSection.tsx
                    └── UserDataTopSection.tsx
                └── 📁tasks
                    └── page.tsx
            └── 📁holidays
                └── 📁holyday
                    └── page.tsx
            └── 📁payroll
                └── page.tsx
            └── error.tsx
            └── Header.tsx
            └── layout.tsx
            └── SideBar.tsx
            └── UserMenu.tsx
        └── 📁login
            └── LoginForm.tsx
            └── page.tsx
            └── SubmitButton.tsx
        └── globals.css
        └── HomeBtn.tsx
        └── layout.tsx
        └── page.tsx
    └── 📁assets
        └── 📁images
            └── akar-icons_dashboard.svg
            └── briefcase 04.svg
            └── calendar-check.svg
            └── carbon_task.svg
            └── clarity_employee-group-line.svg
            └── coin-dollar.svg
            └── cypartal_logo.svg
            └── document-text.svg
            └── edit.svg
            └── file 01.svg
            └── gmail.svg
            └── icon _wallet.svg
            └── lock.svg
            └── notificationIcon.svg
            └── user.svg
            └── Vector.svg
    └── 📁Components
        └── Button.tsx
        └── HamburgerBtn.tsx
        └── InputField.tsx
        └── ProfileDataField.tsx
        └── StyledLink.tsx
    └── 📁Utils
        └── fonts.ts
        └── Network.ts
        └── utils.ts
    └── actions.ts
    └── types.ts
```
