import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class showevent extends HttpServlet
{

public void doPost(HttpServletRequest req,HttpServletResponse res) throws ServletException,IOException
{
res.setContentType("text/html");
PrintWriter out=res.getWriter();
out.println("<html><body>");
try
   {
    Class.forName("com.mysql.jdbc.Driver");
    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3307/database","root","");
	Statement st=con.createStatement();
               ResultSet rs=st.executeQuery("Select * from dbtab");
    out.println("<h1 align='center' style='font-family:Candara'>Available Events</h1>");           
	out.println("<table border=1 align='center'>");
	out.println("<tr><th style='background: linear-gradient(45deg,#43cea2,#185a9d);font-size: 25px;color:white;font-family:Candara'>Teacher name</th><th style='background: linear-gradient(45deg,#43cea2,#185a9d);font-size: 25px;color:white;font-family:Candara'>Event Name</th><th style='background: linear-gradient(45deg,#43cea2,#185a9d);font-size: 25px;color:white;font-family:Candara'>Start Date</th><th style='background: linear-gradient(45deg,#43cea2,#185a9d);font-size: 25px;color:white;font-family:Candara'>End Date</th><th style='background: linear-gradient(45deg,#43cea2,#185a9d);color:white;font-size: 25px;font-family:Candara'>Description</th></tr>");
	while(rs.next()){
		String name = rs.getString("tname");
		String eventname = rs.getString("ename");
		String start = rs.getString("fdname");
		String end = rs.getString("fdname");
        String desc = rs.getString("descr");
		out.println("<tr><td style='font-family:Candara;font-size: 25px;'>"+ name + "</td><td style='font-family:Candara;font-size: 25px;'>"+ eventname + "</td><td style='font-family:Candara;font-size: 25px;'>"+ start + "</td><td style='font-family:Candara;font-size: 25px;'>"+ end + "</td><td style='font-family:Candara;font-size: 25px;'>"+ desc +"</td></tr>");
		
	}
	out.println("</table>");
	out.println("</body></html>");
	
}
  
catch(Exception ex)
{ 
 out.println(ex);
}
} 
}