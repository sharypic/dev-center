## API Overview

All of our API endpoints are accessible on `https://api.sharypic.com/v1/` (HTTPS is mandatory).

All services require authentication: you first have to [generate a personal API key](http://sharypic.com/user/api_key) (require to be signed in). And then you need to pass the key:

* as a query string parameter: `https://api.sharypic.com/v1/user/events?API_KEY=...`
* or as a http header: `curl -X DELETE --header "X-API-Key: ..." https://api.sharypic.com/v1/user/events/:event-uid`

Current API version is **1**

## REST conventions

All services follow REST conventions, responding to conventional HTTP verbs (`GET`, `POST`, `PUT` and `DELETE`) with JSON documents.

We also leverage on HTTP return codes in following circumstances:

* `200` when everything went well!
* `400` when request parameters are incorrect
* `401` if user could not be authenticated (missing or bad `API_KEY`)
* `403` if user is not authorized to perform an action on the given resource.
* `404` if you try to perform an action on a non-existent resource.
* `500` ... whoops!

--

# Details

## User events
[List events](/api/user/events.html)
[Create event](/api/user/event_create.html)

## Collections


## Media
