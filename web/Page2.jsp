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
        <form action="Servlet?Page=Page2" id="form" onsubmit="return validatePage2()" method="POST">
            <table id="mainContent">
                <tr>
                    <td>
                        <p id="birthMonthErrorMessage" class="errorText"></p>
                        <span class="questionText">3. What month were you born?</span>
                        <div class="question">
                            <select class="form-control" id="birthMonth">
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="weightErrorMessage" class="errorText"></p>
                        <span class="questionText">4. How much do you weigh?</span>
                        <div class="question">
                            <input type="text" id="weight" class="form-control onlyAllowDecimalNumbers" onblur="padDecimalPointPlaces('weight', 1)" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="birthWeightErrorMessage" class="errorText"></p>
                        <span class="questionText">5. How much did you weigh when you were born?</span>
                        <div class="question">
                            <input type="text" id="birthWeight" class="form-control onlyAllowDecimalNumbers" onblur="padDecimalPointPlaces('birthWeight', 2)" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <button id="submitButton" type="submit" class="btn btn-info">Submit</button>
                    </td>
                </tr>
            </table>
        </form>
    </body>
</html>