package Controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class Servlet extends HttpServlet {

    HttpSession session;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("in the servlet");
        session = request.getSession(true);
        String sRequest = request.getParameter("requestType");
        JSONObject o;
        if (sRequest == null) {
            sRequest = "";
        }
        if (session.getAttribute("sColumns") == null) {
            session.setAttribute("sColumns", "");
        }
        if (session.getAttribute("sValues") == null) {
            session.setAttribute("sValues", "");
        }
        try {
            if (sRequest.equals("submit")) {
                handleColumns(request);
                //Insert record into db
                Class.forName("com.mysql.jdbc.Driver");
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
                Statement st = con.createStatement();
                String sColumns = session.getAttribute("sColumns").toString();
                String sValues = session.getAttribute("sValues").toString();
                sColumns = sColumns.substring(0, sColumns.length() - 2);
                sValues = sValues.substring(0, sValues.length() - 2);
                String sql = "INSERT INTO `mydb`.`" + request.getParameter("appName").toString().trim() + "` (" + sColumns + ") VALUES (" + sValues + ");";
                System.out.println(sql);
                st.execute(sql);
                session.invalidate();
                o = new JSONObject();
                o.put("redirect", "Page1.jsp");
                response.setContentType("application/json");
                response.getWriter().write(o.toJSONString());
            } else if (sRequest.equals("nextPage")) {
                handleColumns(request);
                int iNextPageNumber = 2;
                if (session.getAttribute("nextPageNumber") != null) {
                    iNextPageNumber = Integer.parseInt(session.getAttribute("nextPageNumber").toString());
                }
                session.setAttribute("nextPageNumber", iNextPageNumber + 1);
                o = new JSONObject();
                o.put("redirect", "Page" + iNextPageNumber + ".jsp");
                response.setContentType("application/json");
                response.getWriter().write(o.toJSONString());
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private void handleColumns(HttpServletRequest request) throws Exception {
        JSONParser p = new JSONParser();
        JSONObject o = (JSONObject) p.parse(request.getParameter("columnsJSON").toString());
        String sColumns = "";
        String sValues = "";
        for (Object oKey : o.keySet()) {
            String sKey = oKey.toString();
            sColumns += "`" + sKey + "`, ";
            sValues += o.get(sKey).toString() + ", ";
        }
        session.setAttribute("sColumns", session.getAttribute("sColumns") + sColumns);
        session.setAttribute("sValues", session.getAttribute("sValues") + sValues);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}