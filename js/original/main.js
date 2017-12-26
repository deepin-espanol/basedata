// @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11
jQuery(function() {
	var $sidebar = $('.sidebar'),
		$content = $('.content'),
		$mainContent = $('.main-content'),
		$window = $(window),
		offset = $content.offset().top + 60;

	var found = true;

	var $el;

	var href = $sidebar.find('a').first().attr("href");

	if (href !== undefined && href.charAt(0) === "#") {
		setActiveSidebarLink();

		$(window).on("scroll", function() {
			throttle(function(){
				setActiveSidebarLink();
				setSidebar();
			}, 100)();
		});
	}

	function setSidebar() {
		var offset = 85,
			bottom = $mainContent.offset().top + $mainContent.outerHeight() - $sidebar.outerHeight() - offset;
		if (window.scrollY > bottom) {
			$sidebar.css("position", "absolute").css("top", $mainContent.outerHeight() - $sidebar.outerHeight());
		} else if (window.scrollY > $mainContent.offset().top) {
			$sidebar.css("position", "fixed").css("top", offset);
		} else {
			$sidebar.css("position", "absolute").css("top", offset);
		}
	}

	function setActiveSidebarLink() {
		var $closest = getClosestHeader();
		$('.sidebar a').removeClass('active');
		$closest.addClass('active');
	}
});

function getClosestHeader() {
	var $links = $('.sidebar a'),
	top = window.scrollY,
	$last = $links.first(),
	$content = $(".main-content");

	if (top < 300) {
		return $last;
	}

	if (top + window.innerHeight >= $content.offset().top + $content.height()) {
		return $links.last();
	}

	for (var i = 0; i < $links.length; i++) {
		var $link = $links.eq(i),
		href = $link.attr("href");

		if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
			var $anchor = $(href);

			if ($anchor.length > 0) {
				var offset = $anchor.offset();

				if (top < offset.top - (window.innerHeight / 2)) {
					return $last;
				}

				$last = $link;
			}
		}
	}
	return $last;
}

function throttle (callback, limit) {

  var wait = false;
  return function () {
    if (!wait) {

      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
// @license-end