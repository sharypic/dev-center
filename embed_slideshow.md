---
layout: default
title: Embed Slideshow
---

## Slideshow Widget

The **Slideshow widget** displays your pictures & videos in slideshow : it's perfect to embed your media within a side bar of your website.


**Javascript integration**
{% highlight html %}
<div id="sharypic-widget" style="height: 100%" 
     data-sharypic-mode="slideshow" 
     data-sharypic-uid="<%= :event-uid %>" 
     data-sharypic-collection="<%= :collection-pname %>" 
     data-sharypic-scoped-to="<%= :scope %>" 
     data-sharypic-social-enabled="<%= :social_enabled %>" 
     data-sharypic-autoplay="<%= :autoplay %>" >
</div>
<script src="//d1jr13qx3aszph.cloudfront.net/widget.loader-1.0.js" type="text/javacript"></script>
{% endhighlight %}

**HTML integration (iframe)**
{% highlight html %}
<iframe 
  width="100%" height="320" 
  scrolling="no" frameborder="0" 
  src="https://www.sharypic.com/events/:event-uid/widget?collection=:collection-pname&theme=:choose&autoplay=:autoplay&share=:share&scoped_to=:scope">
    <a href="https://www.sharypic.com/:event-uid/:collection-pname" title="Slideshow Widget - All photos & videos collected by Sharypic" >Slideshow Widget - All photos & videos collected by Sharypic</a>
</iframe>
{% endhighlight %}

The **slideshow widget** can be configured with the following params :

* **data-sharypic-mode** : current widget mode (gallery|slideshow)
* **data-sharypic-uid** : unique identifier of the sharypic event you want to display.
* **data-sharypic-collection** :  name of the photo collection you want to display (collections are not yet available on all events). Optional, default value is all
* **data-sharypic-scoped-to** : pictures or videos or pictures_and_videos. Constraints to include media of a specific type.
* **data-sharypic-social-enabled** : show or not share on social networks
* **data-sharypic-autoplay** : starts slideshow by default

`Minimal supported width is 320px and height is 240px.`

## Sizing your widget

Width and height of the widget must be configured within the style attribute of the main tag ex:
{% highlight html %}
<div id="sharypic-widget" style="height: 200px; width: 400px;" 
     data-sharypic-mode="slideshow" 
     data-sharypic-uid="<%= :event-uid %>" 
     data-sharypic-collection="<%= :collection-pname %>" 
     data-sharypic-scoped-to="<%= :scope %>" 
     data-sharypic-social-enabled="<%= :social_enabled %>" 
     data-sharypic-autoplay="<%= :autoplay %>" >
</div>
{% endhighlight %}


## White label

Both widget can embed with Javascript, so you can use your own CSS to customize our elements. Feel free to contact us for more information
