# Lunch-Rush
Lunch Rush Inventory Management 

### Capstone Final 
This project includes a collaboration between multiple people in order to build a Web Application for our Final Capstone Course at ASU. 

* The site is still live as of December 2023 at Lunchrush.net
* We built the site using AWS including a customer VPC, multiple EC2 instances, and RDS.
* Using Nginx we built a reverse proxy that pass traffic to a nodejs/express server in the private subnet of our VPC.
    * As of now we are not serving any static files via Nginx, really it passes all traffic to the node server and all application code and content are served from there.
    * This may change in the future if contiuned works allows static content to be provided via the reverse proxy.
* As of now the site can be access with the username: nlopez99
    * And the password: password19
