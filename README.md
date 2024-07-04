# Boutique de Jeux Vidéo / Consoles
<!-- Links -->
[Live](https://gamingshop.coding974.com/)
[Vercel](https://nextjs-gamingshop.vercel.app/)

Ce projet est une boutique en ligne de jeux vidéo et consoles, développée avec Next.js 14, Prisma, MongoDB et Stripe pour les paiements, et utilisant la librairie "shadcn/ui" pour l'interface utilisateur.

## Technologies Utilisées
- Next.js 14 : Framework React pour le rendu côté serveur
- Prisma : ORM pour la gestion de la base de données
- MongoDB : Base de données NoSQL pour le stockage des données
- Stripe : Plateforme de paiement pour les transactions en ligne
- shadcn/ui : Librairie pour l'interface utilisateur

## Fonctionnalités
- Affichage et achat de jeux vidéo et consoles
- Intégration de Stripe pour les paiements sécurisés
- Utilisation de la librairie "shadcn/ui" pour une interface utilisateur moderne et personnalisée

## Comment Démarrer
1. Cloner le dépôt
2. Installer les dépendances avec `npm install`
3. Configurer les clés d'API pour MongoDB et Stripe
4. Exécuter les migrations Prisma avec `npx prisma migrate dev`
5. Générer les artefacts Prisma avec `npx prisma generate`
6. Lancer l'application avec `npm run dev`

## Variables d'Environnement Requises
Assurez-vous de définir les variables d'environnement suivantes dans un fichier `.env` à la racine du projet :

- `DATABASE_URL`: URL de la base de données MongoDB
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Clé publique Stripe pour les paiements
- `STRIPE_SECRET_KEY`: Clé secrète Stripe pour les paiements
- `NEXT_PUBLIC_URL`: URL publique de l'application

## Auteur
Ce projet a été développé par Etienne.

N'hésitez pas à contribuer ou à poser des questions !