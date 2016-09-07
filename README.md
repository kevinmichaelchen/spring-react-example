Forked from [this Spring guide](https://github.com/spring-guides/tut-react-and-spring-data-rest)

...testing...

[Good article on Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.b1j4p3as7)

To get started run:
```bash
pushd .
npm install webpack -g
cd src/main/resources/static
npm install
webpack
popd
./gradlew bootRun
```

### REST API

#### Tour API
```bash
$ curl localhost:8080/api
{
  "_links" : {
    "employees" : {
      "href" : "http://localhost:8080/api/employees"
    },
    "profile" : {
      "href" : "http://localhost:8080/api/profile"
    }
  }
}
```

#### List employees
```bash
$ curl localhost:8080/api/employees
{
  "_embedded" : {
    "employees" : [ {
      "firstName" : "Frodo",
      "lastName" : "Baggins",
      "description" : "ring bearer",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/employees/1"
        }
      }
    } ]
  }
}
```

#### View employee detail
```bash
$ curl localhost:8080/api/employees/1
{
  "firstName" : "Frodo",
  "lastName" : "Baggins",
  "description" : "ring bearer",
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/api/employees/1"
    }
  }
}
```

#### Add employee
```bash
$ curl -X POST localhost:8080/api/employees -d '{"firstName": "Bilbo", "lastName": "Baggins", "description": "burglar"}' -H 'Content-Type:application/json'
{
  "firstName" : "Bilbo",
  "lastName" : "Baggins",
  "description" : "burglar",
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/api/employees/2"
    }
  }
}
```
