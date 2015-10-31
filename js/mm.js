$(document).ready(function() {
    var but = ["info", "additional-info", "targeting", "access", "tracking", "caps", "stats"];
    but.map(function(elem) {
        $("#toggle-all-" + elem).click(function() {
            var checkedCount = $(".check-" + elem + ":checked").length;
            var totalCount = $(".check-" + elem).length;
            if (checkedCount < totalCount){
                $(".check-" + elem).prop("checked", true);
            }
            else {
                $(".check-" + elem).prop("checked", false);
            }
        });
    });
});