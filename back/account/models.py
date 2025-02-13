from django.db import models
from django.contrib.auth.hashers import make_password

"""
=== UTILISATEUR ===
Seuil de compte pour tous les utilisateurs de la plateforme
=====================
"""
class Utilisateur(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    date_creation = models.DateTimeField(auto_now_add=True)
    last_logged = models.DateTimeField()

    class Meta:
        verbose_name = "Utilisateur"

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_sha256'):
            self.password = make_password(self.password)
        super(Utilisateur, self).save(*args, **kwargs)



class Client(Utilisateur):
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    date_update = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Client"


class ImageClient(models.Model):
    image = models.ImageField(upload_to='images/clients/')
    client = models.OneToOneField('Client', on_delete=models.CASCADE, related_name='image_client')

    class Meta:
        verbose_name = "Image Client"



"""
=== RESTO MANAGER ===
Gérant principal de l'administration du restaurant
=====================
"""
class RestoManager(Utilisateur):
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Administrateur Resto"



class ImageRestoManager(models.Model):
    image = models.ImageField(upload_to='images/resto_manager/')
    restoManager = models.OneToOneField('RestoManager', on_delete=models.CASCADE, related_name='image_resto_manager')

    class Meta:
        verbose_name = "Image Administrateur Resto"



"""
=== STORE MANAGER ===
Gérant de chaque point de vente du restaurant si existant 
(ex: Bucky Manakambahiny, Bucky Ankorahotra, ...)
=====================
"""
class StoreManager(Utilisateur):
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Responsable Point de vente"



class ImageStoreManager(models.Model):
    image = models.ImageField(upload_to='images/store_manager/')
    storeManager = models.OneToOneField('StoreManager', on_delete=models.CASCADE, related_name='image_store_manager')

    class Meta:
        verbose_name = "Image Gérant Point de vente"



"""
=== SUPER ADMIN ===
Administrateur de tous les restaurants présents 
dans la plateforme
=====================
"""
class SuperAdmin(Utilisateur):
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Super administrateur"



class ImageSuperAdmin(models.Model):
    image = models.ImageField(upload_to='images/super_admin/')
    superAdmin = models.OneToOneField('SuperAdmin', on_delete=models.CASCADE, related_name='image_resto_manager')

    class Meta:
        verbose_name = "Image Super Administrateur"



class Livreur(models.Model):
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    isAvailable = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Livreur"



class ImageLivreur(models.Model):
    image = models.ImageField(upload_to='images/livreur/')
    livreur = models.OneToOneField('Livreur', on_delete=models.CASCADE, related_name='image_livreur')

    class Meta:
        verbose_name = "Image Livreur"
