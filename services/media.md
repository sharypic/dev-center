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
    optional_params:
      - {name: 'length', description: 'number of media to return, default: 50'}
      - {name: 'order_direction', description: 'asc or desc', default: "desc when event is live, asc when event is over"}
      - {name: 'order_by', description: 'field for ordering', default: "taken_at"}
      - {name: 'scoped_to', description: 'limit media to pictures and/or videos', default: "pictures & videos"}
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

  since:
    verb: GET
    path: /user/events/:event-uid/collections/:collection-pname/media/since
    sample_url: https://api.sharypic.com/v1/user/events/:event-uid/collections/:collection-pname/media/since?length=50&scoped_to=pictures&api_key=API_KEY
    description: 'Return media since a last media id.'
    optional_params:
      - {name: 'length', description: 'number of media to return, default: 50'}
      - {name: 'order_direction', description: 'asc or desc', default: "desc when event is live, asc when event is over"}
      - {name: 'order_by', description: 'field for ordering', default: "taken_at"}
      - {name: 'scoped_to', description: 'limit media to pictures and/or videos', default: "pictures & videos"}
      - {name: 'picture_id', description: 'last media id'}
    sample_response: |
      [
        {
          author_profile_photo_url: "//d26wx9sgnlbtbs.cloudfront.net/p_user/55e562578f8e2900820121f9/square-Venus_Brandenburger_Tor_-_Kopie.jpg?1444044669",
          liker_names: [],
          small_height: 200,
          created_at: "2015-09-24T11:48:18.216Z",
          liker_ids: [],
          original_width: 1456,
          original_height: 2592,
          _macro_medium_type: 0,
          large_height: 1823,
          contributor_id: "u55e562578f8e2900820121f9",
          title: "Venus-Of-Berlin_23-09-2015.jpg",
          id: "5603e2fdb053bc1a5a000000",
          remote_url: null,
          exif_model: "HUAWEI Y550-L01",
          profile_url: null,
          owner_id: "55e562578f8e2900820121f9",
          author_name: "SMB",
          like_count: 2,
          medium_url: "//d26wx9sgnlbtbs.cloudfront.net/p/55f684c754f345008200310f/5603d49f8c60cd008200aa27/5603e2fdb053bc1a5a000000/medium-Venus-Of-Berlin_23-09-201520150924-6746-84r8hx.jpg?1443095293",
          small_url: "//d26wx9sgnlbtbs.cloudfront.net/p/55f684c754f345008200310f/5603d49f8c60cd008200aa27/5603e2fdb053bc1a5a000000/small-Venus-Of-Berlin_23-09-201520150924-6746-84r8hx.jpg?1443095293",
          uid: "6g07ckj2631h902n",
          large_url: "//d26wx9sgnlbtbs.cloudfront.net/p/55f684c754f345008200310f/5603d49f8c60cd008200aa27/5603e2fdb053bc1a5a000000/large-Venus-Of-Berlin_23-09-201520150924-6746-84r8hx.jpg?1443095293",
          ext_share_count: {},
          status: 3,
          square_url: "//d26wx9sgnlbtbs.cloudfront.net/p/55f684c754f345008200310f/5603d49f8c60cd008200aa27/5603e2fdb053bc1a5a000000/square-Venus-Of-Berlin_23-09-201520150924-6746-84r8hx.jpg?1443095293",
          address: null,
          location: null,
          small_width: 112,
          page: null,
          f_taken_at: 1443000828,
          provider: "upload",
          large_width: 1024,
          thumbnail_url: "//d26wx9sgnlbtbs.cloudfront.net/p/55f684c754f345008200310f/5603d49f8c60cd008200aa27/5603e2fdb053bc1a5a000000/thumbnail-Venus-Of-Berlin_23-09-201520150924-6746-84r8hx.jpg?1443095293",
          source_id: "5603d49f8c60cd008200aa27",
          share_count: 0
        }
      ]

---
