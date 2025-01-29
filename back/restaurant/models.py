from django.db import models
from account.models import RestoManager, StoreManager

class TypeRestaurant(models.Model):
    intitule = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Type de Restaurant"



class Restaurant(models.Model):
    nom = models.CharField(max_length=255)
    type_restaurant = models.ForeignKey(TypeRestaurant, on_delete=models.CASCADE)
    gerant = models.ForeignKey(RestoManager, on_delete=models.CASCADE)
    contact = models.CharField(max_length=20)
    total_table = models.IntegerField()

    class Meta:
        verbose_name = "Restaurant"


"""
=== STORE ===
Point de vente des restaurants
=============
"""
class Store(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    store_manager = models.OneToOneField(StoreManager, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Point de vente"


class ImageRestaurant(models.Model):
    image = models.ImageField(upload_to="images/restaurants/")
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Image Restaurant"



class Horaire(models.Model):
    heure_debut = models.TimeField()
    heure_fermeture = models.TimeField()
    jour_ouverture = models.DateField()
    jour_fermeture = models.DateField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta: 
        verbose_name = "Horaire"



class Table(models.Model):
    designation = models.CharField(max_length=10)
    capacite = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Table"



class CategorieMenu(models.Model):
    intitule = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name = "Categorie Menu"



class ArticleMenu(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField()
    prix = models.FloatField()

    class Meta:
        verbose_name = "Article Menu"



class Menu(models.Model):
    article = models.ForeignKey(ArticleMenu, on_delete=models.CASCADE)
    categorie = models.ForeignKey(CategorieMenu, on_delete=models.CASCADE)
    isVisible = models.BooleanField(default=True) # Vérifie si le menu est disponible

    class Meta:
        verbose_name = "Menu"



class ImageMenu(models.Model):
    image = models.ImageField(upload_to="images/menus/")
    article = models.ForeignKey(Menu, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Image Menu"