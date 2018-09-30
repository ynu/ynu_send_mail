        $(function () {
            function done(message) {
                console.info(`getting message: ${message}`);
                $('#mailModal').modal('hide');
                $("#mailProgress").css({
                    'display': 'none'
                });
                $("#mailSubmit").removeClass('disabled');
                setTimeout(function () {
                    alert("提交信息成功！");
                }, 100);
            }

            $('#mailModal').on('click', '#mailSubmit', function () {
                var content = $("#mailContent").val();
                var from = "sfjb-client@ynu.edu.cn";
                var to = "sfjb@ynu.edu.cn";
                var subject = "四风举报";
                if (!content.trim()) {
                    alert("提交信息不能为空！");
                    return;
                }
                console.info(`sending mail from ${from} to ${to} with subject ${subject} and content ${content}`);
                $("#mailProgress").css({
                    'display': 'block'
                });
                $("#mailSubmit").addClass('disabled');
                Email.send(
                    from,
                    to,
                    subject,
                    content, {
                        token: "3bd2fd52-08fc-4f33-89e3-7e1ab33ee81e",
                        callback: done
                    }
                );
                // setTimeout(function() {
                //     done();
                // }, 3000);

            });
        });