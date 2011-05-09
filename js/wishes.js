$(function() {

	$.getJSON("comments.php?jsoncallback=?", function(data) {
		for ( var x = 0; x < data.length; x++) {
			var div = $("<div>").addClass("row").appendTo("#comments");
			$("<label>").text(data[x].name).appendTo(div);
			$("<div>").addClass("comment").text(data[x].description).appendTo(
					div);
		}
	});

	$("#add").click(
			function() {
				var ajaxOpts = {
					type : "post",
					url : "addComment.php",
					data : "&name=" + $("#leaveComment").find("input").val()
							+ "&description="
							+ $("#leaveComment").find("textarea").val()
							+ "&email="
							+ $("#email").val(),
					success : function(data) {
						var div = $("<div>").addClass("row").appendTo(
								"#comments");
						$("<label>").text(
								$("#leaveComment").find("input").val())
								.appendTo(div);
						$("<div>").addClass("comment").text(
								$("#leaveComment").find("textarea").val())
								.appendTo(div);
						$("#leaveComment").find("input").val("");
						$("#leaveComment").find("textarea").val("");
					}
				};
				$.ajax(ajaxOpts);
			});
});