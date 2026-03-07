# Avviare il progetto
## Prerequisiti
* Python
* pip (in venv o sul vostro dispositivo a vostra discrezione)
* npm/Angular

## Comandi da eseguire per avviare django

Per comodità dell'autore saranno scritti basandosi su terminale PowerShell e utilizzando uv (precedentemente installato)

- **Accedere alla cartella /app**
    ```shell
        cd app
    ```
- **Generare un venv e attivarlo**
  ```shell
      uv venv
      source .venv/Scripts/activate.bat
  ```

- **Installare i requisiti all'interno del venv**
    ```shell
        uv pip install -r requirements.txt
    ```

- **Setup del databae**
    ```shell
        py manage.py migrate
    ```

- **Creare un superuser** (potrebbe non essere strettamente necessario):
    ```shell
        py manage.py createsuperuser
    ```
  
    Seguite dunque le istruzioni in cli


- **Avviare il servizio**
    ```shell
        py manage.py runserver
    ```
## Comandi da eseguire per avviare la parte front-end
Aprite ora un secondo terminale e assicuratevi di essere nella cartella AngularEsercitazione2/web/

- **Installare i pacchetti necessari**
    ```shell
        npm install
    ```
- **Avviare il frontend**
    ```shell
        ng serve -open
    ```
  
