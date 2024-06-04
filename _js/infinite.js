/*!
Waypoints Infinite Scroll Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
http://imakewebthings.com/waypoints/
*/
!function(){"use strict";function t(n){this.options=i.extend({},t.defaults,n),this.container=this.options.element,"auto"!==this.options.container&&(this.container=this.options.container),this.$container=i(this.container),this.$more=i(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new o(this.options))}var i=window.jQuery,o=window.Waypoint;t.prototype.setupHandler=function(){this.options.handler=i.proxy(function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),i.get(i(this.options.more).attr("href"),i.proxy(function(t){var n=i(i.parseHTML(t)),e=n.find(this.options.more),s=n.find(this.options.items);s.length||(s=n.filter(this.options.items)),this.$container.append(s),this.$container.removeClass(this.options.loadingClass),e.length||(e=n.filter(this.options.more)),e.length?(this.$more.replaceWith(e),this.$more=e,this.waypoint=new o(this.options)):this.$more.remove(),this.options.onAfterPageLoad(s)},this))},this)},t.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},t.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:i.noop,onAfterPageLoad:i.noop},o.Infinite=t}();

function infiniteBlog() {
  var infinite = new Waypoint.Infinite({
    element: '.blog',
    items: '.items_container',
    offset: function() {
      return this.context.innerHeight() - $('.blog').outerHeight() + 1000;
    },
    more: '.pagination .dn .pag_next a',
    onAfterPageLoad: function() {
      bLazy.revalidate();
      /* вернуться к блогу на текущую страницу входа */
      var items_count = (_all('.items_container').length)-1,
      items_block = _all('.items_container')[items_count],
      cur_page = _all('.items_container')[items_count-1].querySelector(' .pag_active + .pag_num > a').getAttribute('href');

      items_block.setAttribute("data-page", cur_page);

      if(bowser.name.toLowerCase()!=='firefox'){
        items_block.addEventListener('click', curPage, true);
        function curPage(e){
          var target = e.target || e.srcElement;
          if(target.hasAttribute("href") || target.hasAttribute("src")){
            if(history.pushState) {
              var cur_page = this.getAttribute("data-page");
              history.pushState(null, null, cur_page);
              location.hash = "blog";
            }
          }
        }
      }
      /* вернуться к блогу на текущую страницу входа /z*/

      if(qs('html.touchevents')){
        var my_trygger = 'click';
      } else{
        my_trygger = 'hover';
      }
      $(document).ready(function() {
        $('.jtt').tooltipster({
          contentAsHTML: true,
          interactive: true,
          arrow: false,
          repositionOnScroll: true,
          maxWidth: 750,
          debug: false,
          trigger: my_trygger
        });
      });
    }
  });

}

if(qs('main>.blog')){
  infiniteBlog();
}

function infiniteAjaxCards() {
  var infinite = new Waypoint.Infinite({
    element: '.ajx_news>div',
    items: '.ajax_news_cards',
    offset: function() {
      return this.context.innerHeight() - $('.ajx_news>div').outerHeight() + 1000;
    },
    more: '.ajax_pagination.dn',
    onAfterPageLoad: function() {
      bLazy.revalidate();

      /* вернуться к блогу на текущую страницу входа */
      var items_count = (_all('.ajax_news_cards').length)-1,
      items_block = _all('.ajax_news_cards')[items_count],
      cur_page = _all('.ajax_news_cards')[items_count-1].getAttribute('data-page');

            // items_block.setAttribute("data-page", cur_page);

            if(bowser.name.toLowerCase()!=='firefox'){
              items_block.addEventListener('click', curPage, true);
              function curPage(e){
                var target = e.target || e.srcElement;

                function getItemLink(aa){
                  while (aa) {
                    if (aa.hasAttribute("href")) return aa;
                    else aa = aa.parentElement;
                  }
                }

                target = getItemLink(target);

                if(target.hasAttribute("href") || target.hasAttribute("src")){
                  if(history.pushState) {
                    var cur_page = this.getAttribute("data-page");
                    history.pushState(null, null, cur_page);
                    location.hash = "all-news";
                  }
                }
              }
            }
            /* вернуться к блогу на текущую страницу входа /z*/

            if( qs('html.touchevents') ){
              var my_trygger = 'click';
            } else{
              my_trygger = 'hover';
            }
            $(document).ready(function() {
              $('.jtt').tooltipster({
                contentAsHTML: true,
                interactive: true,
                arrow: false,
                repositionOnScroll: true,
                maxWidth: 750,
                debug: false,
                trigger: my_trygger
              });
            });
          }
        });

}
if(qs('.ajax_news_cards')){
  infiniteAjaxCards();
}