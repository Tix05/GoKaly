"""
from django.db import models
from django.contrib.auth.hashers import make_password


class Domicile(models.Model):
    id = models.AutoField(primary_key=True)
    adresse = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    ville = models.ForeignKey('Ville', on_delete=models.SET_NULL, null=True, related_name='domiciles')

    class Meta:
        verbose_name = "Domicile"
        verbose_name_plural = "Domiciles"

class DomicileClient(models.Model):
    client = models.OneToOneField(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Domicile de Client"
        verbose_name_plural = "Domiciles de Clients"

class Ville(models.Model):
    code_postal = models.CharField(max_length=10)
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Ville"
        verbose_name_plural = "Villes"

class DomicileRestaurateur(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Domicile de Restaurateur"
        verbose_name_plural = "Domiciles de Restaurateurs"

class Notification(models.Model):
    message = models.TextField()
    lu = models.BooleanField(default=False)
    date_creation = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Notification"
        verbose_name_plural = "Notifications"

class Commande(models.Model):
    date_commande = models.DateTimeField(auto_now_add=True)
    prix_total = models.FloatField()
    date_livraison = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = "Commande"
        verbose_name_plural = "Commandes"

class DetailCommande(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    quantite = models.IntegerField()

    class Meta:
        verbose_name = "Détail de Commande"
        verbose_name_plural = "Détails de Commandes"


class Evaluation(models.Model):
    note = models.FloatField()
    commentaire = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Évaluation"
        verbose_name_plural = "Évaluations"


class ReservationTable(models.Model):
    date_reservation = models.DateTimeField()
    table = models.ForeignKey(Table, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Réservation de Table"
        verbose_name_plural = "Réservations de Tables"

class StatutReservation(models.Model):
    statut = models.CharField(max_length=255)
    reservation = models.OneToOneField(ReservationTable, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Statut de Réservation"
        verbose_name_plural = "Statuts de Réservation"

class Coupon(models.Model):
    code = models.CharField(max_length=50)
    reduction = models.FloatField()
    date_valide_debut = models.DateTimeField()
    date_valide_fin = models.DateTimeField()
    actif = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Coupon"
        verbose_name_plural = "Coupons"

class Paiement(models.Model):
    montant = models.FloatField()
    date_paiement = models.DateTimeField()

    class Meta:
        verbose_name = "Paiement"
        verbose_name_plural = "Paiements"

class MethodePaiement(models.Model):
    methode = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Méthode de Paiement"
        verbose_name_plural = "Méthodes de Paiement"

class Livraison(models.Model):
    pass

    class Meta:
        verbose_name = "Livraison"
        verbose_name_plural = "Livraisons"

class StatutCommande(models.Model):
    statut = models.CharField(max_length=255)
    commande = models.OneToOneField(Commande, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Statut de Commande"
        verbose_name_plural = "Statuts de Commandes"

class StatutLivraison(models.Model):
    statut = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Statut de Livraison"
        verbose_name_plural = "Statuts de Livraisons"

class DetailLivraison(models.Model):
    date_real_livraison = models.DateTimeField()
    frais = models.FloatField()

    class Meta:
        verbose_name = "Détail de Livraison"
        verbose_name_plural = "Détails de Livraisons"

class TypeVehicule(models.Model):
    vehicule = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Type de Véhicule"
        verbose_name_plural = "Types de Véhicules"
"""
