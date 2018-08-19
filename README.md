# Ingenious test for candidates

Welcome **candidate**, this is the repository with all the needed material to complete your test.

Please read this page carefully before jumping to the actual test, a lot of doubts you may have are probably answered here.

## About the test

For this test what we need you to do is a **Single Page Application** that consumes a sample backend you can find on this repo under the `backend` folder.

## About the repo

The repo has the following folder structure:

```
.
├── README.md
├── backend
├── frontend
└── instructions
```

The [backend](backend) folder has a RESTful API developed in node that should be consumed by your application in the [frontend](frontend) directory.

The [instructions](instructions) folder has the user stories you need to implement along with some FAQ that may help you.

## How should I deliver the test

You need to deliver this same repo but with your application developed into the [frontend](frontend) folder as well as installation instructions.

The easiest way to do this is to [fork](https://github.com/ingsw-dev/frontend-test#fork-destination-box) this repo and develop the application in your own fork. Once you finish, you can just deliver the fork URL. Alternatively, you can provide a zip folder with the `frontend` folder.

In any case, you should not check in or provide the `node_modules` folder or any other similar folder.

We recommend having a README file on the `frontend` folder; this way reviewers have an easier job installing and running the application.

## Next steps

The next thing you should do is test the [backend app](backend), after this you can [read the user stories](instructions) and start developing the [test](frontend).

* [Test backend](backend)
* [Read user stories](instructions)
* [start developing the app](frontend)
