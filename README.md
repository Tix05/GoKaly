# GoKaly - Plateforme de Référencement de Restaurants

## Description
**GoKaly** est un site de référencement de restaurants visant à favoriser l'interaction entre les utilisateurs et les restaurants grâce à des contenus conviviaux et des informations authentiques.

Les utilisateurs peuvent découvrir les restaurants disponibles dans leurs régions, consulter des avis fiables et commander leurs menus directement à partir de la plateforme et se faire livrer.
Quant aux restaurants associés, ils peuvent gérer facilement les commandes et livraisons reçues à partir d'une interface d'administration personnalisable.

## Fonctionnalités
- **Visualisation de tous les restaurants** : Possibilité de visualiser tous les restaurants disponibles sur la plateforme, afin de choisir un restaurant pour consulter ses menus ou passer une commande.
- **Gestion des utilisateurs** : Enregistrement et authentification des utilisateurs (clients et administrateurs), ainsi qu'avec leur éventuel mise à jour.
- **Contenus interactifs** : Partage de photos, vidéos et articles sur les restaurants.
- **Gestion des menus** : Création et gestion des menus par les restaurateurs, ainsi qu'ajout et modification des articles du menu (nom, description, prix, image).
- **Gestion des commandes** : Création de commandes par les clients ave le système d'ajout au panier, et suivi des commandes pour les restaurateurs.
- **Réservation de tables** : Réservation de tables par les clients avec date et heure.
- **Système d'évaluation** : Les clients peuvent noter les restaurants et laisser des commentaires.
- **Coupon et promotion** : Ajout de coupons pour les réductions (code promo, validité).
- **Système de notification** : Notifications en temps réel pour les clients sur le statut des commandes et réservations.
- **Analyse et tableau de bord** : Tableau de bord pour les restaurateurs (ventes, commandes, réservations).


## Technologies Utilisées
- **Frontend** : React.js, TailwindCSS
- **Backend** : Django
- **Base de données** : PostGreSQL
- **Authentification** : JWT (JSON Web Token)
- **Autres** : REST API, Leaflet API

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Tix05/GoKaly.git
   cd GoKaly
   ```

2. **Installer les dépendances côté Front-End**

Naviguez dans le dossier Front : 
   ```bash
   cd front
   ```
Executez la commande : 
   ```bash
   npm install
   ```
3. **Installer les dépendances côté Back-End**
   
Naviguez dans le dossier back : 
   ```bash
   cd back
   ```
**NB: La création d'environnement virtuel serait le plus souhaité**

Executez la commande : 
   ```bash
   pip install -r requirements.txt
   ```
4. **Configuration PostGreSQL**
- Se connecter avec vos identifiants Postgresql (username & password)
- Créez une base de données appelé **Gokaly** avec la commande:

  ```bash
   CREATE DATABASE GoKaly
   ```
- Attribuez une privilège pour cette base de données si nécessaire.

5. **Configuration de la variable d'environnement**
   
Créer un fichier `.env` à la racine du dossier **back** et ajouter les informations suivantes :
   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/database
   ```
- username: Votre nom d'utilisateur Postgresql
- password: Votre mot de passe
- database: Le nom de la base de données que vous avez créée

6. **Configuration Back-End**
   
- Toujours dans le dossier **back**, Exécutez les commandes suivantes:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
- Créer un super utilisateur`pour accéder à l'administration Django avec la commande:
  ```bash
   python manage.py createsuperuser
   ```
  
4. **Démarrer le projet**

- Naviguez dans le dossier **front** et exécutez la commande:
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`

- Naviguez dans le dossier **back** et exécutez la commande:
   ```bash
   python manage.py runserver
   ```

## Contribution
Les contributions sont les bienvenues !
1. Forkez le projet
2. Créez une branche (`git checkout -b nom-branche`)
3. Faites vos modifications et committez (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez votre branche (`git push origin nom-branche`)
5. Créez une Pull Request

---

N'hésitez pas à proposer des suggestions et améliorations pour rendre **GoKaly** encore plus performant ! 🚀

