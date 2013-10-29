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

  latest:
    verb: GET
    path: /user/events/:event-uid/collections/:collection-pname/media/lastest
    param: length (default 20), order_direction, order_by (default media.taken_at), scoped_to
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/collections/all/media/latest.json?api_key=API_KEY
    description: 'Returns latest media (max 50) of a collection of an event.'
    sample_response: |
      {
        next_media:[
          {
            _macro_medium_type:0,
            address: null,
            author_name: "François-Joseph Grimault",
            author_profile_photo_url: "//d26wx9sgnlbtbs.cloudfront.net/p_user/4df2411c84fdc69edb000002/square-fjg-hackfwd.jpg?1355501526",
            contributor_id: "u4df2411c84fdc69edb000002",
            created_at: "2013-10-23T11:38:42Z",
            exif_model: "NIKON D7000",
            ext_share_count: {},
            large_height: 589,
            large_url: "//dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b530023d0f93c6000001/large-gba111220131023-22334-sczp3s.jpg?1382528307",
            large_width: 1024,
            like_count: 0,
            liker_names: [],
            location: null,
            original_height: 2637,
            original_width: 4587,
            remote_url: null,
            share_count: 0,
            small_url: "//dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b530023d0f93c6000001/small-gba111220131023-22334-sczp3s.jpg?1382528307",
            source_id: "5267b512bd58be50e9001ada",
            square_url: "//dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b530023d0f93c6000001/square-gba111220131023-22334-sczp3s.jpg?1382528307",
            status: 3,
            thumbnail_url: "//dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b530023d0f93c6000001/thumbnail-gba111220131023-22334-sczp3s.jpg?1382528307",
            title: "gba1112.jpg","
            uid: "v2nfubjqb20k8xy6",
            id: "5267b530023d0f93c6000001",
            f_taken_at: 1321475990,
            owner_id: "4df4211c84fdc69edb000002",
            small_width: 200,
            small_height: 114,
            page: 1,
            provider: "upload"
          },
          {
            ...
          }
        ]
      }

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

  show:
    verb: GET
    path: /user/events/:event-uid/collections/:collection-pname/media/:media-id
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/collections/favorites/media/:media-id.json?api_key=API_KEY
    description: 'Return details for one media of a collection of an event.'
    sample_response: |
      {
        id: "5267b5261b3bf2d895000001",
        provider: "upload",
        title: "gba1113.jpg",
        share_url: "https://www.sharypic-dev.com/share/cxla5c1z3tf3iuku",
        author_name: "François-Joseph Grimault",
        location: null,
        l_w: 1024,
        l_h: 657,
        type: "photo",
        author_profile_photo_url: "https://d26wx9sgnlbtbs.cloudfront.net/p_user/4df2411c84fdc69edb000002/square-fjg-hackfwd.jpg?1355501526",
        created_at: "2013-10-23T11:38:27Z",
        taken_at: "2011-11-16T20:44:35Z",
        square_url: "https://dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b5261b3bf2d895000001/square-gba111320131023-24870-1yhllob.jpg?1382528296",
        thumbnail_url: "https://dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b5261b3bf2d895000001/thumbnail-gba111320131023-24870-1yhllob.jpg?1382528296",
        small_url: "https://dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b5261b3bf2d895000001/small-gba111320131023-24870-1yhllob.jpg?1382528296",
        medium_url: "https://dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b5261b3bf2d895000001/medium-gba111320131023-24870-1yhllob.jpg?1382528296",
        large_url: "https://dbfzbb3dp9m3.cloudfront.net/p/5267b508bd58becca10018f9/5267b512bd58be50e9001ada/5267b5261b3bf2d895000001/large-gba111320131023-24870-1yhllob.jpg?1382528296"
      }

 infos:
    verb: GET
    path: /user/events/:event-uid/media/:media-id/infos
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/media/:media-id/infos.json?api_key=API_KEY
    description: 'Return advanced details for one of event media.'
    sample_response: |
      {
        id: "5267b5261b3bf2d895000001",
        remote_url: null,
        like_count: 0,
        share_count: 0,
        exif_model: "NIKON D7000",
        exif_make: "NIKON CORPORATION",
        exif_flash: "16",
        exif_exposure: "1/80",
        exif_focallength: "22/1",
        exif_fstop: "14/5",
        exif_iso: "3200"
      }

---
