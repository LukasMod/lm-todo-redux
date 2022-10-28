# lm-todo-redux

React native with redux, toolkit, testing. Todo training app

1. build project with:

`yarn android`

or

`yarn ios`

2. start rn metro:

`yarn start`

3. start json local server (need json-server package)

`yarn json-server --port 8000 ./db.json --watch`

4. start ngrok to allow rn to communicate with local json server (need ngrok package)

`ngrok 8000`

open given new address and click continue there

5. replace baseURL in src/services/Api.ts with new address from localtunnel
