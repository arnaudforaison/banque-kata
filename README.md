# Kata - Mon compte bancaire

Ce kata est inspiré du [kata bank de Sandro Mancuso](https://github.com/sandromancuso/Bank-kata). Si vous avez des questions / remarques, vous pouvez le faire via les issues.

## A propos de ce repository
Le but de ce repo est de fournir une base de travail, dans ce cas en Javascript, prête pour faire ce kata.

La branche master correspond à la base de ce kata.
Des branches reprennant les diverses étapes / solutions seront créées (WIP)

## But
Le sujet de ce kata est votre compte bancaire. Ne vous inquiétez, on ne vous demandera pas le code de votre carte bleue. Mais nous allons implémenter en TDD, certaines fonctionnalités de base de votre compte bancaire

## Actions possibles
Je devrais pouvoir faire :
- un dépôt
- un retrait
- imprimer un relevé de compte

## Contraintes 

Afin de pratiquer dans la joie et la bonne humeur, il y a quelques contraintes : 
- le kata se fait **OBLIGATOIREMENT en [TDD](http://blog.thiga.fr/glossaire/tdd/)**
- les fonctions de retrait, dépôt et d'impression retournent toujours **void**
- un seul niveau **d'indentation** par fonctions
- on ne peut pas utiliser le mot clé **ELSE**
- un seul **point** par ligne
- pas **d'abbréviation**
- pas de **getters/setters/propriétés**

## Exemple
**Etant donné que** je fais un dépôt de 1 000€ le 10/06/2018  
_Et_ un dépôt de 2 000€ le 13/06/2018  
_Et_ un retrait au distributeur de 500€ le 14/06/2018

**Quand** je demande mon relevé de compte

**Alors** je souhaite avoir un reçu avec
> Date || debit || balance  
> 14/06/2018 || 500 || 2500.00  
> 13/06/2018 || 2000.00 || 3000.00  
> 10/06/2018 || 1000.00 || 1000.00