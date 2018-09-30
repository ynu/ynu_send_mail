"""The first step is to create an SMTP object, each object is used for connection 
with one server."""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

msg = MIMEMultipart()
msg['From'] = "sfjb-client@ynu.edu.cn"
msg['To'] = "liudonghua@ynu.edu.cn"
msg['Subject'] = "Python email"
message = "Python test mail"
msg.attach(MIMEText(message, 'plain'))

#Send the mail
try:
    server = smtplib.SMTP('smtp.ynu.edu.cn', 25)
    server.starttls()
    server.login(msg['From'], "sfjb13577017999")
    server.sendmail(msg['From'], msg['To'], msg.as_string())
    print("Successfully sent email")
except smtplib.SMTPException:
    print("Error: unable to send email")
finally:
    server.quit()    