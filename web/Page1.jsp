<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Generated Survey</title>
        <link type="text/css" rel="stylesheet" href="css/bootstrap.css"/>
        <link type="text/css" rel="stylesheet" href="css/font-awesome.css"/>
        <link type="text/css" rel="stylesheet" href="css/main.css"/>
        <script type="text/javascript" src="js/jquery-1.10.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/static.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
    </head>
    <body>
        <header id="primary">
            <h1>
                Survey Title
            </h1>
        </header>
        <form action="Servlet?Page=Page1" id="form" onsubmit="return validatePage1()" method="POST">
            <table id="mainContent">
                <tr>
                    <td>
                        <p id="nameErrorMessage" class="errorText"></p>
                        <span class="questionText">1. What is your name?</span>
                        <div class="question">
                            <input type="text" id="name" class="form-control" maxlength="10" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="ageErrorMessage" class="errorText"></p>
                        <span class="questionText">2. How old are you?</span>
                        <div class="question">
                            <input type="text" id="age" class="form-control onlyAllowNumbers" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <button id="nextButton" type="submit" class="btn btn-info">Next</button>
                    </td>
                </tr>
            </table>
        </form>
    </body>
</html>