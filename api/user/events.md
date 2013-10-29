Returns events created by the user.

Authentication is required, otherwise a 401 error code will be returned.

**HTTP Verb**: `GET`

**Path**: `/v:version/user/events`

**Example of output**:

`GET http://m.sharypic.com/v1/events/personal?length=2&personal_created_before=108324324`

```json
[{"uid":"npgn6n8xpwa43bsa","name":"Event test","description":null,"pname":null,"public":false,"hashtag":"#hashtag","picture_count":2,"visible_picture_count":2,"cover_picture_url":"http://p.twimg.com/AgyowF-CEAUbB_u.jpg:small","url":"https://www.sharypic-dev.com/npgn6n8xpwa43bsa","begins_at":null,"ends_at":null,"updated_at":1366715009,"created_at":1324044134},{"uid":"sj31nuyr8vud66hm","name":"Concert Black Eyed Peas Paris","description":null,"pname":"bepparis","public":false,"hashtag":"#black eyed peas","picture_count":6,"visible_picture_count":4,"cover_picture_url":"http://yfrog.com/kfmphpuj:iphone","url":"https://www.sharypic-dev.com/bepparis","begins_at":null,"ends_at":null,"updated_at":1366714996,"created_at":1308779220},{"uid":"tjpw3gi58y4p4cme","name":"Week-end Toulouse 30 ans","description":null,"pname":null,"public":false,"hashtag":null,"picture_count":107,"visible_picture_count":107,"cover_picture_url":"http://lh5.ggpht.com/-fsxrZSvwJLA/Tf40iI8OwEI/AAAAAAAAFS0/E5aaoKWA2dE/s240/P1010529.JPG","url":"https://www.sharypic-dev.com/tjpw3gi58y4p4cme","begins_at":null,"ends_at":null,"updated_at":1366714987,"created_at":1308503752},{"uid":"62743jqrk9wy0zwa","name":"MIPTV Connected Creative Party","description":"","pname":"miptv2011","public":true,"hashtag":null,"picture_count":81,"visible_picture_count":59,"cover_picture_url":"http://images.instagram.com/media/2011/04/06/e3dcddc5c6b04ff8bbe283829e7f88e0_6.jpg","url":"https://www.sharypic-dev.com/miptv2011","location":{"lat":43.5478129,"lng":7.030102899999974,"name":"Boulevard de la Croisette, 06400 Cannes, France"},"begins_at":1301875200,"ends_at":1302134400,"updated_at":1377115284,"created_at":1302273057}]
```
