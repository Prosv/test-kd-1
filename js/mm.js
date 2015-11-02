$(document).ready(function() {
    var but = ["info", "additional-info", "targeting", "access", "tracking", "caps", "stats"];
    but.map(function(elem) {
        $("#toggle-all-" + elem).click(function() {
            var checkedCount = $(".check-" + elem + ":checked").length;
            var totalCount = $(".check-" + elem).length;
            if (checkedCount < totalCount){
                $(".check-" + elem).prop("checked", true);
                changeCSS(("#toggle-all-" + elem),"background-color: #00CC00");
            }
            else {
                $(".check-" + elem).prop("checked", false);
                changeCSS(("#toggle-all-" + elem),"background-color: #fff");
            }
        });
        $(".check-" + elem).change(function () {
            var checkedCount = $(".check-" + elem + ":checked").length;
            var totalCount = $(".check-" + elem).length;
            if (checkedCount == totalCount){
                changeCSS(("#toggle-all-" + elem),"background-color: #00CC00");
            }
            else {
                changeCSS(("#toggle-all-" + elem),"background-color: #fff");
            }
        });
    });
    function changeCSS(className, classValue) {
        var cssMainContainer = $('#css-modifier-container');
        if (cssMainContainer.length == 0) {
            var cssMainContainer = $('<div id="css-modifier-container"></div>');
            cssMainContainer.hide();
            cssMainContainer.appendTo($('body'));
        }

        classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
        if (classContainer.length == 0) {
            classContainer = $('<div data-class="' + className + '"></div>');
            classContainer.appendTo(cssMainContainer);
        }

        classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
    }
});