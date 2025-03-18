# dropboxSimplified

The goal of the project is to implement a simplified Dropbox like Product, where users can upload and download files through a Web Application.

## Features

Backend should support following APIs.

1. Upload file.
2. Get list of all files
3. Download file.

Frontend should consume above APIs and provide a user experience.

1. User Home page where all the User files are listed.
2. Can add restrictions on types of files that will be supported for uploads.
3. A button / experience using which User can upload new file.
4. Click on a file to view the file contents in a new page.
5. Can restrict to file size


## Project Overview

### Prerequisites
Ensure the following are installed on your system:

1. Java 17 or higher
```
java -version
```

2. Node.js (v18 or higher)
```
node -v
```

3. MongoDB
```
brew services install mongodb-community
```
or Docker

4. Gradle (for backend build)
```
gradle -v
```

1. Clone the Repository
```
git clone <repository-url>
cd backend
```

2. Start MongoDB

Using Docker:

```
docker run --name mongodb -d -p 27017:27017 mongo
```
Using local setup:
```
brew services restart mongodb-community
```

3. Run the backend
```
gradle bootRun
```

4. Verify the backend is running:
Open a browser or use Postman to test the endpoint:
```
http://localhost:8080/api/files/
```

5. Navigate to the frontend directory:
```
cd frontend
```

6. Install the dependencies:
```
npm install
```

7. Start the development server:
```
npm start
```

8. Open the application in your browser:

```
http://localhost:3000
```

## Sample Image

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/0a7d0a29-69c6-4bfc-91e8-cf683b7f3a6b" />

APIs
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/ecb65343-7646-487a-823d-0b6f4604229a" />
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/f4af6157-1f0d-495a-ab31-0824564bcb28" />

## Developer 
[Abhishek Jaiswal](https://linkedin.com/in/abhishek-iiit)
