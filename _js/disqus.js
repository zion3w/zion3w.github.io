disqus_config = function(){
	var disq_div = qs("#disqus_thread");
	// this.page.identifier = disqus_identifier;
	this.page.identifier = disq_div.getAttribute('data-art-id');
	// this.page.url = disqus_url;
	this.page.url = disq_div.getAttribute('data-art-link');
};

(function() {
	var dsq = document.createElement('script');
	dsq.type = 'text/javascript';
	dsq.async = true;
	dsq.src = '//khersonskie-novosti.disqus.com/embed.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

// !function(){
// 	var t=document,
// 	i=t.createElement("script");

// 	i.src="https://nikolaev-stream.disqus.com/embed.js",
// 	i.setAttribute("data-timestamp",+new Date),
// 	(t.head||t.body).appendChild(i)
// }();


// var disq_div=qs("#disqus_thread"),
// disqus_config=function(){
// 	this.page.url=disq_div.getAttribute("data-art-link"),
// 	this.page.identifier=disq_div.getAttribute("data-art-id")
// };
// !function(){
// 	var t=document,
// 	i=t.createElement("script");
// 	i.src="https://nikolaev-stream.disqus.com/embed.js",
// 	i.setAttribute("data-timestamp",+new Date),
// 	(t.head||t.body).appendChild(i)}();