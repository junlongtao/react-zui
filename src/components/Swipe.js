export default (container, options) => {
	const noop = () => {};
	const offloadFn = fn => setTimeout(fn || noop, 0);

	if (!container) {
		return;
	}

	options = options || {};

	let {
		startSlide = 0,
		autoPlay = true,
		interval = 3500,
		speed = 300,
		easing = 'ease',
		dots = true,
		continuous = true,
		callback,
		swiping: swipingCb,
		transitionEnd: transitionEndCb,
		disableScroll
	} = options;

	const element = container.children[0];
	let slides, slidePos, width, length;
	let index = parseInt(startSlide, 10) || 0;

	const setup = () => {
		slides = element.children;
		length = slides.length;

		continuous = length < 2 ? false : continuous;

		if (continuous && length < 3) {
			element.appendChild(slides[0].cloneNode(true));
			element.appendChild(slides[1].cloneNode(true));
			slides = element.children;
		}

		slidePos = new Array(slides.length);

		width = container.getBoundingClientRect().width || container.offsetWidth;

		element.style.width = (slides.length * width) + 'px';

		let pos = slides.length;

		while (pos--) {
			let slide = slides[pos];

			slide.style.width = width + 'px';
			slide.setAttribute('data-index', pos);

			slide.style.left = (pos * -width) + 'px';

			slide.style.webkitTransitionTimingFunction = slide.style.transitionTimingFunction = easing;
			slide.style.transitionProperty = 'transform'

			move(pos, index > pos ? -width : (index < pos ? width : 0), 0);

			if (continuous) {
				move(circle(index-1), -width, 0);
				move(circle(index+1), width, 0);
			}

			container.style.visibility = 'visible';
		}
	};

	// create dots
	let ul = null;
	const createDots = () => {
		ul = document.createElement('ul');
		let html = '';

		for (let i = 0; i < length; i++) {
			let cls = 'dot';
			if (i == index) {
				cls += ' active'
			}
			html += `<li class="${cls}"></li>`;
		}

		ul.innerHTML = html;
		container.appendChild(ul);
	}

	const updateDots = () => {
		const dots = ul.children;
		const len = dots.length;

		for (let i = 0; i < len; i++) {
			dots[i].classList.remove('active');
		}

		// use (index % length) instead of (index) for
		// when length = 2, dots would not active
		dots[ index % len ].classList.add('active');
	}

	const prev = () => {
		if (continuous) {
			slide(index - 1);
		} else if (index) {
			slide(index - 1);
		}
	};

	const next = () => {
		if (continuous) {
			slide(index + 1);
		} else if (index < slides.length - 1) {
			slide(index + 1);
		}

	};

	const circle = index => (slides.length + (index % slides.length)) % slides.length;

	const slide = (to, slideSpeed) => {
		if (index == to) {
			return;
		}
		let direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward
		if (continuous) {
			let natural_direction = direction;
			direction = -slidePos[circle(to)] / width;

			if (direction !== natural_direction) {
				to = -direction * slides.length + to;
			}
		}

		let diff = Math.abs(index-to) - 1;

		// move all the slides between index and to in the right direction
		while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);

		to = circle(to);

		move(index, width * direction, slideSpeed || speed);
		move(to, 0, slideSpeed || speed);

		if (continuous) {
			move(circle(to - direction), -(width * direction), 0);
		}

		index = to;
		offloadFn(callback && callback(index, slides[index]));

		if (dots !== false && length > 1) {
			updateDots();
		}
	};

	const move = (index, dist, speed) => {
		translate(index, dist, speed);
		slidePos[index] = dist;
	};

	const translate = (index, dist, speed) => {
		const slide = slides[index];
		const style = slide && slide.style;

		if (!style) return;

		style.webkitTransitionDuration =
		style.transitionDuration = speed + 'ms';

		style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	};

	let tid;

	const begin = () => {
		tid = setTimeout(next, interval);
	};

	const stop = () => {
		if (tid) {
			clearTimeout(tid);
		}
	};

	let start = {};
	let delta = {};
	let isScrolling;

	const events = {
		handleEvent(event) {
			switch (event.type) {
				case 'touchstart': this.start(event); break;
				case 'touchmove': this.move(event); break;
				case 'touchend': offloadFn(this.end(event)); break;
				case 'webkitTransitionEnd':
				case 'transitionend': offloadFn(this.transitionEnd(event)); break;
				case 'resize': offloadFn(setup); break;
			}
		},
		start(event) {
			const touches = event.touches[0];

			start = {
				x: touches.pageX,
				y: touches.pageY,
				time: +new Date()
			};

			// used for testing first move event
			isScrolling = undefined;

			// reset delta and end measurements
			delta = {};

			// attach touchmove and touchend listeners
			element.addEventListener('touchmove', this, false);
			element.addEventListener('touchend', this, false);
		},
		move(event) {
			// ensure swiping with one touch and not pinching
			if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;

			if (disableScroll) event.preventDefault();

			const touches = event.touches[0];

			// measure change in x and y
			delta = {
				x: touches.pageX - start.x,
				y: touches.pageY - start.y
			};

			if ( typeof isScrolling == 'undefined') {
				isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
			}

			// if user is not trying to scroll vertically
			if (!isScrolling) {
				// prevent native scrolling
				event.preventDefault();

				// stop slideshow
				stop();

				// increase resistance if first or last slide
				if (continuous) { // we don't add resistance at the end
					translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
					translate(index, delta.x + slidePos[index], 0);
					translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);
				} else {
					delta.x =
						delta.x /
							( (!index && delta.x > 0 ||         // if first slide and sliding left
								index == slides.length - 1 &&     // or if last slide and sliding right
								delta.x < 0                       // and if sliding at all
							) ?
							( Math.abs(delta.x) / width + 1 )      // determine resistance level
							: 1 );                                 // no resistance if false

					// translate 1:1
					translate(index-1, delta.x + slidePos[index-1], 0);
					translate(index, delta.x + slidePos[index], 0);
					translate(index+1, delta.x + slidePos[index+1], 0);
				}
				swipingCb && swipingCb(-delta.x / width);

			}
		},
		end(event) {
			const slideDuration = +new Date() - start.time;

			// determine if slide attempt triggers next/prev slide
			const isValidSlide =
							Number(slideDuration) < 250 &&         // if slide duration is less than 250ms
							Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
							Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

			// determine if slide attempt is past start and end
			let isPastBounds =
						!index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
						index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

			if (continuous) {
				isPastBounds = false;
			}

			// determine direction of swipe (true:right, false:left)
			let direction = delta.x < 0;

			if (!isScrolling) {
				if (isValidSlide && !isPastBounds) {

					if (direction) {

						if (continuous) { // we need to get the next in this direction in place

							move(circle(index-1), -width, 0);
							move(circle(index+2), width, 0);

						} else {
							move(index-1, -width, 0);
						}

						move(index, slidePos[index]-width, speed);
						move(circle(index+1), slidePos[circle(index+1)]-width, speed);
						index = circle(index+1);

					} else {
						if (continuous) { // we need to get the next in this direction in place

							move(circle(index+1), width, 0);
							move(circle(index-2), -width, 0);

						} else {
							move(index+1, width, 0);
						}

						move(index, slidePos[index]+width, speed);
						move(circle(index-1), slidePos[circle(index-1)]+width, speed);
						index = circle(index-1);

					}

					if (dots !== false && length > 1) {
						updateDots();
					}

					callback && callback(index, slides[index]);

				} else {
					// invalid spipe
					if (continuous) {

						move(circle(index-1), -width, speed);
						move(index, 0, speed);
						move(circle(index+1), width, speed);

					} else {

						move(index-1, -width, speed);
						move(index, 0, speed);
						move(index+1, width, speed);
					}

				}
			}

			// kill touchmove and touchend event listeners until touchstart called again
			element.removeEventListener('touchmove', events, false);
			element.removeEventListener('touchend', events, false);

		},
		transitionEnd(event) {

			if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

				if (autoPlay) begin();

				transitionEndCb && transitionEndCb.call(event, index, slides[index]);

			}

		}

	};

	// trigger setup
	setup();

	// show dots
	if (dots && length > 1) {
		createDots();
	}

	// start auto slideshow if applicable
	if (autoPlay) begin();

	// set touchstart event on element
	element.addEventListener('touchstart', events, false);

	element.addEventListener('webkitTransitionEnd', events, false);
	element.addEventListener('transitionend', events, false);

	window.addEventListener('resize', events, false);

	return {
		setup() {
			setup();
		},
		slide(to, speed) {
			// cancel slideshow
			stop();
			slide(to, speed);
		},
		prev() {
			// cancel slideshow
			stop();
			prev();
		},
		next() {
			// cancel slideshow
			stop();
			next();
		},
		stop() {
			// cancel slideshow
			stop();
		},
		getPos() {
			// return current index position
			return index;
		},
		getNumSlides() {
			// return total number of slides
			return length;
		},
		kill() {
			// cancel slideshow
			stop();

			// reset element
			element.style.width = '';
			element.style.left = '';

			// reset slides
			var pos = slides.length;
			while(pos--) {

				var slide = slides[pos];
				slide.style.width = '';
				slide.style.left = '';

				translate(pos, 0, 0);
			}

			// remove current event listeners
			element.removeEventListener('touchstart', events, false);
			element.removeEventListener('webkitTransitionEnd', events, false);
			element.removeEventListener('transitionend', events, false);
			window.removeEventListener('resize', events, false);

		}
	};

};
