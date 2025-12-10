# Express-Postgres-API evaluacion Ken Vega

## Crear la base de datos

Para poder crear la base de datos y sus tablas puedes correr el siguiente comando

```
psql -U <tu_usuario> -f setup/db_setup.sql
```

## Crear el archivo .env

Puedes usar de base el archivo `.env.example` para crear el archivo `.env`.
El archivo `.env` te permitirá cambiar la configuración para la conexión a tu base de datos.

## Instalar dependencias

Puedes instalar las dependencias del proyecto con el comando `npm run install`

## Levantar la aplicación

Puedes levantar el proyecto con el comando `npm run dev`

## Requests de ejemplos en app Insonmia

Puedes probar los requests que se pueden ejecutar en la aplicación con el archivo `setup/Insonmia-requests.yaml`.
Puedes importar ese archivo en la app Insomnia para probar los requests y notar que funcione correctamente la aplicación.
