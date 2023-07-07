<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# documentation
 $ npx @compodoc/compodoc -p tsconfig.json -s
 ```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Doc fichiers

Lorsque vous générez les fichiers pour une entité, vous obtenez plusieurs fichiers qui sont utilisés pour organiser et structurer votre application. Voici une explication générale de chaque fichier généré :

[{entite}.controller.spec.ts] : Ce fichier contient les tests unitaires pour le contrôleur de l'entité. Les tests unitaires vous permettent de vérifier le bon fonctionnement des fonctionnalités du contrôleur.

[{entite}.controller.ts] : Ce fichier contient la logique du contrôleur de l'entité. Le contrôleur définit les différentes routes (endpoints) qui peuvent être appelées pour interagir avec l'entité et appelle les méthodes correspondantes du service approprié.

[{entite}.module.ts] : Ce fichier définit un module pour l'entité. Les modules sont utilisés pour regrouper des fonctionnalités connexes de votre application. Le module contient les importations nécessaires, les fournisseurs de services et les contrôleurs associés à l'entité.

[{entite}.service.spec.ts] : Ce fichier contient les tests unitaires pour le service de l'entité. Les tests unitaires vous permettent de vérifier le bon fonctionnement des fonctionnalités du service.

[{entite}.service.ts] : Ce fichier contient la logique du service de l'entité. Le service gère la logique métier de l'entité, effectue les opérations de création, lecture, mise à jour et suppression (CRUD) sur les données liées à l'entité.

[create-{entite}.dto.ts] : Ce fichier définit le DTO (Data Transfer Object) utilisé pour créer une nouvelle instance de l'entité. Le DTO spécifie les champs et les types de données attendus lors de la création de l'entité.

[update-{entite}.dto.ts] : Ce fichier définit le DTO utilisé pour mettre à jour une instance existante de l'entité. Le DTO spécifie les champs et les types de données attendus lors de la mise à jour de l'entité.

[{entite}.entity.ts] : Ce fichier définit l'entité qui représente la structure de la table correspondante dans la base de données. Il spécifie les colonnes de la table et leurs types de données, ainsi que les relations avec d'autres entités, le cas échéant.

[app.module.ts] (mise à jour) : Ce fichier est mis à jour pour inclure le module de l'entité dans l'application globale. Il ajoute l'importation et l'enregistrement du module de l'entité dans la liste des modules utilisés par l'application.

Ces fichiers travaillent ensemble pour fournir une structure cohérente à votre application. Le contrôleur reçoit les requêtes HTTP, le service traite la logique métier, l'entité définit la structure des données et les DTO facilitent le transfert des données entre les différentes couches de l'application. Le module regroupe ces éléments connexes pour une gestion plus organisée et modulaire de votre application.


## typeORM

TypeORM prend en charge plusieurs types de relations pour représenter les liens entre les entités dans une base de données relationnelle :

[One-to-One] (un à un) avec @OneToOne : Cette relation indique qu'une instance d'une entité est liée à une seule instance d'une autre entité. Dans ce cas, la clé étrangère est généralement placée dans l'une des entités. L'annotation @OneToOne est utilisée pour définir cette relation dans TypeORM.

[Many-to-One] (plusieurs à un) avec @ManyToOne : Cette relation indique que plusieurs instances d'une entité sont liées à une seule instance d'une autre entité. Par exemple, plusieurs commentaires peuvent être associés à un seul article. La clé étrangère est généralement placée dans l'entité "many". L'annotation @ManyToOne est utilisée pour définir cette relation dans TypeORM.

[One-to-Many] (un à plusieurs) avec @OneToMany : Cette relation est l'inverse de la relation Many-to-One. Elle indique qu'une instance d'une entité est liée à plusieurs instances d'une autre entité. Par exemple, un utilisateur peut avoir plusieurs articles publiés. La clé étrangère est généralement placée dans l'entité "many". L'annotation @OneToMany est utilisée pour définir cette relation dans TypeORM.

[Many-to-Many] (plusieurs à plusieurs) avec @ManyToMany : Cette relation indique que plusieurs instances d'une entité sont liées à plusieurs instances d'une autre entité. Par exemple, plusieurs étudiants peuvent être inscrits à plusieurs cours. Dans ce cas, une table de jointure est généralement utilisée pour relier les deux entités. L'annotation @ManyToMany est utilisée pour définir cette relation dans TypeORM.