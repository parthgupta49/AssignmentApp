exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    
        <head>
            <meta charset='UTF-8'>
            <title>Password Update Confirmation</title>
            <style>
                body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
                
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
                
                .logo {
                    max-width: 200px;
                    margin-bottom: 20px;
                }
                
                .message {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }

                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
                
                .support {
                    font-size: 14px;
                    color: #999999;
                    margin-top: 20px;
                }
                
                .highlight {
                    font-weight: bold;
                }
                
            </style>
        </head>
        
        <body>
            <div class='container'>
                <a href='#'>
                    <img alt='badakar-logo' height="40" width="140" src='https://www.badakar.com/assets/img/Badakar-Logo-White22.png?h=04655e753af57c3db82f224ad33ac8bb' /> 
                </a>
                <div class='message'>Password Update Confirmation</div>
                <div class='body'>
                    <p>Hey ${name}, </p>
                    <p>
                        Your Password has been successfully updated for the email <span class='highlight'>${email}</span>.
                    </p>
                    <p>
                        If you did not request this password change, please contact us immediately to secure your account.
                    </p>
                </div>
                <div class='support'>
                    If You have any questions or need further assistance, please feel free to reach out to us at 
                    <a href="mailto:nbparthgupta4959@gmail.com">info@assignmentApplication.com</a>
                    . We are here to help!
                </div>
            </div>
        </body>
    
    </html>`;
};