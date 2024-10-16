pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/johnzama/cameroon-history.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the required npm dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }

        stage('Dockerize') {
            steps {
                // Build the Docker image
                sh 'docker build -t cameroon-history-app .'
            }
        }

        stage('Deploy') {
            steps {
                // Run the Docker container
                sh 'docker run -d -p 3000:80 cameroon-history-app'
            }
        }
    }

    post {
        always {
            // Clean up Docker resources if needed
            sh 'docker container prune -f'
        }
    }
}

