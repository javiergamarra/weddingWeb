$(function() {
	// retrieve comments to display on page
	$.getJSON("comment.php?jsoncallback=?", function(data) {
		for ( var x = 0; x < data.length; x++) {
			$("<hr>").appendTo("#comments");
		}
	});

	// add click handler for button
	$("#add").click(
			function() {

				// define ajax config object
				var ajaxOpts = {
					type : "post",
					url : "addComment.php",
					data : "&email=" + $("#leaveComment").find("input").val()
							+ "&description="
							+ $("#leaveComment").find("textarea").val(),
					success : function(data) {
						// create a container for the new comment
						var div = $("<div>").addClass("row").appendTo(
								"#comments");
						// add author name and comment to container
						$("<label>").text(
								$("#leaveComment").find("input").val())
								.appendTo(div);
						$("<div>").addClass("comment").text(
								$("#leaveComment").find("textarea").val())
								.appendTo(div);
						// empty inputs
						$("#leaveComment").find("input").val("");
						$("#leaveComment").find("textarea").val("");
					}
				};

				$.ajax(ajaxOpts);

			});
});