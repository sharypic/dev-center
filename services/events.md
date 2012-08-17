---
layout: service
endpoint: event

services:
  index:
    verb: GET
    path: /user/events
    sample_url: https://api.sharypic.com/v1/user/events.json?api_key=API_KEY
    description: |
      Returns a list of all your events.
    sample_response: |
      [
        {
          uid: "axn6vzlnp134168m",
          name: "Sample event",
          description: "Event description",
          pname: "sample-event",
          public: false,
          hashtag: "#sample_hashtag",
          picture_count: 212,
          visible_picture_count: 204,
          cover_picture_url: null,
          url: "http://sharypic.com/sample-event",
          location: {
            lat: 48.13,
            lng: 2.35,
            name: "Paris, France"
          },
          begins_at: 1345197124,
          ends_at: null,
          updated_at: 1345197124,
          created_at: 1345197124
        }, ...
      ]

  post_event:
    verb: POST
    path: /user/events
    sample_url: curl -F "access_token=ACCESS-TOKEN" http://api.sharypic.com/v1/events/
    description: |
      Create a new event.
    mandatory_params:
      name: event name
    optional_params:
      description: event description
      pname: parameterized name of the event (if you want a http://sharypic.com/my-pname style url)
      public: is the event public? (boolean)
      hashtag: hashtag to use to crawl photos
      begins_at: beginning date of event (UTC number of seconds since 1970)
      ends_at: end date of event (UTC number of seconds since 1970)
      location[lat]: event venue latitude
      location[lng]: event venue longitude
      location[name]: event venue address name
    sample_response: |
      {
        uid: "axn6vzlnp134168m",
        name: "Sample event",
        description: "Event description",
        pname: "sample-event",
        public: false,
        hashtag: "#sample_hashtag",
        picture_count: 212,
        visible_picture_count: 204,
        cover_picture_url: null,
        url: "http://sharypic.com/sample-event",
        location: {
          lat: 48.13,
          lng: 2.35,
          name: "Paris, France"
        },
        begins_at: 1345197124,
        ends_at: null,
        updated_at: 1345197124,
        created_at: 1345197124
      }

  delete_event:
    verb: DEL
    path: /user/events/:event-uid
    sample_url: 'curl -X DELETE --header "X-API-Key: API_KEY" https://api.sharypic.com/v1/user/events/:event-uid'
    description: |
      Deletes one of your events.

---