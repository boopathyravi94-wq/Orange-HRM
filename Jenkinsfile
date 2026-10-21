
pipeline {
    agent any

    environment {
        BASE_URL = 'https://opensource-demo.orangehrmlive.com/'
        USERNAME = 'Admin'
        PASSWORD = 'admin123'
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
                sh 'npx playwright install chromium'
            }
        }

        stage('Run Automation Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            echo 'OrangeHRM automation pipeline completed.'
        }
    }
}
