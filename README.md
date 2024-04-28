# food-delivery

Initial draft- Idea is to create a replica of food delivery application using react
At a very high level- the component breakdown planned

This is a sample application created without using npx-create-app, to understand the idea behind how react works

Frameworks

<!-- -Parcel- https://parceljs.org/ - build tool
    HMR- Hot module reload
    minifying
    bundling
    hosting
    dev server
    code splitting
    tree shaking
    caching-->

## Main component- Application

    ### Header
        ## Logo
        ## Home
        ## about
        ## cart
    ## Body
        ## search
        ## resturant card container
            ## resturant card
                ## name
                ## image
                ## rating
    ## Footer
        ## copyright
        ## contact

## Steps

Step 1- Draft a plan
Step 2- Initilize npm- to manage all packages
Step 3- Installing parcel as a dev dependency
Step 4- Start dev server shippe with parcel- npx parcel index.html

## Redux

Install RTK and react-redux
Set up redux store
Create a slice
Add Provider
Dipatch action
Subscribe using selector

# Testing

Install React testing library
Install jest
Install babel dependencies
override parcel babel default configuration
configure npx jest --init
Install jsdom library
install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react in babel config
npm i -D @testing-library/jest-dom

# To Do

do not allow items from multiple restaurant in cart
show pope up and clear if required
show + - button
error handling page
page when internet is off
