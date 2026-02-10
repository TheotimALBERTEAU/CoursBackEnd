# 🎮 Cours BackEnd - API Game Manager

Ce projet est une API REST développée avec **Node.js** et **Express**. Il met en pratique une architecture robuste basée sur le **Pattern DAO (Data Access Object)** et une **Factory**, permettant de switcher facilement entre différentes bases de données (SQL avec Sequelize ou NoSQL avec Mongoose).

## 🚀 Fonctionnalités

* **Architecture multicouche** : Séparation claire entre les Routes, les Services et l'Accès aux données (DAO).
* **DAO Factory** : Système flexible pour alterner entre Sequelize (MariaDB/MySQL) et Mongoose (MongoDB).
* **Gestion des Jeux** : Création et gestion de titres de jeux vidéo.

## 🛠️ Structure du Projet

```text
src/
├── dao/
│   ├── mongoose/     # Implémentation MongoDB
│   ├── sequelize/    # Implémentation SQL (MariaDB/MySQL)
│   ├── daoFactory.js # Sélecteur de base de données
│   └── idaoGame.js   # Interface/Contrat de base
├── routes/           # Définition des points d'entrée (Endpoints)
├── services/         # Logique métier (traitement des données)
└── app.js            # Configuration Express et démarrage

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



## 🛣️ API Endpoints

### Jeux (Games)

| Méthode | Endpoint            | Description                                                      |
|---------|---------------------|------------------------------------------------------------------|
| `GET`   | `/game/show-games`  | Affiche l'entièreté de la bibliothèque de jeux                   |
| `POST`  | `/game/create-game` | Crée un nouveau jeu (requiert `{ "title": "Nom" }` dans le body) |

---

## 🛠️ Technologies utilisées

* **Node.js** & **Express**
* **Mongoose** (MongoDB)
* **Sequelize** (SQL)
* **Dotenv** (Gestion des variables d'environnement)