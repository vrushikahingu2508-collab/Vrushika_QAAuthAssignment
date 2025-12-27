Priority: High (H), Medium (M), Low (L)
=> High: Blocks core user flow, security, or authentication
=> Medium: Validation issues that do not block access
=> Low: UI, cosmetic, or rare edge cases

User Registration Test Cases

TC_Reg_01
    Title: Successful user registration with valid data
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter unique and valid email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@0234798
    Expected Result:
        status code : 201 
        status message : Created
        response message : success message  
    Priority: H

TC_Reg_02
    Title: Registration fails when name is empty
    Preconditions: User should on resgister page
    Steps: 
        Leave name field empty
        Enter unique and valid email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@0234798
    Expected Result:
        status code : 400 
        status message : Bad Request 
    Priority: H

TC_Reg_03
    Title: Registration fails for name  less then 5 characters
    Preconditions: User should on resgister page
    Steps: 
        Enter name(with less then 5 char)
        Enter unique and valid email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli
        email: juliSharma02@gmail.com
        password: Juli@0234798
    Expected Result:
        status code : 400 
        status message : Bad Request 
    Priority: M
 
TC_Reg_04
    Title: Registration fails for name more than 24 characters
    Preconditions: User should on resgister page
    Steps: 
        Enter name(with more then 24 char)
        Enter unique and valid email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juliya Sharamsholiyanadesai
        email: juliSharma02@gmail.com
        password: Juli@0234798
    Expected Result:
        status code : 400 
        status message : Bad Request 
    Priority: M
 

TC_Reg_05
    Title: Registration fails with invalid email format
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter invalid format email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juli@com
        password: Juli@0234798
    Expected Result:
        status code : 400 
        status message : Bad Request 
    Priority: H

TC_Reg_06
    Title: Email is converted to lowercase during registration
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter valid email(Uppercase)
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: JULI@GMAIL.COM
        password: Juli@0234798
    Expected Result:
        Email saved in lowercase
    Priority: M

TC_Reg_07
    Title: Registration fails with duplicate email
    Preconditions: User should on resgister page and Email already exists
    Steps: 
        Enter valid name
        Enter valid email
        Enter valid formate password 
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@0234798
    Expected Result:
        status code : 409 
        status message : Conflict
    Priority: H

TC_Reg_08
    Title: Registration fails with password less than 12 characters
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter valid email
        Enter valid formate password (less than 12 characters)
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@01
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: H

TC_Reg_09
    Title: Registration fails when password does not contain numbers
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter valid email
        Enter valid formate password (not Number)
        Enter same confirm password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: M

TC_Reg_10
    Title: Registration fails when confirm password does not match
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter valid email
        Enter valid formate password 
        Enter different password
        click on register button
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@123467
        confirmPassword: abc123@8900
    Expected Result:
        Password mismatch error
        status code : 400
        status message : Bad Request
    Priority: H

TC_Reg_11
    Title: Registration fails after exceeding rate limit
    Preconditions: User should on resgister page
    Steps: 
        Enter valid name
        Enter valid email
        Enter valid formate password 
        Enter same password
        Submit registration form more than 10 times/hour/IP
    Test Data:
        name: Juli Sharma
        email: juliSharma02@gmail.com
        password: Juli@123467
        confirmPassword: abc123@8900
    Expected Result:
        status code : 429
        status message : Too many requests
    Priority: H

TC_Reg_12
    Title: Backend validation triggers when UI validation is bypassed
    Preconditions: User should on resgister page
    Steps: 
        Submit invalid data via API
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: H

TC_Reg_13
    Title: Concurrent registration with same email
    Steps: 
        Two users submit same email simultaneously
    Expected Result: 
        One success
        one 409 Conflict
    Priority: H


User login test case

TC_Login_01
    Title: Successful login with valid credentials
    Preconditions: User is registered
    Steps: 
        Enter valid email
        Enter valid password
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@123467
    Expected Result:
        JWT token generated, redirect to dashboard
    Priority: H

TC_Login_02
    Title: Login fails with incorrect password
    Preconditions: User is registered
    Steps: 
        Enter invalid email
        Enter invalid password
        click on login button
    Test Data:
        email: juliSharma@gmail.com
        password: Juli@122227
    Expected Result:
        status code : 401
        status message : Unauthorized
    Priority: H

TC_Login_03
    Title: Login fails with unregistered email
    Steps: 
        Enter valid email
        Enter valid password
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@123467
    Expected Result:
        status code : 401
        status message : Unauthorized
    Priority: H

TC_Login_04
    Title: Login fails when email field is empty
    Preconditions: User is registered
    Steps: 
        Leave empty email feild
        Enter valid password
        click on login button
    Test Data:
        password: Juli@123467
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: M

TC_Login_05
    Title: Login fails when password field is empty
    Preconditions: User is registered
    Steps: 
        Enter valid email
        Leave empty password feild
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: M

TC_Login_06
    Title: Login fails with invalid email format
    Preconditions: User is registered
    Steps: 
        Enter invalid format email
        Enter valid password
        click on login button
    Test Data:
        email: juliSharma02&mail0com
        password: Juli@123467
    Expected Result:
        status code : 400
        status message : Bad Request
    Priority: M

TC_Login_07
    Title: JWT token is returned on successful login
    Preconditions: User is registered
    Steps: 
        Enter valid email
        Enter valid password
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@123467
    Expected Result:
        Token present in response
    Priority: H

TC_Login_08
    Title: Multiple invalid login attempts handling
    Preconditions: User is registered
    Steps: 
        Enter valid email
        Enter invalid password
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@1267
    Expected Result:
        Error message shown consistently
    Priority: M

TC_Login_09
    Title: JWT token is not returned on successful login
    Preconditions: User is registered
    Steps: 
        Enter valid email
        Enter valid password
        click on login button
    Test Data:
        email: juliSharma02@gmail.com
        password: Juli@123467
    Expected Result:
        JWT token is not generated
    Priority: H

Dashboard and JWT Authrorization test case

TC_Dash_01
    Title: Access dashboard with valid JWT
    Preconditions: User logged in
    Expected Result: 
        Dashboard loads successfully
    Priority: H

TC_Dash_02
    Title: Access dashboard without JWT
    Preconditions: User logged in
    Steps: 
        Open dashboard URL directly
    Expected Result: 
        Redirect to login page
    Priority: H

TC_Dash_03
    Title: Access dashboard with expired JWT
    Preconditions: User logged in
    Steps: 
        Open dashboard URL directly
    Expected Result: 
        Redirect to login page
    Priority: H

TC_Dash_04
    Title: Logged-in user email displayed on dashboard
    Preconditions: User logged in
    Expected Result: 
        Correct user email shown
    Priority: M

TC_Dash_05
    Title: Logout invalidates JWT session
    Preconditions: User logged in
    Steps: 
        Logout and try accessing dashboard
    Expected Result: 
        Redirect to login
    Priority: H