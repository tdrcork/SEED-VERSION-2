// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const cognitoCredentials = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-1:2891f151-843c-4859-a522-bc686958df2c',
    // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_q6ULODD1y',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '3dqpsm0ka08ito407ja8qff3nk',
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.localhost:4200',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: true
        }
    }
};

export const contact = {
    number: '314-216-1409',
    name: 'Brouk Development'
};
export const miniHeader = {
    public: {
        first: 'login',
        second: 'register'
    }
}
export const header = {
    public: {
        companyName: 'Full Stack Seed',
        slogan: 'deployment in minutes',
        links: {
            first: 'Sign Up',
            second: 'Sign In',
        },
        button: 'View Source'
    }
};

export const home = {
        grabber: 'This is a Seed',
        subGrabber: 'Angular Front End.  Serverless Back End.  Jenkins CICD.',
        cards: [
            {
                title: 'Front End',
                subTitle: 'Single Page Applications',
                description: '',
                list: ['Angular 5', 'Cloudfront and S3 Hosting', 'Material Design', 'Flex Layout', 'Ionic'],
                actionOne: '',
                actionTwo: '',
            },
            {
                title: 'Back End',
                subTitle: 'Microservice Architecture with Serverless Applications',
                description: '',
                list: ['Serverless Framework', 'Amazon Web Services', 'Configured REST api', 'configured DynamoDB table'],
                actionOne: '',
                actionTwo: '',
            },
            {
                title: 'CICD Pipeline',
                subTitle: 'Pre set up workflow',
                description: '',
                list: ['GitHub', 'Jenkins', 'Docker', 'Amazon Web Services'],
                actionOne: '',
                actionTwo: '',
            },
        ]
};

export const footer = {
    name: 'Brouk Development'
}