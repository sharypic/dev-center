---
layout: default
title: Code spinnet
---

## Spinnets

### Load all media 

Example of our Since endpoint, can be used to :
* load all media of your event
* poll new media incrementally

{% highlight js %}


// Requires jQuery : https://code.jquery.com/jquery-2.1.4.js

///////////////
// CONSTANTS //
///////////////
var SHARYPIC_BASE_URL = 'https://api.sharypic.com';
// /!\ SETS your :event-uid and :collection-pname below /!\
var SHARYPIC_WS_SINCE_ENDPOINT = '/v1/user/events/:event-uid/collections/:collection-pname/media/since';

/**
  @desc    Simple function to incrementaly load new media of your event
           Can be used to load all media at once,
           or as an pagination method
  @param   media         Array[]   of objects (Media) : mandatory
  @param   lastPictureId String    last medium id     : optional
  @return  jquery Deferred                            : forbidden
 */
function loadMedia(media, lastPictureId, async) {
  var params = {
    length: 50,
    scoped_to: 'pictures',
    api_key: "YOUR_API_KEY"
  };

  // returned at first call
  // resolved at last or failure 
  // forwarded amongst call by continuous passing style
  if (async === undefined) {
    async = $.Deferred();
  }

  if (lastPictureId) {
    params.picture_id = lastPictureId; 
  }

  // note the &callback=? ; required for Cross Site requests (.jsonp)
  $.getJSON(SHARYPIC_BASE_URL + SHARYPIC_WS_SINCE_ENDPOINT + '?' + $.param(params) + '&callback=?')
    .done(function(response){
      media = media.concat(response);
      if (response.length == params.length) {
        // publish loaded batch on each call
        async.notify(response);
        // continue loading until the end
        loadMedia(media, response[response.length -1].id, async);
      } else {
        // and finalyze with all media
        async.resolve(media);
      }
    })
    .fail(function(d, textStatus, error){
      // or try to fail gracefully
      async.reject(media, d, textStatus, error);
    });
  return async;
}

//
// sample usage
//
var progressCallback = function(batch) {
  console.log("batch loaded");
  console.table(batch);
};
var successCallback = function(media) {
  var nextPictureId = media && media.length > 0 ? media[media.length - 1].id : null;

  console.log("Everything has been loaded :-)");
  console.table(media);
  console.log("Next call expect lastPictureId as: ", nextPictureId);
};
var failureCallback = function(media, d, textStatus, error) {
  var nextPictureId = media && media.length > 0 ? media[media.length - 1].id : null;

  console.log("woops, sharypic is not an happy camper... but media has been loaded up to:");
  console.table(media);
  console.log("retry with your current media and using lastPictureId as: ", nextPictureId);
};

loadMedia([]).progress(progressCallback).then(successCallback, failureCallback);

{% endhighlight %}