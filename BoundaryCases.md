Boundary Test Cases 

Name Length Boundary Test Cases

BC_Name_01 
    Title: Name length less than minimum (4 characters)
    Input: Juli
    Expected Result:
        Registration should fail with validation error (400 Bad Request)

BC_Name_02 
    Title: Name length equal to minimum (5 characters)
    Input: Julee
    Expected Result:
        Registration should succeed

BC_Name_03 
    Title: Name length equal to maximum (24 characters)
    Input: Juleechavlasharmara
    Expected Result:
        Registration should succeed

BC_Name_04
    Title: Name length greater than maximum (25 characters)
    Input: Juleechavlasharmarayuwbjaksd
    Expected Result:
        Registration should fail with validation error


Password Length Boundary Test Cases

BC_Pwd_01 
    Title: Password length less than minimum (11 characters)
    Input: Juli@123456
    Expected Result:
        Password validation error should be displayed
    
BC_Pwd_02
    Title: Password length equal to minimum (12 characters)
    Input: Juli@1234567
    Expected Result:
        Password should be accepted


Email Edge Case Test Scenarios

BC_Email_01 
    Title: Email with uppercase characters
    Input: JULI@MAIL.COM
    Expected Result:
        Email should be converted to lowercase and accepted

BC_Email_02 
    Title: Email with leading and trailing spaces
    Input: " juli@gmail.com   "
    Expected Result:
        Spaces should be trimmed or validation error should be shown

BC_Email_03 
    Title: Email with very long length
    Input: Email exceeding standard length limit (255+ characters)
    Expected Result:
        Registration should fail with validation error

Rate Limiting Boundary Test Cases

BC_Rate_01
    Title: Registration attempts within allowed limit (10 attempts)
    Scenario: Submit registration form 10 times from same IP within 1 hour
    Expected Result:
        Requests should be allowed

BC_Rate_02 
    Title: Registration attempts exceeding allowed limit (11 attempts)
    Scenario: Submit registration form 11th time from same IP within 1 hour
    Expected Result:
        System should block request with 429 Too Many Requests