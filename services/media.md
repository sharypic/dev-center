---
layout: service
endpoint: media

services:
  index:
    verb: GET
    path: /user/events/:event-uid/media
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/media.json?api_key=API_KEY
    description: 'Returns a list of media of an event.'
    sample_response: |
      [
        {
          name: "All photos",
          pname: "all",
          visible_media_count: 59
        },
        {
          name: "Most liked photos",
          pname: "favorites",
          visible_media_count: 0
        },
        {
          name: "Shared photos",
          pname: "shared",
          visible_media_count: 12
        },
        ...
      ]

  show:
    verb: GET
    path: /user/events/:event-uid/media/:media-id
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/media/:media-id.json?api_key=API_KEY
    description: 'Return details for one of event media.'
    sample_response: |
      {
        name: "All photos",
        pname: "all",
        visible_media_count: 59,
        media: [
          {
            id: "4df2420184fdc69edb004a42",
            provider: "yfrog",
            title: "sample media title #hashtag",
            share_url: "https://www.sharypi.com/share/t4f2egztydkvzgr9",
            author_name: "@user",
            location: null,
            l_w: 640.0,
            l_h: 478.0,
            type: "photo",
            author_profile_photo_url: "http://a0.twimg.com/profile_images/1707731634/mipworld2012-twitter-128x128_normal.png",
            created_at: "2011-06-10T16:10:41Z",
            taken_at: "2011-04-04T09:30:07Z",
            square_url: "http://yfrog.com/h2vb9jxj:small",
            thumbnail_url: "http://yfrog.com/h2vb9jxj:small",
            small_url: "http://yfrog.com/h2vb9jxj:medium",
            medium_url: "http://yfrog.com/h2vb9jxj:medium",
            large_url: "http://yfrog.com/h2vb9jxj:medium"
          },
          {
            id: "4df4220184fdc69edb004a42",
            ...
          }
        ]
      }


 infos:
    verb: GET
    path: /user/events/:event-uid/media/:media-id/infos
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/media/:media-id/infos.json?api_key=API_KEY
    description: 'Return advanced details for one of event media.'
    sample_response: |
      {
      }

---
