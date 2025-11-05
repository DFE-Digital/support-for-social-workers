/*
  This module will cause a child in the target element to:
  - hide when the top of the target element is visible;
  - stick to the bottom of the window while the parent element is in view;
  - stick to the bottom of the target when the user scrolls past the bottom.

  Use 'data-module="contents-list-with-body"' to instantiate, and add
  `[data-sticky-element]` to the child you want to position.
*/

function ContentsListWithBody(element) {
    this.wrapper = element;
    this.disabled = true;
    this.stickyElement = this.wrapper.querySelector("[data-back-to-top-sticky]");
    this.staticElement = this.wrapper.querySelector("[data-back-to-top-static]");
    this.hasResized = true;
    this.hasScrolled = true;
    this.interval = 50;
    this.windowVerticalPosition = 1;
    this.startPosition = 0;
    this.stopPosition = 0;
    this.staticElementBottomOffset = 0;
}

ContentsListWithBody.prototype.init = function () {
    if (!this.stickyElement) return;
    if (!this.staticElement) return;
    window.onresize = this.onResize.bind(this);
    window.onscroll = this.onScroll.bind(this);
    setInterval(this.checkResize.bind(this), this.interval);
    setInterval(this.checkScroll.bind(this), this.interval);
    this.setInitialValues();
    this.checkResize();
    this.checkScroll();
    this.stickyElement.classList.add("gem-c-contents-list-with-body__sticky-element--enabled");
};

ContentsListWithBody.prototype.setInitialValues = function () {
    let staticLinkPosition =this.staticElement.offsetTop;
    let staticLinkHeight = this.staticElement.offsetHeight || parseFloat(this.staticElement.style.height.replace("px", ""));
    let elementHeight = this.wrapper.offsetHeight || parseFloat(this.wrapper.style.height.replace("px", ""));
    this.staticElementBottomOffset = elementHeight - staticLinkPosition + (2 * staticLinkHeight);
};

ContentsListWithBody.prototype.getWindowDimensions = function () {
    return {
        height: window.innerHeight,
        width: window.innerWidth,
    };
};

ContentsListWithBody.prototype.getWindowPositions = function () {
    return {
        scrollTop: window.scrollY,
    };
};

ContentsListWithBody.prototype.getDocumentHeight = function () {
    let body = document.body,
        html = document.documentElement;
    
    return Math.max(body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
};

ContentsListWithBody.prototype.onResize = function () {
    this.hasResized = true;
};

ContentsListWithBody.prototype.onScroll = function () {
    this.hasScrolled = true;
};

ContentsListWithBody.prototype.checkResize = function () {
    if (this.hasResized) {
        this.hasResized = false;
        this.hasScrolled = true;

        let windowDimensions = this.getWindowDimensions();
        let documentHeight = this.getDocumentHeight();
        let elementHeight = this.wrapper.offsetHeight || parseFloat(this.wrapper.style.height.replace("px", ""));
        this.startPosition = windowDimensions.height;
        this.stopPosition = this.wrapper.offsetTop + elementHeight - windowDimensions.height - this.staticElementBottomOffset;
        this.disabled = documentHeight < (windowDimensions.height * 4);
    }
};

ContentsListWithBody.prototype.checkScroll = function () {
    if (this.hasScrolled) {
        this.hasScrolled = false;
        this.windowVerticalPosition = this.getWindowPositions().scrollTop;
        this.updateVisibility();
    }
};

ContentsListWithBody.prototype.updateVisibility = function () {
    if (this.disabled) return this.hide();

    var isPastStart = this.startPosition < this.windowVerticalPosition;
    if (isPastStart) {
        var isPastEnd = this.stopPosition < this.windowVerticalPosition;
        if (isPastEnd) {
            this.hide();
        } else {
            this.show();
        }
    } else {
        this.hide();
}
};

ContentsListWithBody.prototype.hide = function () {
    this.stickyElement.classList.add("gem-c-contents-list-with-body__sticky-element--hidden");
    this.stickyElement.classList.remove("gem-c-contents-list-with-body__sticky-element--stuck-to-window");
};

ContentsListWithBody.prototype.show = function () {
    this.stickyElement.classList.add("gem-c-contents-list-with-body__sticky-element--stuck-to-window");
    this.stickyElement.classList.remove("gem-c-contents-list-with-body__sticky-element--hidden");
};

document.addEventListener('DOMContentLoaded', function () {
    var element = document.body.querySelector("[data-module='contents-list-with-body']");
    if (element) {
        new ContentsListWithBody(element).init();
    }
});
