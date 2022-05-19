# Base-JS
JS boilerplate of stupid function I keep rewriting

- [Base-JS](#base-js)
  - [On ready vanilla JS](#on-ready-vanilla-js)
  - [Dates](#dates)
    - [Date to string](#date-to-string)
    - [First day of the month](#first-day-of-the-month)
    - [Last day of the month](#last-day-of-the-month)
  - [Cookies](#cookies)
    - [Get a cookie](#get-a-cookie)

## On ready vanilla JS

```js
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
```

## Dates

### Date to string

Transform a date in param into a standard string

```js
function date_to_string(date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth()+1)).slice(-2);    
    return `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
```


### First day of the month

```js
function get_first_day_of_month() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth(); 
    return new Date(year, month, 1);
}
```

### Last day of the month

```js
function get_last_day_of_month() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    return new Date(year, month + 1, 0);
}
```

## Cookies

### Get a cookie

```js
/**
 * Get CSRF token from django so we can use it to send API request
 * @param  {} name
 */
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
```