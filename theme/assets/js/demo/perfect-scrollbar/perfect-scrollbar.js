/*!
 =========================================================
 * Bamburgh HTML5 UI Kit with Bootstrap Free v1.0.0
 =========================================================
 * Bamburgh is a FREE Bootstrap 4 UI Kit that is perfect for building highly customised presentation websites and application dashboards.
 * Product page: https://uifort.com/template/bamburgh-html5-ui-kit-bootstrap-free
 * Copyright 2019 UiFort.com
 * MIT License
 * https://github.com/uifort/bamburgh-html5-ui-kit-bootstrap-free/blob/master/LICENSE.md
 =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
 */

$((function () {
    if ($(".scrollbar-container")[0]) {

        $('.scrollbar-container').each((function () {
            const ps = new PerfectScrollbar($(this)[0], {
                wheelSpeed: 2,
                wheelPropagation: false,
                minScrollbarLength: 20
            });
        }));
    }
}));
