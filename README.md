This is MVP project that uses NextJS and graphene. You can use it as a template for your project.

Before launching project, make sure you have Artifactory access and set it up as was written here: https://graphene.elsevier.com/#/introduction/getting-started/artifactory.

To use graphene you will need to separate server and client side code in the different files.
In current MVP there are two pages: Home and Profile page. In ui folder create tsx/jsx file with the ui that need to be render in the client side and include 'use client' in the top of the file. Then import that file to appropriate router file.
