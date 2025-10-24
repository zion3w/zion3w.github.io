
window.addEventListener('load', async function() {

	async function runOnceWhenVisible(selector, callback) {
		const el = document.querySelector(selector);
		if (!el) return;

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					callback(entry.target); // run your function
					obs.disconnect(); // stop observing after first trigger
				}
			});
	  }, { threshold: 0 }); // 0.1 - fire when at least 10% visible

		observer.observe(el);
	}

	async function checkUrl(urlsSelector) {

		const endpoint = 'https://get-page-resp-status.kat0d999.workers.dev';

		// Collect all unique absolute hrefs on the page
		const anchors = Array.from(document.querySelectorAll(urlsSelector));
		let urls = Array.from(new Set(anchors.map(a => a.href)));
		urls = urls.filter(u => !/https?:\/\/(www\.)?(youtube\.com|youtu\.be)/i.test(u));
		// return;

		// Chunk requests (optional if you have many links)
		const chunkSize = 100;
		const chunks = [];
		for (let i = 0; i < urls.length; i += chunkSize) {
			chunks.push(urls.slice(i, i + chunkSize));
		}

		for (const chunk of chunks) {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({ urls: chunk })
			}).catch(() => null);

			if (!res) continue;
			const data = await res.json().catch(() => ({}));
			const results = Array.isArray(data.results) ? data.results : [];

			for (const r of results) {
				const match = anchors.filter(a => a.href === r.url);
				for (const a of match) {
					a.classList.remove('on', 'off');
					a.classList.add(r.ok ? 'on' : 'off');
					// Optional: set a title with the numeric status
					// a.title = `HTTP status: ${r.status}`;
				}
			}
		}
	}

	runOnceWhenVisible('[data-check-online]', () => {
		checkUrl('[data-check-online] a[href]')
	});

});