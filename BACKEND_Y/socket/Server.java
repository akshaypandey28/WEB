package socket;

import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws IOException{
        int port = 8080;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Server is listening at port " + port);

            while(true){
                Socket socket=serverSocket.accept();
                System.out.println("New client connected ");

                //new ClientHandler(socket).start();
            }

            // Add your server logic here (e.g., accept and handle client connections)
        } catch (IOException ex) {
            System.err.println("Server exception: " + ex.getMessage());
            ex.printStackTrace();
        }
    }
}
