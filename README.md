# Design of Intellectual Network Management System

## Overview
## Introduction

This project aims to design a network management system responsible for network configuration and data visualization. The system runs on PetaLinux (a variation of Linux system) made for the PS (a arm based processor embedded in Xilinx SoC), with user interface implementation in HTML/JavaScript and a service that converts user input/output to/from the core functional module which executes the controlling commands on the network.


## System Configuration

## System Implementation


### Website

Open source dependencies for this project are:

* [Element UI](https://element.eleme.io/) - The UI library written in HTML/CSS/JavaScript 
* [Vue.js](https://vuejs.org/) -  The dependency of Element UI, a powerful JavaScript component for binding data from JavaScript objects to HTML elements.
* [webpack](https://webpack.js.org) - A helpful toolkit from website packaging and deployment

To deploy the website, μWeb should be installed on PetaLinux.

### Web Server

An existent PHP implementation has been supported by PetaLinux ,thereby he our web server program will mainly be written in PHP.

