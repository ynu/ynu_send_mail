        $(function () {
            function done(message) {
                console.info(`message: ${message}`);
                $('#mailModal').modal('hide');
                //  $("#mailProgress").hide();
                $("#mailProgress").css({
                    'display': 'none'
                });
                $('.alert').css({
                    'display': 'block'
                });
                setTimeout(function() {
                    $('.alert').css({
                        'display': 'none'
                    });
                }, 3000);
            }

            $('#mailModal').on('click', '#mailSubmit', function () {
                var content = $("#mailContent").val();
                var from = "sfjb-client@ynu.edu.cn";
                var to = "sfjb@ynu.edu.cn";
                var subject = "四风举报";
                console.info(`sending mail from ${from} to ${to} with subject {subject} and content ${content}`);
                // $("#mailProgress").show();
                $("#mailProgress").css({
                    'display': 'block'
                });
                Email.send(
                    from,
                    to,
                    subject,
                    content, {
                        token: "3bd2fd52-08fc-4f33-89e3-7e1ab33ee81e",
                        callback: done
                    }
                );
            });
        });