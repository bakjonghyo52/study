(() => {
	var e = {
			942: (e) => {
				const t = {
					once(e) {
						let t,
							n = !1;
						return function (...r) {
							return n || ((n = !0), (t = e(...r))), t;
						};
					},
				};
				e.exports = t;
			},
		},
		t = {};
	function n(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var s = (t[r] = { exports: {} });
		return e[r](s, s.exports, n), s.exports;
	}
	(() => {
		const e = n(942),
			t =
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat elit, ac tincidunt neque vestibulum at. Mauris a eros sit amet urna efficitur tempus.",
			r = e.once((...e) => console.log(...e)),
			o = e.once((...e) => {
				document.querySelector("#app").append(
					...e.map((e) => {
						const t = document.createElement("div");
						return (t.className = "shout"), (t.textContent = e), t;
					})
				);
			});
		r(t), r(t), r(t), r(t), o(t), o(t), o(t), o(t);
	})();
})();
c;
