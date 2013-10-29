Returns events created by the user.

Authentication is required, otherwise a 401 error code will be returned.

**HTTP Verb**: `GET`

**Path**: `/v:version/user/events`

**Example of output**:

`GET https://api.sharypic.com/v1/user/events`

```json
[{"uid":"npgn6n8xpwa43bsa","name":"Event test","description":null,"pname":null,"public":false,"hashtag":"#hashtag","picture_count":2,"visible_picture_count":2,"cover_picture_url":"http://p.twimg.com/AgyowF-CEAUbB_u.jpg:small","url":"https://www.sharypic.com/npgn428xpwa42bsa","begins_at":null,"ends_at":null,"updated_at":1366715009,"created_at":1324044134},
 {"uid":"sj31nuyr8vud66hm","name":"Concert Black Eyed Peas Paris","description":null,"pname":"bepparis","public":true,"hashtag":"#blackeyedpeas","picture_count":6,"visible_picture_count":4,"cover_picture_url":"http://yfrog.com/kfmphpuj:iphone","url":"https://www.sharypic.com/bepparis","begins_at":null,"ends_at":null,"updated_at":1366714996,"created_at":1308779220},
 {"uid":"62743jqrk9wy0zwa","name":"MIPTV Connected Creative Party","description":"","pname":"miptv2011","public":true,"hashtag":null,"picture_count":81,"visible_picture_count":59,"cover_picture_url":"http://images.instagram.com/media/2011/04/06/e3dcddc5c6b04ff8bbe283829e7f88e0_6.jpg","url":"https://www.sharypic.com/miptv2011","location":{"lat":43.5478129,"lng":7.030102899999974,"name":"Boulevard de la Croisette, 06400 Cannes, France"},"begins_at":1301875200,"ends_at":1302134400,"updated_at":1377115284,"created_at":1302273057}]
```
