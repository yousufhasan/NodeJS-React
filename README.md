# NodeJS-React Application

This is a full stack javascript solution where i am using nodejs/expressjs at the backend and reactjs on the front end. To show the full stack behavior all the discount logic is applied at the nodejs level.

### Assumptions

1) Discounts will be applied on every n number of purchases. For example, If a discount rule says "Buy 2 for $1500" for the original price of 800 each.
That would mean we can buy 2 items for 1500 and 4 items for 3000.

2) If an event has multiple promotions, both promotions will be applied. For example: If 1 rule says "Buy 2 get 1 free" and another rule says "Buy 4 and only pay for 3" then both rules will be applicable, which in case would mean if we buy 4 events we will get 2 free events and will only pay for 3 events since the second rule is applicable as well.


### Approach

I have taken a very flexible approach which allow us to create new discount rules easily (based on open/closed principal) and apply it on any event easily.

### Steps 

To install all the frontend/backend dependencies, Please run the following command first:

```javascript
npm install && npm postinstall
```
Once everything is installed, then run the following command to start the nodejs and reactjs server.


```javascript
npm run start
```
Browse http://localhost:3000 to open the application.



