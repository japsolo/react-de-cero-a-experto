# 🤘🏼 Curso React, de cero a experto 🤘🏼

El presente repositorio tiene como objetivo ir recopilando los archivos vistos en cada una de las clases.

Cada clase está separada en su respectiva `branch`.

Para que puedas usar estos archivos, sigue estos pasos:

1. **Clona este repositorio:**

En tu terminal, y una vez te hayas ubicado en la carpeta deseada, ejecuta:

```
git clone https://github.com/japsolo/react-de-cero-a-experto
```

2. **Ingresa a la carpeta:** 

Después de clonar el repositorio, deberás ingresar a la carpeta así:

```
cd react-de-cero-a-experto
```

3. **Crea la branch de la clase:**

Cómo cada clase tiene su respectiva `branch`, deberás crear la branch respectiva (ten presente que esto lo deberás hacer **SIEMPRE** ubicado en la rama `master`) así:

```
git checkout -b clase-02
```

> *Toma precaución de reemplazar el `02` por el número de clase que quieras.*


4. **Baja los archivos de la `branch`:**

Con la rama localmente en tu computadora, ahora tan solo quedará descargar los archivos del repositorio así:

```
git pull origin clase-02
```

> *De nuevo, ten precaución de reemplazar el `02` por el número de clase que quieras.*

5. **Instala las dependencias:**

Ahora que ya tienes los archivos, tan solo deberás instalar las dependencias necesarias así:

```
npm install
```

O también podrás usar:

```
yarn install
```

6. **Levanta tu aplicación:**

Si hasta aquí todo salío sin problemas, ahora tan solo quedará ejecutar:

```
npm start 
```

O también:

```
yarn start
```

Y listo, podrás acceder al navegador a [http://localhost:3000](http://localhost:3000).

---

## ⚠️ **WARNING** ⚠️

Si llegas a modificar algo de estos archivos. Antes de llevar a cabo del paso 3 en adelante, ten presente de ejecutar:

1. `git add .`
2. `git commit -m "local changes"`

**Proudly made by:** ¡[The Fullstack Devs](https://instagram.com/thefullstackdevs)!