---
layout: default
title: Embed
---

# Embeddable widgets

sharypic widget can be embedded on any page using either **script integration** or **iframe integration**.

We recommend script integration whenever it is possible. Iframe being mainly provided to make integration easier on public blog platforms (custom js code is not available in blog posts)

## Script integration

You need to copy/paste the following snippet of code wherever you want. If you want to embed several widgets in the same page,  only the div part must be repeated.

{% highlight html %}
<div class="sharypic_widget" data-sharypic-uid='4sacwgos3b8s8w46' style='height: 240px; width: 320px;'/>
<script language='javascript'>
  (function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="http://js.sharypic.com/widget-loader-1.0.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()
</script>
{% endhighlight %}

Following attributes are supported:
* **data-sharypic-uid**: unique identifier of the sharypic event you want to display. **Mandatory**
* **data-sharypic-collection**: name of the photo collection you want to display (collections are not yet available on all events). Optional, default value is `all`
* **data-sharypic-live-enabled**: enable or disable the real-time stream of photos (cannot be _enabled_ for all events). Optional, default value is `true`
* **data-sharypic-theme**: widget can be either `dark` or `light`. Optional, default value is `dark`
* **data-sharypic-tab-active**: show or not title tab (containing photo title etc...). Optional, default is `true`
* **data-sharypic-placeholder-img-url**: url of a placeholder image that will displayed whenever sharypic server cannot be reached or is under maintenance. Optional.
* **data-sharypic-timing**: milliseconds pause between each picture when widget is playing. Optional, default value is `4500`
* **data-sharypic-autoplay**: when true, the widget will automatically change photo (see timing parameter). Optional, default value is `true`


For information, following attributes will be supported soon:
* **data-sharypic-thumbtray-enabled**: enable or disable the thumbtray features (contained in tabs). Optional, default value is `true`
* **data-sharypic-share-enabled**: enable or disable the social sharing features (contained in tabs). Optional, default value is `true`
* **data-sharypic-fullscreen-enabled**: enable or disable full screen mode. Optional, default value is `true`



Then width and height of the widget must be configured through css.
Minimal supported width is 320px and height is 240px.

## Iframe integration

{% highlight html %}
<iframe width='480' height='320' scrolling='no' frameborder='0' src="http://sharypic.com/events/4sacwgos3b8s8w46/widget"/>
{% endhighlight %}

No further options than width and height are available through iframe integration. It will take all default values of the script parameters.

Minimal supported width is 320px and height is 240px.