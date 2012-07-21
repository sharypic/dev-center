---
layout: service
endpoint: event

services:
  show_event:
    verb: GET
    path: /events/event-id
    sample_url: http://api.sharypic.com/v1/event/12?access_token=ACCESS_TOKEN
    description: |
      Returns detailed informations for an event.
    mandatory_params: [toto,titi,tutu]
    optional_params: [toto,titi,tutu]
    sample_response: | {
        "uid":"s278rj4ghg3m4gm4",
        "name":"gba11",
        "picture_count":393,
        "visible_picture_count":393,
        "cover_picture_url":"http://p.twimg.com/AeXbWnXCEAAqoxi.jpg:small",
        "cover_width":600,
        "cover_height":400,
        "people_count":176,
        "url":"http://gba11.sharypic-dev.com:3000/",
        "created_at":1321447175,
        "updated_at":1321539397,
        "last_update_index":353,
        "status": 0,
        "social_enabled": true
      }

  post_event:
    verb: POST
    path: /events
    sample_url: curl -F 'access_token=ACCESS-TOKEN' http://api.sharypic.com/v1/events/
    mandatory_params: [toto,titi,tutu]
    optional_params: [toto,titi,tutu]
    description: |
      Create a new event.
    sample_response: |
      {
        "uid":"s278rj4ghg3m4gm4",
        "name":"gba11",
        "picture_count":393,
        "visible_picture_count":393,
        "cover_picture_url":"http://p.twimg.com/AeXbWnXCEAAqoxi.jpg:small",
        "cover_width":600,
        "cover_height":400,
        "people_count":176,
        "url":"http://gba11.sharypic-dev.com:3000/",
        "created_at":1321447175,
        "updated_at":1321539397,
        "last_update_index":353,
        "status": 0,
        "social_enabled": true,
        "pictures": [
          {
            "uid":"4ec5173130d9f71b45000003",
            "large_url":"http://yfrog.com/h261282297j:medium",
            "large_width":480,
            "large_height":640,
            "title":"@Katsuni est aux #gba11 humm",
            "source_type":"yfrog",
            "author_name":"@antoon619",
            "author_profile_photo_url":"http://a1.twimg.com/profile_images/131437/47421_1_6_657534_normal.jpg",
            "like_count":12,
            "liked_by_current_user":false,
            "created_at": 1321538363,
            "share_url": "http://sharypic.com/share/67aed683Z4a",
            "invitation_url": "http://sharypic.com/invite/45ezr87e"
          },
          ...
        ]
      }
---