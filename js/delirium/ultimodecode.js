var $event = $[event],
        $special, resizeTimeout;
$special = $event[special][debouncedresize] = {
        setup: function () {
                $(this)[on](resize, $special[handler]);
        },
        teardown: function () {
                $(this)[off](resize, $special[handler]);
        },
        handler: function (_0xabcbx4, _0xabcbx5) {
                var _0xabcbx6 = this,
                        _0xabcbx7 = arguments,
                        _0xabcbx8 = function () {
                                _0xabcbx4[type] = debouncedresize;
                                $event[dispatch][apply](_0xabcbx6, _0xabcbx7);
                        };
                if (resizeTimeout) {
                        clearTimeout(resizeTimeout);
                };
                _0xabcbx5 ? _0xabcbx8() : resizeTimeout = setTimeout(_0xabcbx8, $special[threshold]);
        },
        threshold: 250
};
var BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
$[fn][imagesLoaded] = function (_0xabcbxa) {
        var _0xabcbx4 = this,
                _0xabcbxb = $[isFunction]($.Deferred) ? $.Deferred() : 0,
                _0xabcbxc = $[isFunction](_0xabcbxb[notify]),
                _0xabcbx8 = _0xabcbx4[find](img)[add](_0xabcbx4[filter](img)),
                _0xabcbx7 = [],
                _0xabcbxd = [],
                _0xabcbx6 = [];
        if ($[isPlainObject](_0xabcbxa)) {
                $[each](_0xabcbxa, function (_0xabcbxe, _0xabcbxf) {
                        if (_0xabcbxe === callback) {
                                _0xabcbxa = _0xabcbxf;
                        } else {
                                if (_0xabcbxb) {
                                        _0xabcbxb[_0xabcbxe](_0xabcbxf);
                                };
                        };
                });
        };

        function _0xabcbx10() {
                var _0xabcbxe = $(_0xabcbxd),
                        _0xabcbxf = $(_0xabcbx6);
                if (_0xabcbxb) {
                        if (_0xabcbx6[length]) {
                                _0xabcbxb[reject](_0xabcbx8, _0xabcbxe, _0xabcbxf);
                        } else {
                                _0xabcbxb[resolve](_0xabcbx8);
                        };
                };
                if ($[isFunction](_0xabcbxa)) {
                        _0xabcbxa[call](_0xabcbx4, _0xabcbx8, _0xabcbxe, _0xabcbxf);
                };
        };

        function _0xabcbx5(_0xabcbxe, _0xabcbxf) {
                if (_0xabcbxe[src] === BLANK || $[inArray](_0xabcbxe, _0xabcbx7) !== -1) {
                        return;
                };
                _0xabcbx7[push](_0xabcbxe);
                if (_0xabcbxf) {
                        _0xabcbx6[push](_0xabcbxe);
                } else {
                        _0xabcbxd[push](_0xabcbxe);
                };
                $[data](_0xabcbxe, imagesLoaded, {
                        isBroken: _0xabcbxf,
                        src: _0xabcbxe[src]
                });
                if (_0xabcbxc) {
                        _0xabcbxb[notifyWith]($(_0xabcbxe), [_0xabcbxf, _0xabcbx8, $(_0xabcbxd), $(_0xabcbx6)]);
                };
                if (_0xabcbx8[length] === _0xabcbx7[length]) {
                        setTimeout(_0xabcbx10);
                        _0xabcbx8[unbind](imagesLoaded);
                };
        };
        if (!_0xabcbx8[length]) {
                _0xabcbx10();
        } else {
                _0xabcbx8[bind](load.imagesLoaded error.imagesLoaded, function (_0xabcbxe) {
                        _0xabcbx5(_0xabcbxe[target], _0xabcbxe[type] === error);
                })[each](function (_0xabcbxe, _0xabcbx11) {
                        var _0xabcbx12 = _0xabcbx11[src];
                        var _0xabcbxf = $[data](_0xabcbx11, imagesLoaded);
                        if (_0xabcbxf && _0xabcbxf[src] === _0xabcbx12) {
                                _0xabcbx5(_0xabcbx11, _0xabcbxf[isBroken]);
                                return;
                        };
                        if (_0xabcbx11[complete] && _0xabcbx11[naturalWidth] !== undefined) {
                                _0xabcbx5(_0xabcbx11, _0xabcbx11[naturalWidth] === 0 || _0xabcbx11[naturalHeight] === 0);
                                return;
                        };
                        if (_0xabcbx11[readyState] || _0xabcbx11[complete]) {
                                _0xabcbx11[src] = BLANK;
                                _0xabcbx11[src] = _0xabcbx12;
                        };
                });
        };
        return _0xabcbxb ? _0xabcbxb[promise](_0xabcbx4) : _0xabcbx4;
};
$(function () {
        $[elastic_grid] = {
                version: 1.0
        };
        $[fn][elastic_grid] = function (_0xabcbx13) {
                _0xabcbx13 = $[extend]({}, {
                        items: null,
                        filterEffect: ,
                        hoverDirection: true,
                        hoverDelay: 0,
                        hoverInverse: false,
                        expandingHeight: 500,
                        expandingSpeed: 300,
                        callback: function () {}
                }, _0xabcbx13);
                var _0xabcbx14 = $(this);
                var _0xabcbx15 = _0xabcbx13[items][length];
                if (_0xabcbx15 == 0) {
                        return false;
                };
                _0xabcbx14[html](<div class="wagwep-container"><nav id="porfolio-nav" class="clearfix"><ul id="portfolio-filter" class="nav nav-tabs clearfix"></ul></nav></div>);
                var _0xabcbxd = ;
                var _0xabcbx16 = $(<ul id="og-grid" class="og-grid"></ul>);
                for (itemIdx = 0; itemIdx < _0xabcbx15; itemIdx++) {
                        if (_0xabcbx13[items][itemIdx] != undefined) {
                                var _0xabcbx17 = _0xabcbx13[items][itemIdx];
                                liObject = $(<li></li>);
                                tags = _0xabcbx17[tags];
                                strTag = ;
                                for (var _0xabcbx18 = tags[length] - 1; _0xabcbx18 >= 0; _0xabcbx18--) {
                                        strTag += , +tags[_0xabcbx18];
                                };
                                strTag = strTag[substring](1);
                                liObject[attr](data - tags, strTag);
                                aObject = $(<a></a>);
                                aObject[attr](href, javascript: ;;);
                                imgObject = $(<img/>);
                                imgObject[attr](src, _0xabcbx17[thumbnail][0]);
                                imgObject[attr](data - largesrc, _0xabcbx17[large][0]);
                                spanObject = $(<span></span>);
                                spanObject[html](_0xabcbx17[title]);
                                figureObject = $(<figure></figure>);
                                figureObject[append](spanObject);
                                imgObject[appendTo](aObject);
                                figureObject[appendTo](aObject);
                                aObject[appendTo](liObject);
                                liObject[appendTo](_0xabcbx16);
                        };
                };
                if (_0xabcbx13[filterEffect] == ) {
                        _0xabcbx13[filterEffect] = moveup;
                };
                _0xabcbx16[addClass](effect - +_0xabcbx13[filterEffect]);
                _0xabcbx16[appendTo](_0xabcbx14);
                if (_0xabcbx13[hoverDirection] == true) {
                        _0xabcbx16[find](li)[each](function () {
                                $(this)[hoverdir]({
                                        hoverDelay: _0xabcbx13[hoverDelay],
                                        inverse: _0xabcbx13[hoverInverse]
                                });
                        });
                };
                var _0xabcbx11 = _0xabcbx14[find](#portfolio - filter);
                var _0xabcbx19 = _0xabcbx16[find](li),
                        _0xabcbx7 = {};
                numOfTag = 0;
                _0xabcbx19[each](function (_0xabcbx1a) {
                        var _0xabcbx1b = $(this),
                                _0xabcbx1c = _0xabcbx1b[data](tags)[split](, );
                        _0xabcbx1b[attr](data - id, _0xabcbx1a);
                        _0xabcbx1b[addClass](all);
                        $[each](_0xabcbx1c, function (_0xabcbxc, _0xabcbx1d) {
                                _0xabcbx1d = $[trim](_0xabcbx1d);
                                _0xabcbx1b[addClass](_0xabcbx1d[toLowerCase]()[replace](, -));
                                if (!(_0xabcbx1d in _0xabcbx7)) {
                                        _0xabcbx7[_0xabcbx1d] = [];
                                        numOfTag++;
                                };
                                _0xabcbx7[_0xabcbx1d][push](_0xabcbx1b);
                        });
                });
                if (numOfTag > 1) {
                        _0xabcbx10(All);
                        $[each](_0xabcbx7, function (_0xabcbx1c, _0xabcbxc) {
                                _0xabcbx10(_0xabcbx1c);
                        });
                } else {
                        _0xabcbx11[remove]();
                };
                _0xabcbx11[find](a)[bind](click, function (_0xabcbx1c) {
                        _0xabcbxe[find](li.og - expanded)[find](a)[trigger](click);
                        _0xabcbxe[find](.og - close)[trigger](click);
                        $this = $(this);
                        $this[css](outline, none);
                        _0xabcbx11[find](.current)[removeClass](current);
                        $this[parent]()[addClass](current);
                        var _0xabcbx1a = $this[text]()[toLowerCase]()[replace](, -);
                        var _0xabcbxc = _0xabcbx15;
                        _0xabcbx16[find](li)[each](function (_0xabcbx1b, _0xabcbx1d) {
                                classie[remove](_0xabcbx1d, hidden);
                                classie[remove](_0xabcbx1d, animate);
                                if (!--_0xabcbxc) {
                                        setTimeout(function () {
                                                _0xabcbx1e(_0xabcbx16[find](li), _0xabcbx1a);
                                        }, 1);
                                };
                        });
                        return false;
                });

                function _0xabcbx1e(_0xabcbxc, _0xabcbx1c) {
                        _0xabcbxc[each](function (_0xabcbx1a, _0xabcbx1b) {
                                if (classie[has](_0xabcbx1b, _0xabcbx1c)) {
                                        classie[toggle](_0xabcbx1b, animate);
                                        classie[remove](_0xabcbx1b, hidden);
                                } else {
                                        classie[add](_0xabcbx1b, hidden);
                                        classie[remove](_0xabcbx1b, animate);
                                };
                        });
                };
                _0xabcbx11[find](li: first)[addClass](current);

                function _0xabcbx10(_0xabcbx1b) {
                        var _0xabcbx1a = _0xabcbx1b[toLowerCase]()[replace](, -);
                        if (_0xabcbx1b != ) {
                                var _0xabcbxc = $('<li>');
                                var _0xabcbx1c = $('<a>', {
                                        html: _0xabcbx1b,
                                        'data-filter': . + _0xabcbx1a,
                                        href: #,
                                        'class': filter
                                })[appendTo](_0xabcbxc);
                                _0xabcbxc[appendTo](_0xabcbx11);
                        };
                };
                var _0xabcbxe = _0xabcbx16,
                        _0xabcbxa = _0xabcbxe[children](li),
                        _0xabcbx1f = -1,
                        _0xabcbx20 = -1,
                        _0xabcbx21 = 0,
                        _0xabcbx22 = 10,
                        _0xabcbx23 = $(window),
                        _0xabcbx6, _0xabcbx24 = $(html, body),
                        _0xabcbx25 = {
                                WebkitTransition: webkitTransitionEnd,
                                MozTransition: transitionend,
                                OTransition: oTransitionEnd,
                                msTransition: MSTransitionEnd,
                                transition: transitionend
                        },
                        _0xabcbxb = _0xabcbx25[Modernizr[prefixed](transition)],
                        _0xabcbx26 = Modernizr[csstransitions],
                        _0xabcbx27 = {
                                minHeight: _0xabcbx13[expandingHeight],
                                speed: _0xabcbx13[expandingSpeed],
                                easing: ease
                        };

                function _0xabcbx28(_0xabcbxc) {
                        _0xabcbxa = _0xabcbxa[add](_0xabcbxc);
                        _0xabcbxc[each](function () {
                                var _0xabcbx1c = $(this);
                                _0xabcbx1c[data]({
                                        offsetTop: _0xabcbx1c[offset]()[top],
                                        height: _0xabcbx1c[height]()
                                });
                        });
                        _0xabcbxf(_0xabcbxc);
                };

                function _0xabcbx29(_0xabcbxc) {
                        _0xabcbxa[each](function () {
                                var _0xabcbx1c = $(this);
                                _0xabcbx1c[data](offsetTop, _0xabcbx1c[offset]()[top]);
                                if (_0xabcbxc) {
                                        _0xabcbx1c[data](height, _0xabcbx1c[height]());
                                };
                        });
                };

                function _0xabcbx12() {
                        _0xabcbxf(_0xabcbxa);
                        _0xabcbx23[on](debouncedresize, function () {
                                _0xabcbx21 = 0;
                                _0xabcbx20 = -1;
                                _0xabcbx29();
                                _0xabcbx8();
                                var _0xabcbxc = $[data](this, preview);
                                if (typeof _0xabcbxc != undefined) {
                                        _0xabcbx2a();
                                };
                        });
                };

                function _0xabcbxf(_0xabcbxc) {
                        _0xabcbxc[on](click, span.og - close, function () {
                                _0xabcbx2a();
                                return false;
                        })[children](a)[on](click, function (_0xabcbx1a) {
                                var _0xabcbx1c = $(this)[parent]();
                                _0xabcbx1c[removeClass](animate);
                                _0xabcbx1f === _0xabcbx1c[index]() ? _0xabcbx2a($(this)) : _0xabcbx5(_0xabcbx1c);
                                return false;
                        });
                };

                function _0xabcbx8() {
                        _0xabcbx6 = {
                                width: _0xabcbx23[width](),
                                height: _0xabcbx23[height]()
                        };
                };

                function _0xabcbx5(_0xabcbx1c) {
                        _0xabcbx2a();
                        var _0xabcbx1a = $[data](this, preview),
                                _0xabcbxc = _0xabcbx1c[data](offsetTop);
                        _0xabcbx21 = 0;
                        if (typeof _0xabcbx1a != undefined) {
                                if (_0xabcbx20 !== _0xabcbxc) {
                                        if (_0xabcbxc > _0xabcbx20) {
                                                _0xabcbx21 = _0xabcbx1a[height];
                                        };
                                        _0xabcbx2a();
                                } else {
                                        _0xabcbx1a[update](_0xabcbx1c);
                                        return false;
                                };
                        };
                        _0xabcbx20 = _0xabcbxc;
                        _0xabcbx1a = $[data](this, preview, new _0xabcbx4(_0xabcbx1c));
                        _0xabcbx1a[open]();
                };

                function _0xabcbx2a() {
                        _0xabcbxa[find](.og - pointer)[remove]();
                        _0xabcbx1f = -1;
                        var _0xabcbxc = $[data](this, preview);
                        if (typeof _0xabcbxc == undefined) {} else {
                                _0xabcbxc[close]();
                        };
                        $[removeData](this, preview);
                };

                function _0xabcbx4(_0xabcbxc) {
                        this[$item] = _0xabcbxc;
                        this[expandedIdx] = this[$item][index]();
                        this[create]();
                        this[update]();
                };
                _0xabcbx4[prototype] = {
                        create: function () {
                                this[$title] = $(<h3></h3>);
                                this[$description] = $(<p></p>);
                                this[$href] = $(<a href="#">Visit website</a>);
                                this[$detailButtonList] = $(<span class="buttons-list"></span>);
                                this[$details] = $(<div class="og-details"></div>)[append](this.$title, this.$description, this.$detailButtonList);
                                this[$loading] = $(<div class="og-loading"></div>);
                                this[$fullimage] = $(<div class="og-fullimg"></div>)[append](this.$loading);
                                this[$closePreview] = $(<span class="og-close"></span>);
                                this[$previewInner] = $(<div class="og-expander-inner"></div>)[append](this.$closePreview, this.$fullimage, this.$details);
                                this[$previewEl] = $(<div class="og-expander"></div>)[append](this.$previewInner);
                                this[$item][append]($(<div class="og-pointer"></div>));
                                this[$item][append](this[getEl]());
                                if (_0xabcbx26) {
                                        this[setTransition]();
                                };
                        },
                        update: function (_0xabcbx1a) {
                                if (_0xabcbx1a) {
                                        this[$item] = _0xabcbx1a;
                                };
                                if (_0xabcbx1f !== -1) {
                                        var _0xabcbx2b = _0xabcbxa[eq](_0xabcbx1f);
                                        _0xabcbx2b[removeClass](og - expanded);
                                        this[$item][addClass](og - expanded);
                                        this[positionPreview]();
                                };
                                _0xabcbx1f = this[$item][index]();
                                if (typeof _0xabcbx13[items][_0xabcbx1f] === undefined) {} else {
                                        eldata = _0xabcbx13[items][_0xabcbx1f];
                                        this[$title][html](eldata[title]);
                                        this[$description][html](eldata[description]);
                                        this[$detailButtonList][html]();
                                        urlList = eldata[button_list];
                                        if (urlList[length] > 0) {
                                                for (_0xabcbx18 = 0; _0xabcbx18 < urlList[length]; _0xabcbx18++) {
                                                        var _0xabcbxc = $(<a></a>);
                                                        _0xabcbxc[addClass](link - button);
                                                        if (_0xabcbx18 == 0) {
                                                                _0xabcbxc[addClass](first);
                                                        };
                                                        _0xabcbxc[attr](href, urlList[_0xabcbx18][url]);
                                                        _0xabcbxc[html](urlList[_0xabcbx18][title]);
                                                        this[$detailButtonList][append](_0xabcbxc);
                                                };
                                        };
                                        var _0xabcbx1c = this;
                                        if (typeof _0xabcbx1c[$largeImg] != undefined) {
                                                _0xabcbx1c[$largeImg][remove]();
                                        };
                                        glarge = eldata[large];
                                        gthumbs = eldata[thumbnail];
                                        if (glarge[length] == gthumbs[length] && glarge[length] > 0) {
                                                var _0xabcbx1d = $(<ul></ul>);
                                                for (_0xabcbx18 = 0; _0xabcbx18 < gthumbs[length]; _0xabcbx18++) {
                                                        var _0xabcbx2c = $(<li></li>);
                                                        var _0xabcbxc = $(<a href="javascript:;;"></a>);
                                                        var _0xabcbx1b = $(<img/>);
                                                        _0xabcbx1b[addClass](related_photo);
                                                        if (_0xabcbx18 == 0) {
                                                                _0xabcbx1b[addClass](selected);
                                                        };
                                                        _0xabcbx1b[attr](src, gthumbs[_0xabcbx18]);
                                                        _0xabcbx1b[attr](data - large, glarge[_0xabcbx18]);
                                                        _0xabcbxc[append](_0xabcbx1b);
                                                        _0xabcbx2c[append](_0xabcbxc);
                                                        _0xabcbx1d[append](_0xabcbx2c);
                                                };
                                                _0xabcbx1d[addClass](elastislide - list);
                                                _0xabcbx1d[elastislide]();
                                                var _0xabcbx2d = $(<div class="elastislide-wrapper elastislide-horizontal"></div>);
                                                _0xabcbx2d[append](_0xabcbx1d)[find](.related_photo)[bind](click, function () {
                                                        _0xabcbx2d[find](.selected)[removeClass](selected);
                                                        $(this)[addClass](selected);
                                                        $largePhoto = $(this)[data](large);
                                                        $(<img/>)[load](function () {
                                                                _0xabcbx1c[$fullimage][find](img)[fadeOut](500, function () {
                                                                        $(this)[fadeIn](500)[attr](src, $largePhoto);
                                                                });
                                                        })[attr](src, $largePhoto);
                                                });
                                                _0xabcbx1c[$details][append](<div class="infosep"></div>);
                                                _0xabcbx1c[$details][append](_0xabcbx2d);
                                        } else {
                                                _0xabcbx1c[$details][find](.infosep, .og - grid - small)[remove]();
                                        };
                                        if (_0xabcbx1c[$fullimage][is](: visible)) {
                                                this[$loading][show]();
                                                $(<img/>)[load](function () {
                                                        var _0xabcbx2e = $(this);
                                                        if (_0xabcbx2e[attr](src) === _0xabcbx1c[$item][children](a)[find](img)[data](largesrc)) {
                                                                _0xabcbx1c[$loading][hide]();
                                                                _0xabcbx1c[$fullimage][find](img)[remove]();
                                                                _0xabcbx1c[$largeImg] = _0xabcbx2e[fadeIn](350);
                                                                _0xabcbx1c[$fullimage][append](_0xabcbx1c.$largeImg);
                                                        };
                                                })[attr](src, eldata[large][0]);
                                        };
                                };
                        },
                        open: function () {
                                setTimeout($[proxy](function () {
                                        this[setHeights]();
                                        this[positionPreview]();
                                }, this), 25);
                        },
                        close: function () {
                                var _0xabcbxc = this,
                                        _0xabcbx1c = function () {
                                                if (_0xabcbx26) {
                                                        $(this)[off](_0xabcbxb);
                                                };
                                                _0xabcbxc[$item][removeClass](og - expanded);
                                                _0xabcbxc[$previewEl][remove]();
                                        };
                                setTimeout($[proxy](function () {
                                        if (typeof this[$largeImg] !== undefined) {
                                                this[$largeImg][fadeOut](fast);
                                        };
                                        this[$previewEl][css](height, 0);
                                        var _0xabcbx1a = _0xabcbxa[eq](this[expandedIdx]);
                                        _0xabcbx1a[css](height, _0xabcbx1a[data](height))[on](_0xabcbxb, _0xabcbx1c);
                                        if (!_0xabcbx26) {
                                                _0xabcbx1c[call]();
                                        };
                                }, this), 25);
                                return false;
                        },
                        calcHeight: function () {
                                var _0xabcbx1c = _0xabcbx6[height] - this[$item][data](height) - _0xabcbx22,
                                        _0xabcbxc = _0xabcbx6[height];
                                if (_0xabcbx1c < _0xabcbx27[minHeight]) {
                                        _0xabcbx1c = _0xabcbx27[minHeight];
                                        _0xabcbxc = _0xabcbx27[minHeight] + this[$item][data](height) + _0xabcbx22;
                                };
                                this[height] = _0xabcbx1c;
                                this[itemHeight] = _0xabcbxc;
                        },
                        setHeights: function () {
                                var _0xabcbxc = this,
                                        _0xabcbx1c = function () {
                                                if (_0xabcbx26) {
                                                        _0xabcbxc[$item][off](_0xabcbxb);
                                                };
                                                _0xabcbxc[$item][addClass](og - expanded);
                                        };
                                this[calcHeight]();
                                this[$previewEl][css](height, this[height]);
                                this[$item][css](height, this[itemHeight])[on](_0xabcbxb, _0xabcbx1c);
                                if (!_0xabcbx26) {
                                        _0xabcbx1c[call]();
                                };
                        },
                        positionPreview: function () {
                                var _0xabcbx1c = this[$item][data](offsetTop),
                                        _0xabcbxc = this[$previewEl][offset]()[top] - _0xabcbx21,
                                        _0xabcbx1a = this[height] + this[$item][data](height) + _0xabcbx22 <= _0xabcbx6[height] ? _0xabcbx1c : this[height] < _0xabcbx6[height] ? _0xabcbxc - (_0xabcbx6[height] - this[height]) : _0xabcbxc;
                                _0xabcbx24[animate]({
                                        scrollTop: _0xabcbx1a
                                }, _0xabcbx27[speed]);
                        },
                        setTransition: function () {
                                this[$previewEl][css](transition, height + _0xabcbx27[speed] + ms + _0xabcbx27[easing]);
                                this[$item][css](transition, height + _0xabcbx27[speed] + ms + _0xabcbx27[easing]);
                        },
                        getEl: function () {
                                return this[$previewEl];
                        }
                };
                _0xabcbxe[imagesLoaded](function () {
                        _0xabcbx29(true);
                        _0xabcbx8();
                        _0xabcbx12();
                });
        };
});
//***************************************************************************************************************************************************************************************
(function (_0xabcbx7, _0xabcbx8, _0xabcbx6) {
        _0xabcbx7[HoverDir] = function (_0xabcbx4, _0xabcbx10) {
                this[$el] = _0xabcbx7(_0xabcbx10);
                this._init(_0xabcbx4);
        };
        _0xabcbx7[HoverDir][defaults] = {
                speed: 300,
                easing: ease,
                hoverDelay: 0,
                inverse: false
        };
        _0xabcbx7[HoverDir][prototype] = {
                _init: function (_0xabcbx4) {
                        this[options] = _0xabcbx7[extend](true, {}, _0xabcbx7[HoverDir][defaults], _0xabcbx4);
                        this[transitionProp] = all + this[options][speed] + ms + this[options][easing];
                        this[support] = Modernizr[csstransitions];
                        this._loadEvents();
                },
                _loadEvents: function () {
                        var _0xabcbx4 = this;
                        this[$el][on](mouseenter.hoverdir, mouseleave.hoverdir, function (_0xabcbxc) {
                                var _0xabcbxd = _0xabcbx7(this),
                                        _0xabcbx10 = _0xabcbxd[find](figure),
                                        _0xabcbxb = _0xabcbx4._getDir(_0xabcbxd, {
                                                x: _0xabcbxc[pageX],
                                                y: _0xabcbxc[pageY]
                                        }),
                                        _0xabcbxa = _0xabcbx4._getStyle(_0xabcbxb);
                                if (_0xabcbxc[type] === mouseenter) {
                                        _0xabcbx10[hide]()[css](_0xabcbxa[from]);
                                        clearTimeout(_0xabcbx4[tmhover]);
                                        _0xabcbx4[tmhover] = setTimeout(function () {
                                                _0xabcbx10[show](0, function () {
                                                        var _0xabcbxe = _0xabcbx7(this);
                                                        if (_0xabcbx4[support]) {
                                                                _0xabcbxe[css](transition, _0xabcbx4[transitionProp]);
                                                        };
                                                        _0xabcbx4._applyAnimation(_0xabcbxe, _0xabcbxa[to], _0xabcbx4[options][speed]);
                                                });
                                        }, _0xabcbx4[options][hoverDelay]);
                                } else {
                                        if (_0xabcbx4[support]) {
                                                _0xabcbx10[css](transition, _0xabcbx4[transitionProp]);
                                        };
                                        clearTimeout(_0xabcbx4[tmhover]);
                                        _0xabcbx4._applyAnimation(_0xabcbx10, _0xabcbxa[from], _0xabcbx4[options][speed]);
                                };
                        });
                },
                _getDir: function (_0xabcbxd, _0xabcbxe) {
                        var _0xabcbx10 = _0xabcbxd[width](),
                                _0xabcbxc = _0xabcbxd[height](),
                                _0xabcbx4 = (_0xabcbxe[x] - _0xabcbxd[offset]()[left] - (_0xabcbx10 / 2)) * (_0xabcbx10 > _0xabcbxc ? (_0xabcbxc / _0xabcbx10) : 1),
                                _0xabcbxf = (_0xabcbxe[y] - _0xabcbxd[offset]()[top] - (_0xabcbxc / 2)) * (_0xabcbxc > _0xabcbx10 ? (_0xabcbx10 / _0xabcbxc) : 1),
                                _0xabcbxb = Math[round]((((Math[atan2](_0xabcbxf, _0xabcbx4) * (180 / Math[PI])) + 180) / 90) + 3) % 4;
                        return _0xabcbxb;
                },
                _getStyle: function (_0xabcbxe) {
                        var _0xabcbxd, _0xabcbxf, _0xabcbxc = {
                                        left: 0 px,
                                        top: -100 %
                                },
                                _0xabcbx4 = {
                                        left: 0 px,
                                        top: 100 %
                                },
                                _0xabcbxa = {
                                        left: -100 % ,
                                        top: 0 px
                                },
                                _0xabcbx10 = {
                                        left: 100 % ,
                                        top: 0 px
                                },
                                _0xabcbx11 = {
                                        top: 0 px
                                },
                                _0xabcbxb = {
                                        left: 0 px
                                };
                        switch (_0xabcbxe) {
                        case 0:
                                _0xabcbxd = !this[options][inverse] ? _0xabcbxc : _0xabcbx4;
                                _0xabcbxf = _0xabcbx11;
                                break;;
                        case 1:
                                _0xabcbxd = !this[options][inverse] ? _0xabcbx10 : _0xabcbxa;
                                _0xabcbxf = _0xabcbxb;
                                break;;
                        case 2:
                                _0xabcbxd = !this[options][inverse] ? _0xabcbx4 : _0xabcbxc;
                                _0xabcbxf = _0xabcbx11;
                                break;;
                        case 3:
                                _0xabcbxd = !this[options][inverse] ? _0xabcbxa : _0xabcbx10;
                                _0xabcbxf = _0xabcbxb;
                                break;;
                        };
                        return {
                                from: _0xabcbxd,
                                to: _0xabcbxf
                        };
                },
                _applyAnimation: function (_0xabcbx10, _0xabcbx4, _0xabcbxd) {
                        _0xabcbx7[fn][applyStyle] = this[support] ? _0xabcbx7[fn][css] : _0xabcbx7[fn][animate];
                        _0xabcbx10[stop]()[applyStyle](_0xabcbx4, _0xabcbx7[extend](true, [], {
                                duration: _0xabcbxd + ms
                        }));
                }
        };
        var _0xabcbx5 = function (_0xabcbx4) {
                if (_0xabcbx8[console]) {
                        _0xabcbx8[console][error](_0xabcbx4);
                };
        };
        _0xabcbx7[fn][hoverdir] = function (_0xabcbxd) {
                var _0xabcbx4 = _0xabcbx7[data](this, hoverdir);
                if (typeof _0xabcbxd === string) {
                        var _0xabcbx10 = Array[prototype][slice][call](arguments, 1);
                        this[each](function () {
                                if (!_0xabcbx4) {
                                        _0xabcbx5(cannot call methods on hoverdir prior to initialization; attempted to call method '+_0xabcbxd+');
                                        return;
                                };
                                if (!_0xabcbx7[isFunction](_0xabcbx4[_0xabcbxd]) || _0xabcbxd[charAt](0) === _) {
                                        _0xabcbx5(no such method '+_0xabcbxd+'
                                                for hoverdir instance);
                                        return;
                                };
                                _0xabcbx4[_0xabcbxd][apply](_0xabcbx4, _0xabcbx10);
                        });
                } else {
                        this[each](function () {
                                if (_0xabcbx4) {
                                        _0xabcbx4._init();
                                } else {
                                        _0xabcbx4 = _0xabcbx7[data](this, hoverdir, new _0xabcbx7.HoverDir(_0xabcbxd, this));
                                };
                        });
                };
                return _0xabcbx4;
        };
})(jQuery, window);//-----------------------------------------------------------------------------------------------------------------------------------------------
(function (_0xabcbxd, _0xabcbxa, _0xabcbx4) {
        var _0xabcbx5 = _0xabcbxd[event],
                _0xabcbx8, _0xabcbxb;
        _0xabcbx8 = _0xabcbx5[special][debouncedresize] = {
                setup: function () {
                        _0xabcbxd(this)[on](resize, _0xabcbx8[handler]);
                },
                teardown: function () {
                        _0xabcbxd(this)[off](resize, _0xabcbx8[handler]);
                },
                handler: function (_0xabcbx16, _0xabcbxe) {
                        var _0xabcbx12 = this,
                                _0xabcbx11 = arguments,
                                _0xabcbxf = function () {
                                        _0xabcbx16[type] = debouncedresize;
                                        _0xabcbx5[dispatch][apply](_0xabcbx12, _0xabcbx11);
                                };
                        if (_0xabcbxb) {
                                clearTimeout(_0xabcbxb);
                        };
                        _0xabcbxe ? _0xabcbxf() : _0xabcbxb = setTimeout(_0xabcbxf, _0xabcbx8[threshold]);
                },
                threshold: 150
        };
        var _0xabcbx7 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        _0xabcbxd[fn][imagesLoaded] = function (_0xabcbx29) {
                var _0xabcbx16 = this,
                        _0xabcbx20 = _0xabcbxd[isFunction](_0xabcbxd.Deferred) ? _0xabcbxd.Deferred() : 0,
                        _0xabcbx26 = _0xabcbxd[isFunction](_0xabcbx20[notify]),
                        _0xabcbxf = _0xabcbx16[find](img)[add](_0xabcbx16[filter](img)),
                        _0xabcbx11 = [],
                        _0xabcbx22 = [],
                        _0xabcbx12 = [];
                if (_0xabcbxd[isPlainObject](_0xabcbx29)) {
                        _0xabcbxd[each](_0xabcbx29, function (_0xabcbx14, _0xabcbx28) {
                                if (_0xabcbx14 === callback) {
                                        _0xabcbx29 = _0xabcbx28;
                                } else {
                                        if (_0xabcbx20) {
                                                _0xabcbx20[_0xabcbx14](_0xabcbx28);
                                        };
                                };
                        });
                };

                function _0xabcbx1e() {
                        var _0xabcbx14 = _0xabcbxd(_0xabcbx22),
                                _0xabcbx28 = _0xabcbxd(_0xabcbx12);
                        if (_0xabcbx20) {
                                if (_0xabcbx12[length]) {
                                        _0xabcbx20[reject](_0xabcbxf, _0xabcbx14, _0xabcbx28);
                                } else {
                                        _0xabcbx20[resolve](_0xabcbxf);
                                };
                        };
                        if (_0xabcbxd[isFunction](_0xabcbx29)) {
                                _0xabcbx29[call](_0xabcbx16, _0xabcbxf, _0xabcbx14, _0xabcbx28);
                        };
                };

                function _0xabcbxe(_0xabcbx14, _0xabcbx28) {
                        if (_0xabcbx14[src] === _0xabcbx7 || _0xabcbxd[inArray](_0xabcbx14, _0xabcbx11) !== -1) {
                                return;
                        };
                        _0xabcbx11[push](_0xabcbx14);
                        if (_0xabcbx28) {
                                _0xabcbx12[push](_0xabcbx14);
                        } else {
                                _0xabcbx22[push](_0xabcbx14);
                        };
                        _0xabcbxd[data](_0xabcbx14, imagesLoaded, {
                                isBroken: _0xabcbx28,
                                src: _0xabcbx14[src]
                        });
                        if (_0xabcbx26) {
                                _0xabcbx20[notifyWith](_0xabcbxd(_0xabcbx14), [_0xabcbx28, _0xabcbxf, _0xabcbxd(_0xabcbx22), _0xabcbxd(_0xabcbx12)]);
                        };
                        if (_0xabcbxf[length] === _0xabcbx11[length]) {
                                setTimeout(_0xabcbx1e);
                                _0xabcbxf[unbind](.imagesLoaded);
                        };
                };
                if (!_0xabcbxf[length]) {
                        _0xabcbx1e();
                } else {
                        _0xabcbxf[bind](load.imagesLoaded error.imagesLoaded, function (_0xabcbx14) {
                                _0xabcbxe(_0xabcbx14[target], _0xabcbx14[type] === error);
                        })[each](function (_0xabcbx14, _0xabcbx23) {
                                var _0xabcbx19 = _0xabcbx23[src];
                                var _0xabcbx28 = _0xabcbxd[data](_0xabcbx23, imagesLoaded);
                                if (_0xabcbx28 && _0xabcbx28[src] === _0xabcbx19) {
                                        _0xabcbxe(_0xabcbx23, _0xabcbx28[isBroken]);
                                        return;
                                };
                                if (_0xabcbx23[complete] && _0xabcbx23[naturalWidth] !== _0xabcbx4) {
                                        _0xabcbxe(_0xabcbx23, _0xabcbx23[naturalWidth] === 0 || _0xabcbx23[naturalHeight] === 0);
                                        return;
                                };
                                if (_0xabcbx23[readyState] || _0xabcbx23[complete]) {
                                        _0xabcbx23[src] = _0xabcbx7;
                                        _0xabcbx23[src] = _0xabcbx19;
                                };
                        });
                };
                return _0xabcbx20 ? _0xabcbx20[promise](_0xabcbx16) : _0xabcbx16;
        };
        var _0xabcbx6 = _0xabcbxd(_0xabcbxa),
                _0xabcbx10 = _0xabcbxa[Modernizr];
        _0xabcbxd[Elastislide] = function (_0xabcbxe, _0xabcbxf) {
                this[$el] = _0xabcbxd(_0xabcbxf);
                this._init(_0xabcbxe);
        };
        _0xabcbxd[Elastislide][defaults] = {
                orientation: horizontal,
                speed: 500,
                easing: ease - in -out,
                minItems: 3,
                start: 0,
                onClick: function (_0xabcbx11, _0xabcbxe, _0xabcbxf) {
                        return false;
                },
                onReady: function () {
                        return false;
                },
                onBeforeSlide: function () {
                        return false;
                },
                onAfterSlide: function () {
                        return false;
                }
        };
        _0xabcbxd[Elastislide][prototype] = {
                _init: function (_0xabcbxf) {
                        this[options] = _0xabcbxd[extend](true, {}, _0xabcbxd[Elastislide][defaults], _0xabcbxf);
                        var _0xabcbxe = this,
                                _0xabcbx11 = {
                                        WebkitTransition: webkitTransitionEnd,
                                        MozTransition: transitionend,
                                        OTransition: oTransitionEnd,
                                        msTransition: MSTransitionEnd,
                                        transition: transitionend
                                };
                        this[transEndEventName] = _0xabcbx11[_0xabcbx10[prefixed](transition)];
                        this[support] = _0xabcbx10[csstransitions] && _0xabcbx10[csstransforms];
                        this[current] = this[options][start];
                        this[isSliding] = false;
                        this[$items] = this[$el][children](li);
                        this[itemsCount] = this[$items][length];
                        if (this[itemsCount] === 0) {
                                return false;
                        };
                        this._validate();
                        this[$items][detach]();
                        this[$el][empty]();
                        this[$el][append](this.$items);
                        this[$el][wrap](<div class="elastislide-wrapper elastislide-loading elastislide-+this[options][orientation]+"></div>);
                        this[hasTransition] = false;
                        this[hasTransitionTimeout] = setTimeout(function () {
                                _0xabcbxe._addTransition();
                        }, 100);
                        this[$el][imagesLoaded](function () {
                                _0xabcbxe[$el][show]();
                                _0xabcbxe._layout();
                                _0xabcbxe._configure();
                                if (_0xabcbxe[hasTransition]) {
                                        _0xabcbxe._removeTransition();
                                        _0xabcbxe._slideToItem(_0xabcbxe[current]);
                                        _0xabcbxe[$el][on](_0xabcbxe[transEndEventName], function () {
                                                _0xabcbxe[$el][off](_0xabcbxe[transEndEventName]);
                                                _0xabcbxe._setWrapperSize();
                                                _0xabcbxe._addTransition();
                                                _0xabcbxe._initEvents();
                                        });
                                } else {
                                        clearTimeout(_0xabcbxe[hasTransitionTimeout]);
                                        _0xabcbxe._setWrapperSize();
                                        _0xabcbxe._initEvents();
                                        _0xabcbxe._slideToItem(_0xabcbxe[current]);
                                        setTimeout(function () {
                                                _0xabcbxe._addTransition();
                                        }, 25);
                                };
                                _0xabcbxe[options][onReady]();
                        });
                },
                _validate: function () {
                        if (this[options][speed] < 0) {
                                this[options][speed] = 500;
                        };
                        if (this[options][minItems] < 1 || this[options][minItems] > this[itemsCount]) {
                                this[options][minItems] = 1;
                        };
                        if (this[options][start] < 0 || this[options][start] > this[itemsCount] - 1) {
                                this[options][start] = 0;
                        };
                        if (this[options][orientation] != horizontal && this[options][orientation] != vertical) {
                                this[options][orientation] = horizontal;
                        };
                },
                _layout: function () {
                        this[$el][wrap](<div class="elastislide-carousel"></div>);
                        this[$carousel] = this[$el][parent]();
                        this[$wrapper] = this[$carousel][parent]()[removeClass](elastislide - loading);
                        var _0xabcbxe = this[$items][find](img: first);
                        this[imgSize] = {
                                width: _0xabcbxe[outerWidth](true),
                                height: _0xabcbxe[outerHeight](true)
                        };
                        this._setItemsSize();
                        this[options][orientation] === horizontal ? this[$el][css](max - height, this[imgSize][height]) : this[$el][css](height, this[options][minItems] * this[imgSize][height]);
                        this._addControls();
                },
                _addTransition: function () {
                        if (this[support]) {
                                this[$el][css](transition, all + this[options][speed] + ms + this[options][easing]);
                        };
                        this[hasTransition] = true;
                },
                _removeTransition: function () {
                        if (this[support]) {
                                this[$el][css](transition, all 0 s);
                        };
                        this[hasTransition] = false;
                },
                _addControls: function () {
                        var _0xabcbxe = this;
                        this[$navigation] = _0xabcbxd(<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>)[appendTo](this.$wrapper);
                        this[$navPrev] = this[$navigation][find](span.elastislide - prev)[on](mousedown.elastislide, function (_0xabcbxf) {
                                _0xabcbxe._slide(prev);
                                return false;
                        });
                        this[$navNext] = this[$navigation][find](span.elastislide - next)[on](mousedown.elastislide, function (_0xabcbxf) {
                                _0xabcbxe._slide(next);
                                return false;
                        });
                },
                _setItemsSize: function () {
                        var _0xabcbxe = this[options][orientation] === horizontal ? (Math[floor](this[$carousel][width]() / this[options][minItems]) * 100) / this[$carousel][width]() : 100;
                        this[$items][css]({
                                width: _0xabcbxe + % ,
                                'max-width': this[imgSize][width],
                                'max-height': this[imgSize][height]
                        });
                        if (this[options][orientation] === vertical) {
                                this[$wrapper][css](max - width, this[imgSize][width] + parseInt(this[$wrapper][css](padding - left)) + parseInt(this[$wrapper][css](padding - right)));
                        };
                },
                _setWrapperSize: function () {
                        if (this[options][orientation] === vertical) {
                                this[$wrapper][css]({
                                        height: this[options][minItems] * this[imgSize][height] + parseInt(this[$wrapper][css](padding - top)) + parseInt(this[$wrapper][css](padding - bottom))
                                });
                        };
                },
                _configure: function () {
                        this[fitCount] = this[options][orientation] === horizontal ? this[$carousel][width]() < this[options][minItems] * this[imgSize][width] ? this[options][minItems] : Math[floor](this[$carousel][width]() / this[imgSize][width]) : this[$carousel][height]() < this[options][minItems] * this[imgSize][height] ? this[options][minItems] : Math[floor](this[$carousel][height]() / this[imgSize][height]);
                },
                _initEvents: function () {
                        var _0xabcbxe = this;
                        _0xabcbx6[on](debouncedresize.elastislide, function () {
                                _0xabcbxe._setItemsSize();
                                _0xabcbxe._configure();
                                _0xabcbxe._slideToItem(_0xabcbxe[current]);
                        });
                        this[$el][on](this[transEndEventName], function () {
                                _0xabcbxe._onEndTransition();
                        });
                        if (this[options][orientation] === horizontal) {
                                this[$el][on]({
                                        swipeleft: function () {
                                                _0xabcbxe._slide(next);
                                        },
                                        swiperight: function () {
                                                _0xabcbxe._slide(prev);
                                        }
                                });
                        } else {
                                this[$el][on]({
                                        swipeup: function () {
                                                _0xabcbxe._slide(next);
                                        },
                                        swipedown: function () {
                                                _0xabcbxe._slide(prev);
                                        }
                                });
                        };
                        this[$el][on](click.elastislide, li, function (_0xabcbx11) {
                                var _0xabcbxf = _0xabcbxd(this);
                                _0xabcbxe[options][onClick](_0xabcbxf, _0xabcbxf[index](), _0xabcbx11);
                        });
                },
                _destroy: function (_0xabcbxe) {
                        this[$el][off](this[transEndEventName])[off](swipeleft swiperight swipeup swipedown.elastislide);
                        _0xabcbx6[off](.elastislide);
                        this[$el][css]({
                                'max-height': none,
                                transition: none
                        })[unwrap](this.$carousel)[unwrap](this.$wrapper);
                        this[$items][css]({
                                width: auto,
                                'max-width': none,
                                'max-height': none
                        });
                        this[$navigation][remove]();
                        this[$wrapper][remove]();
                        if (_0xabcbxe) {
                                _0xabcbxe[call]();
                        };
                },
                _toggleControls: function (_0xabcbxe, _0xabcbxf) {
                        if (_0xabcbxf) {
                                (_0xabcbxe === next) ? this[$navNext][show](): this[$navPrev][show]();
                        } else {
                                (_0xabcbxe === next) ? this[$navNext][hide](): this[$navPrev][hide]();
                        };
                },
                _slide: function (_0xabcbxf, _0xabcbx12) {
                        if (this[isSliding]) {
                                return false;
                        };
                        this[options][onBeforeSlide]();
                        this[isSliding] = true;
                        var _0xabcbx20 = this,
                                _0xabcbxe = this[translation] || 0,
                                _0xabcbx22 = this[options][orientation] === horizontal ? this[$items][outerWidth](true) : this[$items][outerHeight](true),
                                _0xabcbx16 = this[itemsCount] * _0xabcbx22,
                                _0xabcbx11 = this[options][orientation] === horizontal ? this[$carousel][width]() : this[$carousel][height]();
                        if (_0xabcbx12 === _0xabcbx4) {
                                var _0xabcbx1e = this[fitCount] * _0xabcbx22;
                                if (_0xabcbx1e < 0) {
                                        return false;
                                };
                                if (_0xabcbxf === next && _0xabcbx16 - (Math[abs](_0xabcbxe) + _0xabcbx1e) < _0xabcbx11) {
                                        _0xabcbx1e = _0xabcbx16 - (Math[abs](_0xabcbxe) + _0xabcbx11);
                                        this._toggleControls(next, false);
                                        this._toggleControls(prev, true);
                                } else {
                                        if (_0xabcbxf === prev && Math[abs](_0xabcbxe) - _0xabcbx1e < 0) {
                                                _0xabcbx1e = Math[abs](_0xabcbxe);
                                                this._toggleControls(next, true);
                                                this._toggleControls(prev, false);
                                        } else {
                                                var _0xabcbx26 = _0xabcbxf === next ? Math[abs](_0xabcbxe) + Math[abs](_0xabcbx1e) : Math[abs](_0xabcbxe) - Math[abs](_0xabcbx1e);
                                                _0xabcbx26 > 0 ? this._toggleControls(prev, true) : this._toggleControls(prev, false);
                                                _0xabcbx26 < _0xabcbx16 - _0xabcbx11 ? this._toggleControls(next, true) : this._toggleControls(next, false);
                                        };
                                };
                                _0xabcbx12 = _0xabcbxf === next ? _0xabcbxe - _0xabcbx1e : _0xabcbxe + _0xabcbx1e;
                        } else {
                                var _0xabcbx1e = Math[abs](_0xabcbx12);
                                if (Math[max](_0xabcbx16, _0xabcbx11) - _0xabcbx1e < _0xabcbx11) {
                                        _0xabcbx12 = -(Math[max](_0xabcbx16, _0xabcbx11) - _0xabcbx11);
                                };
                                _0xabcbx1e > 0 ? this._toggleControls(prev, true) : this._toggleControls(prev, false);
                                Math[max](_0xabcbx16, _0xabcbx11) - _0xabcbx11 > _0xabcbx1e ? this._toggleControls(next, true) : this._toggleControls(next, false);
                        };
                        this[translation] = _0xabcbx12;
                        if (_0xabcbxe === _0xabcbx12) {
                                this._onEndTransition();
                                return false;
                        };
                        if (this[support]) {
                                this[options][orientation] === horizontal ? this[$el][css](transform, translateX(+_0xabcbx12 + px)) : this[$el][css](transform, translateY(+_0xabcbx12 + px));
                        } else {
                                _0xabcbxd[fn][applyStyle] = this[hasTransition] ? _0xabcbxd[fn][animate] : _0xabcbxd[fn][css];
                                var _0xabcbx29 = this[options][orientation] === horizontal ? {
                                        left: _0xabcbx12
                                } : {
                                        top: _0xabcbx12
                                };
                                this[$el][stop]()[applyStyle](_0xabcbx29, _0xabcbxd[extend](true, [], {
                                        duration: this[options][speed],
                                        complete: function () {
                                                _0xabcbx20._onEndTransition();
                                        }
                                }));
                        };
                        if (!this[hasTransition]) {
                                this._onEndTransition();
                        };
                },
                _onEndTransition: function () {
                        this[isSliding] = false;
                        this[options][onAfterSlide]();
                },
                _slideTo: function (_0xabcbx16) {
                        var _0xabcbx16 = _0xabcbx16 || this[current],
                                _0xabcbx12 = Math[abs](this[translation]) || 0,
                                _0xabcbx11 = this[options][orientation] === horizontal ? this[$items][outerWidth](true) : this[$items][outerHeight](true),
                                _0xabcbxf = _0xabcbx12 + this[$carousel][width](),
                                _0xabcbxe = Math[abs](_0xabcbx16 * _0xabcbx11);
                        if (_0xabcbxe + _0xabcbx11 > _0xabcbxf || _0xabcbxe < _0xabcbx12) {
                                this._slideToItem(_0xabcbx16);
                        };
                },
                _slideToItem: function (_0xabcbxf) {
                        var _0xabcbxe = this[options][orientation] === horizontal ? _0xabcbxf * this[$items][outerWidth](true) : _0xabcbxf * this[$items][outerHeight](true);
                        this._slide(, -_0xabcbxe);
                },
                add: function (_0xabcbx12) {
                        var _0xabcbxe = this,
                                _0xabcbx11 = this[current],
                                _0xabcbxf = this[$items][eq](this[current]);
                        this[$items] = this[$el][children](li);
                        this[itemsCount] = this[$items][length];
                        this[current] = _0xabcbxf[index]();
                        this._setItemsSize();
                        this._configure();
                        this._removeTransition();
                        _0xabcbx11 < this[current] ? this._slideToItem(this[current]) : this._slide(next, this[translation]);
                        setTimeout(function () {
                                _0xabcbxe._addTransition();
                        }, 25);
                        if (_0xabcbx12) {
                                _0xabcbx12[call]();
                        };
                },
                setCurrent: function (_0xabcbxe, _0xabcbxf) {
                        this[current] = _0xabcbxe;
                        this._slideTo();
                        if (_0xabcbxf) {
                                _0xabcbxf[call]();
                        };
                },
                next: function () {
                        self._slide(next);
                },
                previous: function () {
                        self._slide(prev);
                },
                slideStart: function () {
                        this._slideTo(0);
                },
                slideEnd: function () {
                        this._slideTo(this[itemsCount] - 1);
                },
                destroy: function (_0xabcbxe) {
                        this._destroy(_0xabcbxe);
                }
        };
        var _0xabcbxc = function (_0xabcbxe) {
                if (_0xabcbxa[console]) {
                        _0xabcbxa[console][error](_0xabcbxe);
                };
        };
        _0xabcbxd[fn][elastislide] = function (_0xabcbx11) {
                var _0xabcbxe = _0xabcbxd[data](this, elastislide);
                if (typeof _0xabcbx11 === string) {
                        var _0xabcbxf = Array[prototype][slice][call](arguments, 1);
                        this[each](function () {
                                if (!_0xabcbxe) {
                                        _0xabcbxc(cannot call methods on elastislide prior to initialization; attempted to call method '+_0xabcbx11+');
                                        return;
                                };
                                if (!_0xabcbxd[isFunction](_0xabcbxe[_0xabcbx11]) || _0xabcbx11[charAt](0) === _) {
                                        _0xabcbxc(no such method '+_0xabcbx11+'
                                                for elastislide self);
                                        return;
                                };
                                _0xabcbxe[_0xabcbx11][apply](_0xabcbxe, _0xabcbxf);
                        });
                } else {
                        this[each](function () {
                                if (_0xabcbxe) {
                                        _0xabcbxe._init();
                                } else {
                                        _0xabcbxe = _0xabcbxd[data](this, elastislide, new _0xabcbxd.Elastislide(_0xabcbx11, this));
                                };
                        });
                };
                return _0xabcbxe;
        };
})(jQuery, window);