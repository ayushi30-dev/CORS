Run the backend built on Springboot using the command
mvn spring-boot:run

Run the frontend built on React using the below command
npm run dev

Comment out the below Annotation in RestController for replicating CORS error in browser
@CrossOrigin(origins = "http://localhost:5173")

Remove the commented code and restart the backend and frontend will be able to access the backend API without any CORS error.
