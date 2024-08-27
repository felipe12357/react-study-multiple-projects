## iniciar el projecto:
    npm install => instala dependencias
    npm run dev => corre el proyecto

## Table plus
    para el manejo de la base de datos localmente

## Prisma   
    npm i @prisma/client // install prisma
    npm i -D prisma 
    npx prisma init => crea la carpeta prisma ydentro de ella el schema con la estructura de la BD
                    => crea el archivo .env que contendra la conexion a BD

    npx prisma migrate dev
        crea la migracion, actualizando la base dates segun el schema, se debe ejecutar esto cada vez
        q actualizemos este archivo

    para ejecutar los comandos prisma ubicados en el package.json
    npx prisma db seed

## Render
    para la base de datos remota utilizamos Render q permite crearla sin pago, tiene una duracion de 30 dias

## Docker con Postgrest
    - instalo docker desktop
    - docker pull postgres para descargar la imagen de postgrest
    - docker run --name kiosko_db -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

    --name kiosko_db: Asigna el nombre "kiosko_db" al contenedor.
    -e POSTGRES_PASSWORD=mysecretpassword: Establece la contraseña del usuario postgres.
    -d: Ejecuta el contenedor en segundo plano (modo "detached").
    -p 5432:5432: Mapea el puerto 5432 del contenedor al puerto 5432 de tu máquina local.

    actualizo el archivo .env
    DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/KioskoLocalDb?schema=public"
        postgres = usuario
        password = mysecretpasword
        Bd = kioskoLocalDb

    corro las migraciones para generar todas las tablas
        npx prisma migrate dev

    corro los seed para generar la data:
        npx prisma db seed



