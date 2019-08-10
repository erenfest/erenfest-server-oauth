namespace ApiGateway {
  export interface Event {
    resource: '/{proxy+}'
    path: '/message'
    httpMethod: 'GET'
    headers: {
      Authorization: 'Bearer null'
    }
    multiValueHeaders: {
      Authorization: ['Bearer null']
    }
    queryStringParameters: {
      username: 'danuel'
    }
    multiValueQueryStringParameters: {
      username: ['danuel']
    }
    pathParameters: {
      proxy: 'message'
    }
    stageVariables: null
    requestContext: {
      resourceId: 'pg3699'
      resourcePath: '/{proxy+}'
      httpMethod: 'GET'
      extendedRequestId: 'd8ujOGOxIE0FpRg='
      requestTime: '05/Aug/2019:13:10:57 +0000'
      path: '/{proxy+}'
      accountId: '343481711443'
      protocol: 'HTTP/1.1'
      stage: 'test-invoke-stage'
      domainPrefix: 'testPrefix'
      requestTimeEpoch: 1565010657503
      requestId: '769aaab8-b782-11e9-9acb-dfb0ce6a09f3'
      identity: {
        cognitoIdentityPoolId: null
        cognitoIdentityId: null
        apiKey: 'test-invoke-api-key'
        principalOrgId: null
        cognitoAuthenticationType: null
        userArn: 'arn:aws:iam::343481711443:root'
        apiKeyId: 'test-invoke-api-key-id'
        userAgent: 'aws-internal/3 aws-sdk-java/1.11.590 Linux/4.9.137-0.1.ac.218.74.329.metal1.x86_64 OpenJDK_64-Bit_Server_VM/25.212-b03 java/1.8.0_212 vendor/Oracle_Corporation'
        accountId: '343481711443'
        caller: '343481711443'
        sourceIp: 'test-invoke-source-ip'
        accessKey: 'ASIAU76I27NJTI3NRBHM'
        cognitoAuthenticationProvider: null
        user: '343481711443'
      }
      domainName: 'testPrefix.testDomainName'
      apiId: '2vtbcd44ek'
    }
    body: null
    isBase64Encoded: false
  }

  export interface Context {
    callbackWaitsForEmptyEventLoop: true
    functionVersion: '$LATEST'
    functionName: 'erenfest-message'
    memoryLimitInMB: '128'
    logGroupName: '/aws/lambda/erenfest-message'
    logStreamName: '2019/08/05/[$LATEST]687106cb1193405485c401e7b0980efb'
    invokedFunctionArn: 'arn:aws:lambda:ap-northeast-2:343481711443:function:erenfest-message'
    awsRequestId: '811e4fae-4bb5-4bea-bc11-cd47c8f554ef'
  }
}
