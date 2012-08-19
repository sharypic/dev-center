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
    sample_url: 'curl --header "X-API-Key: API_KEY" http://api.sharypic.com/v1/user/events/ -F "name=New event"'
    description: |
      Create a new event.
    mandatory_params:
      - {name: 'name', description: 'event name'}
    optional_params:
      - {name: 'description', description: 'event description'}
      - {name: 'pname', description: 'parameterized name of the event (if you want a http://sharypic.com/my-pname style url)'}
      - {name: 'public', description: 'is the event public? (boolean)'}
      - {name: 'hashtag', description: 'hashtag to use to crawl photos'}
      - {name: 'begins_at', description: 'beginning date of event (UTC number of seconds since 1970)'}
      - {name: 'ends_at', description: 'end date of event (UTC number of seconds since 1970)'}
      - {name: 'location[lat]', description: 'event venue latitude'}
      - {name: 'location[lng]', description: 'event venue longitude'}
      - {name: 'location[name]', description: 'event venue address name'}
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