# lm-todo-redux
React native with redux, toolkit, testing. Todo training app


1. build project with:

  ```yarn android```

or
  
  ```yarn ios```
  
2. start rn metro:

  ```yarn start```
  
3. start json local server  (need json-server package)

  ```yarn json-server --port 8000 ./db.json --watch```
  
4. start localtunnel to allow rn to communicate with local json server (need localtunnel package)

  ```yarn json-server --port 8000 ./db.json --watch```
  
5. replace baseURL in src/services/Api.ts with new address from localtunnel
