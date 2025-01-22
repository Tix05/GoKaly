from django.db import models
from django.contrib.auth.hashers import make_password

class Utilisateur(models.Model):
    email = models.EmailField(unique=True)
    mot_passe = models.CharField(max_length=255)
    date_creation = models.DateTimeField(auto_now_add=True)
    derniere_connexion = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = "Utilisateur"
        verbose_name_plural = "Utilisateurs"

    def __str__(self):
        return self.nom
    
    def save(self, *args, **kwargs):
        if self.mot_de_passe and not self.mot_de_passe.startswith('pbkdf2_sha256'):
            self.mot_de_passe = make_password(self.mot_de_passe)
        super(Utilisateur, self).save(*args, **kwargs)


class TypeRestaurant(models.Model):
    intitule = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Type de Restaurant"
        verbose_name_plural = "Types de Restaurants"

class Restaurant(models.Model):
    nom = models.CharField(max_length=255)
    proprietaire = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    total_table = models.IntegerField()
    type_restaurant = models.ForeignKey(TypeRestaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Restaurant"
        verbose_name_plural = "Restaurants"

class ImageRestaurant(models.Model):
    image = models.ImageField(upload_to="images/restaurants/")
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Image de Restaurant"
        verbose_name_plural = "Images de Restaurants"

class Administrateur(models.Model):
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Administrateur"
        verbose_name_plural = "Administrateurs"

class Client(models.Model):
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    date_update = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"

class ImageClient(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='clients/')
    client = models.OneToOneField('Client', on_delete=models.CASCADE, related_name='image')

    class Meta:
        verbose_name = "Image de Client"
        verbose_name_plural = "Images de Clients"

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

class CategorieMenu(models.Model):
    intitule = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name = "Catégorie de Menu"
        verbose_name_plural = "Catégories de Menus"

class ArticleMenu(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField()
    prix = models.FloatField()
    categorie = models.ForeignKey(CategorieMenu, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Article de Menu"
        verbose_name_plural = "Articles de Menu"

class Menu(models.Model):
    visible = models.BooleanField(default=True)
    articles = models.ManyToManyField(ArticleMenu)

    class Meta:
        verbose_name = "Menu"
        verbose_name_plural = "Menus"

class ImageMenu(models.Model):
    image = models.ImageField(upload_to="images/menus/")
    article = models.OneToOneField(ArticleMenu, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Image de Menu"
        verbose_name_plural = "Images de Menus"

class DisponibiliteMenu(models.Model):
    temps = models.CharField(max_length=255)
    article = models.OneToOneField(ArticleMenu, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Disponibilité de Menu"
        verbose_name_plural = "Disponibilités de Menus"

class Horaire(models.Model):
    heure_debut = models.TimeField()
    jour_ouverture = models.DateField()
    heure_fermeture = models.TimeField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Horaire"
        verbose_name_plural = "Horaires"

class Evaluation(models.Model):
    note = models.FloatField()
    commentaire = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Évaluation"
        verbose_name_plural = "Évaluations"

class Table(models.Model):
    numero = models.CharField(max_length=10)
    capacite = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Table"
        verbose_name_plural = "Tables"

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

class Livreur(models.Model):
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    disponible = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Livreur"
        verbose_name_plural = "Livreurs"

class TypeVehicule(models.Model):
    vehicule = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Type de Véhicule"
        verbose_name_plural = "Types de Véhicules"

class ImageLivreur(models.Model):
    image = models.ImageField(upload_to="images/livreurs/")

    class Meta:
        verbose_name = "Image de Livreur"
        verbose_name_plural = "Images de Livreurs"
