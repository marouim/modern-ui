# modern-ui

## Pipeline

### Pipeline avec validation image ACS

Pour exécuter le pipeline pipeline_acs un secret contenant le endpoint et token d'accès vers ACS doit être créé manuellement. 

Le secret aura la forme suivante: 

```
kind: Secret
apiVersion: v1
metadata:
  name: roxsecrets
data:
  rox_api_token: >-
    <TOKEN ACS, page Integration>
  rox_central_endpoint: >-
    <endpoint vers ACS Central>
type: Opaque
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
