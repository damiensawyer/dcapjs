# DCAP-JS
Client library for DaD CQRS Application Platform

## To build
``` bash
    npx tsc
```



## Set Up
I configured Wallaby to start automatically (see this)[https://wallabyjs.com/docs/intro/config.html]
I set up Jest and TypeScript with [this](https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421)


Setting up Pipelines [here](https://indepth.dev/posts/1210/how-to-automate-npm-package-publishing-with-azure-devops-2). This is really good, 
however he is getting version numbers from the branch tags you commit with. Not a bad idea I guess. He also allows for releasing pre-release versions. 
He has a gate which requires approval and you either approve a release candidate to 'next' or a production release to 'latest'. It's probably not a bad idea actually

TO DO:::::
 - look at his .yml file and chnage the trigger to watch for a verison on the tag file. 
 - take out the 'next' stuff... actually - don't. It could be useful. Actually yes, take it out. We can just specify specific versions. 

## NPM Deploy
See NPM Tags [here](https://dev.to/andywer/how-to-use-npm-tags-4lla) 

If you have published my-lib version1.0.0 with tag latest and 1.0.1-rc1 with tag next and a user does npm i my-lib they will get 1.0.0 and not 1.0.1-rc1 which is what you want. Whereas npm i my-lib@next or npm i my-lib@1.0.1-rc1 will install that specific version assuming the user knows the risk they take when using a pre-release version.


### Rethink
- Do automatic pushes
     - push to 'prerelease' branch will push an RC to NPM
     - push to master will do a release
     - I don't care about migrating a pre-release version number through to release. I'm more interested in just doing a git push and it ending up in NPM
     - How do we increment version numbers? This looks interesting. https://blog.danskingdom.com/Custom-version-numbers-in-Azure-DevOps-yaml-pipelines/