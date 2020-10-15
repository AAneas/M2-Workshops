Ancienne architecture :
-Un dossier par type de fichier (css, ejs, js)
-Les fichiers json au niveau de la racine

Nouvelle architecture :
-Découpée selon le DDD : infrastructure, UI (User Interface), application, domain
-Application : back-end
-Domain : Value Object, Entity, Aggregate, Repository Interface, Event, Service
-Infrastructure : base de donnée json
-UI : aspect web
