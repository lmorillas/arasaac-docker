# coding: utf-8

import json
from pymongo import MongoClient
from bson.objectid import ObjectId
import os
import logging

from dotenv import load_dotenv


## TODO: importar también LSE_definiciones y LSE_acepciones y fotografías
# Las fotografias están en servidor arasaac, carpeta originales (junto con los pictos)
# Los ids de definiciones corresponden a los de las palabras
# Los ids de los ficheros de acepciones corresponden a la tabla de imagenes con tipo_pictograma 11
# La carpeta originales (lo que no son pictos) igual que el anterior con id_tipo_imagen=12
# Deberíamos tener entidades nuevas para lse y para las fotos.
# Estaría bien tener en nombre de la palabra asociada, no solo id por si se aprovechan...


# útiles

from pathlib import Path  # python3 only
env_path = Path('.') / '.env'
print(open(env_path).read())
load_dotenv(dotenv_path=env_path)

MONGO_DATABASE = os.getenv('MONGO_DATABASE')
HOST_MONGO = os.getenv('HOST_MONGO')

client = MongoClient(host=HOST_MONGO, port=27017)

arasaac_db = client.arasaac

logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.INFO)
logging.info('Actualizando usuarios')

users = arasaac_db.users

for u in users.find():
    users.update_one({'_id': u.get('_id')}, 
                {"$set": {'role': 'user', 'locale': 'es', 'suscription': True}})
