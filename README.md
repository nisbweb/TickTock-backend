# Tick Tock ⏳ - Backend
This is a simple express app created for answer submissions of [NISB](https://www.nisb.com)'s Tick Tock event. This microservice is responsible for checking if the answer is right and incrementing the score of the participant.

This project was dockerized and the image can be accessed [Here](https://hub.docker.com/r/codekulkarni/ticktock-backend).

This project was also deployed with Managed kubernetes at [CIVO](https://civo.com/). please refer k8s.yml for the configuration of the same.

## Project setup

Installing packages:
```
npm install
```

Running in development:
```
npm run devs
```

Running in production:
```
npm run start
```
or
```
npm start
```

_If you have any doubts, please feel free to contact any of the  NISB's volunteers_