---
layout: default
title: Embed on your site
---

# Embeddable widgets

sharypic widgets can be embedded on any page using an **iframe integration**.

## Grid

The **grid widget** displays your pictures & videos in a grid. When a user clicks on a media, it opens a slideshow : it's perfect to embed media in within full page.

{% highlight html %}
<iframe 
  width="100%" height="100%" 
  scrolling="yes" frameborder="0" 
  src="https://www.sharypic.com/events/:event-uid/widget/grid?collection=:collection-pname&theme=:theme&grid_count=:grid_count&scoped_to=:scope">
    <a href="https://www.sharypic.com/:event-uid/:collection-pname" title="Grid Widget - All photos & videos collected by Sharypic">Grid Widget - All photos & videos collected by Sharypic</a>
</iframe>
{% endhighlight %}

The **grid widget** can be configured with the following params :

* **event-uid** : unique identifier of the sharypic event you want to display.
* **collection-pname** :  name of the photo collection you want to display (collections are not yet available on all events). Optional, default value is all
* **theme** : widget can be either `dark` or `light`. Optional, default value is `dark`
* **scoped_to** : pictures or videos or pictures_and_videos. Constraints to include media of a specific type.
* **grid_count** : 1,2,3,4 or auto. In case of Auto, the grid widget will automatically adapt the number of media per row following those rules :
  * **767 pixels** : 1 picture per row (tumbler like browsing)
  * **959 pixels** : 2 pictures per row
  * **1199 pixels** : 3 pictures per row
  * **>1200 pixels** : 4 pictures per row



## Slideshow

The **slideshow widget** displays your pictures & videos in slideshow : it's perfect to embed your media within a side bar of your website.

{% highlight html %}
<iframe 
  width="100%" height="320" 
  scrolling="no" frameborder="0" 
  src="https://www.sharypic.com/events/:event-uid/widget?collection=:collection-pname&theme=:choose&autoplay=:autoplay&share=:share&scoped_to=:scope">
    <a href="https://www.sharypic.com/:event-uid/:collection-pname" title="Slideshow Widget - All photos & videos collected by Sharypic" >Slideshow Widget - All photos & videos collected by Sharypic</a>
</iframe>
{% endhighlight %}

The **slideshow widget** can be configured with the following params :

* **event-uid** : unique identifier of the sharypic event you want to display.
* **collection-pname** :  name of the photo collection you want to display (collections are not yet available on all events). Optional, default value is all
* **theme** : widget can be either `dark` or `light`. Optional, default value is `dark`
* **scoped_to** : pictures or videos or pictures_and_videos. Constraints to include media of a specific type.
* **autoplay**: when true, the widget will automatically change photo (see timing parameter). Optional, default value is `true`
* **share** : when true, the widget will shows share buttons on your media. when false share buttons won't be showns.

`Minimal supported width is 320px and height is 240px.`

## Sizing your widgets

Width and height of the widget must be configured html width/height attribute of the iframe.

## White label

Both widget can embed your own CSS, Javascript and HTML. Contact us for more information