from django.db import models
from account.models import Client
from restaurant.models import Store

class Ville(models.Model):
    code_postal = models.CharField(max_length=10)
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Ville"



class Domicile(models.Model):
    id = models.AutoField(primary_key=True)
    adresse = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    ville = models.ForeignKey('Ville', on_delete=models.SET_NULL, null=True, related_name='domiciles')

    class Meta:
        verbose_name = "Domicile"



class DomicileClient(Domicile):
    client = models.OneToOneField(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Domicile de Client"



class DomicileStore(Domicile):
    store = models.OneToOneField(Store, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Domicile Restaurateur"
