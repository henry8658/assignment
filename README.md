# assignment

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm run build
$ npm start
```

### APIs

**getDiscount**
----
  Returns boolean which indicates avalibility of discount to customer

* **URL**
  /getDiscount
* **Method:**
  `POST`

* **Success Response:**
  * **Code:** 200
    **Content:** `{"isDiscountAvailable":false}`
* **Sample JSON Body:**
    
  ```javascript
    {
        "id" : "123" // customer id
    }
  ```

**purchase**
----
  Returns boolean which indicates whether purchase was made with discount
  If there is a discount available, then make a purchase with discount.

* **URL**
  /purchase

* **Method:**
  `POST`

* **Success Response:**
  * **Code:** 200
    **Content:** `{"perchasedWithDiscount":false}`

* **Sample JSON Body:**
  ```javascript
    {
        "id" : "123" // customer id
    }
  ```

**setDiscount**
----
  Set discount code for every nth transactions

* **URL**
  /setDiscount
* **Method:**
  `POST`

* **Success Response:**
  * **Code:** 200
    **Content:** `{"success":true,"n":12}`

* **Sample JSON Body:**
    
  ```javascript
    {
	    "n": 12, //nth transaction
	    "discountCode": "123az"
    }
  ```

**getTotalPurchaseCount**
----
  Returns number of total purchases

* **URL**
  /getDiscount
* **Method:**
  `GET`

* **Success Response:**
  * **Code:** 200
    **Content:** `{"totalPurchaseCount":0}`

**getTotalDiscount**
----
  Returns number of total purchases with discount

* **URL**
  /getTotalDiscount
* **Method:**
  `GET`
* **Success Response:**
  * **Code:** 200
    **Content:** `{"totalDiscountCount":0}`


