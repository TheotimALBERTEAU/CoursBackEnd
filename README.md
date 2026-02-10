# 🎮 Cours BackEnd - API Game Manager

Ce projet est une API REST développée avec **Node.js** et **Express**. Il met en pratique une architecture robuste basée sur le **Pattern DAO (Data Access Object)** et une **Factory**, permettant de switcher facilement entre différentes bases de données (SQL avec Sequelize ou NoSQL avec Mongoose).

---

## 🛠️ Technologies utilisées

* **Node.js** & **Express**
* **Mongoose** (MongoDB)
* **Sequelize** (SQL)
* **Dotenv** (Gestion des variables d'environnement)

---

## 🚀 Fonctionnalités

* **Architecture multicouche** : Séparation claire entre les Routes, les Services et l'Accès aux données (DAO).
* **DAO Factory** : Système flexible pour alterner entre Sequelize (MariaDB/MySQL) et Mongoose (MongoDB).
* **Gestion des Jeux** : Création et gestion de titres de jeux vidéo.

---

## 🛠️ Structure du Projet

```text
src/                                # Code Source de l'API
├── dao/                            # Couche d'accès des données (Data Access Object) : isole la logique de persistence
│   ├── mongoose/                   # Implémentation MongoDB
│   │   ├── models/                 # Dossier des modèles de tables Mongoose
│   │   │   └── GameModel.js        # Modèle de la table Game
│   │   ├── connection.js           # Fichier JS de connexion à MySQL
│   │   └── daogame-mongoose.js     # Fichiers des méthodes de MySQL
│   ├── sequelize/                  # Implémentation SQL (MariaDB/MySQL)
│   │   ├── config/                 # Dossier config de MySQL
│   │   │   └── database.js         # Config de la DB MySQL
│   │   ├── models/                 # Dossier des modèles des tables MySQL
│   │   │   ├── GameModel.js        # Modèle Table Game
│   │       └── UserModel.js        # Modèle Table User
│   │   ├── connection.js           # Fichier de Connexion a MongoDB
│   │   └── daogame-sequelize.js    # Fichiers des méthodes MongoDB
│   ├── dao-factory.js              # Sélecteur de base de donnée grâce à la valeur de .env
│   └── idaoGame.js                 # Interface/Contrat de base (fonctions à obligatoirement implantées dans les fichiers dao des DB)
├── routes/                         # Définition des points d'entrée (Endpoints)
├── services/                       # Logique métier (traitement des données)
├── app.js                          # Configuration Express et démarrage
└── logger.js                       # Fichier de création des logs

```

## 📦 Installation

1. **Cloner le projet** :
```bash
git clone https://github.com/TheotimALBERTEAU/CoursBackEnd.git
cd CoursBackEnd

```


2. **Installer les dépendances** :
```bash
npm install

```


3. **Configurer l'environnement** :
   Crée un fichier `.env` à la racine et ajoute tes variables (inspiré de `.env.example`) :
```env
PORT=3000
DB_TYPE=mongoose # ou sequelize
DATABASE_URL=ton_lien_de_connexion

```


4. **Lancer le serveur** :
```bash
npm start

```

---

## 🛣️ API Endpoints

### Jeux (Games)

| Méthode | Endpoint            | Description                                                      |
|---------|---------------------|------------------------------------------------------------------|
| `GET`   | `/game/show-games`  | Affiche l'entièreté de la bibliothèque de jeux                   |
| `POST`  | `/game/create-game` | Crée un nouveau jeu (requiert `{ "title": "Nom" }` dans le body) |

---

## 🆔 Identification Unique (UUID)

Pour garantir la cohérence des données entre **SQL (Sequelize)** et **NoSQL (Mongoose)**, nous utilisons la bibliothèque `uuid`.

Dans une architecture multi-base comme ce projet, utiliser des **UUID (v4)** présente plusieurs avantages :

1. **Indépendance** : On ne dépend pas des auto-incréments spécifiques à MySQL ou des ObjectIDs de MongoDB.
2. **Prévisibilité** : L'ID peut être généré par le service avant même l'insertion en base de données.
3. **Sécurité** : Les IDs ne sont pas séquentiels, ce qui rend l'énumération de ressources plus difficile pour un utilisateur malveillant.

### Installation de la dépendance :

```bash
npm install uuid

```

---

## 📜 Logs & Traçabilité

Le projet utilise **Winston** pour la gestion des logs, centralisée dans le fichier `src/logger.js`. Cela permet de suivre l'activité du serveur en temps réel et de garder une trace des erreurs.

* **Niveaux de logs** : Utilisation des niveaux standards (info, error, warn).
* **Transports** :
* **Console** : Pour un feedback immédiat durant le développement.
* **Fichiers** :
* `logs/app.log` : fichier des logs.


### Exemple d'utilisation dans le code :

```javascript
const {logger} = require("../logger");
module.exports = {

   makeService : (code, message, data) => {
      logger.info(`Code: ${code} | Message: ${message}`);

      return { code: code, message: message, data: data };
   }
}
```

---

## 🛠️ Mise à jour de l'installation

N'oublie pas de vérifier que ton fichier `.env` contient bien les chemins pour tes fichiers de logs si tu les as configurés dynamiquement.

**Variables a mettre dans le .env :**

| Variable       | Valeur                                    |
|----------------|-------------------------------------------|
| DB_MODE        | "mongodb" ou "mysql"                      |
| MONGODB_URI    | "mongodb://IP:port/nom_de_la_db" en local |
| MYSQL_USER     | "nom_d'utilisateur_mysql"                 |
| MYSQL_PASSWORD | "mot_de_passe_mysql"                      |
| MYSQL_URI      | "nom_de_la_db_mysql"                      |
| MYSQL_HOST     | "host_de_la_db" en local : "localhost"    |
| MYSQL_DIALECT  | "dialect_de_la_db" ici : "mysql"          |

