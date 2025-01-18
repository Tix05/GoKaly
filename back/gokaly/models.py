from django.db import models

class Utilisateur(models.Model):
    email = models.EmailField(unique=True)
    mot_passe = models.CharField(max_length=255)
    date_creation = models.DateTimeField(auto_now_add=True)
    derniere_connexion = models.DateTimeField(null=True, blank=True)

class TypeRestaurant(models.Model):
    intitule = models.CharField(max_length=255)

class Restaurant(models.Model):
    nom = models.CharField(max_length=255)
    proprietaire = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    total_table = models.IntegerField()
    type_restaurant = models.ForeignKey(TypeRestaurant, on_delete=models.CASCADE)

class ImageRestaurant(models.Model):
    image = models.ImageField(upload_to="images/restaurants/")
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)

class Administrateur(models.Model):
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)

class Client(models.Model):
    utilisateur = models.OneToOneField(Utilisateur, on_delete=models.CASCADE)
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    date_update = models.DateTimeField(auto_now=True)

class ImageClient(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='clients/')
    client = models.OneToOneField('Client', on_delete=models.CASCADE, related_name='image')

class Domicile(models.Model):
    id = models.AutoField(primary_key=True)
    adresse = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    ville = models.ForeignKey('Ville', on_delete=models.SET_NULL, null=True, related_name='domiciles')

class DomicileClient(models.Model):
    client = models.OneToOneField(Client, on_delete=models.CASCADE)

class Ville(models.Model):
    code_postal = models.CharField(max_length=10)
    nom = models.CharField(max_length=255)

class DomicileRestaurateur(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE)

class Notification(models.Model):
    message = models.TextField()
    lu = models.BooleanField(default=False)
    date_creation = models.DateTimeField(auto_now_add=True)

class Commande(models.Model):
    date_commande = models.DateTimeField(auto_now_add=True)
    prix_total = models.FloatField()
    date_livraison = models.DateTimeField(null=True, blank=True)

class DetailCommande(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE)
    quantite = models.IntegerField()

class CategorieMenu(models.Model):
    intitule = models.CharField(max_length=255)
    description = models.TextField()

class ArticleMenu(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField()
    prix = models.FloatField()
    categorie = models.ForeignKey(CategorieMenu, on_delete=models.CASCADE)

class Menu(models.Model):
    visible = models.BooleanField(default=True)
    articles = models.ManyToManyField(ArticleMenu)

class ImageMenu(models.Model):
    image = models.ImageField(upload_to="images/menus/")
    article = models.OneToOneField(ArticleMenu, on_delete=models.CASCADE)

class DisponibiliteMenu(models.Model):
    temps = models.CharField(max_length=255)
    article = models.OneToOneField(ArticleMenu, on_delete=models.CASCADE)

class Horaire(models.Model):
    heure_debut = models.TimeField()
    jour_ouverture = models.DateField()
    heure_fermeture = models.TimeField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Evaluation(models.Model):
    note = models.FloatField()
    commentaire = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Table(models.Model):
    numero = models.CharField(max_length=10)
    capacite = models.IntegerField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class ReservationTable(models.Model):
    date_reservation = models.DateTimeField()
    table = models.ForeignKey(Table, on_delete=models.CASCADE)

class StatutReservation(models.Model):
    statut = models.CharField(max_length=255)
    reservation = models.OneToOneField(ReservationTable, on_delete=models.CASCADE)

class Coupon(models.Model):
    code = models.CharField(max_length=50)
    reduction = models.FloatField()
    date_valide_debut = models.DateTimeField()
    date_valide_fin = models.DateTimeField()
    actif = models.BooleanField(default=True)

class Paiement(models.Model):
    montant = models.FloatField()
    date_paiement = models.DateTimeField()

class MethodePaiement(models.Model):
    methode = models.CharField(max_length=255)

class Livraison(models.Model):
    pass

class StatutCommande(models.Model):
    statut = models.CharField(max_length=255)
    commande = models.OneToOneField(Commande, on_delete=models.CASCADE)

class StatutLivraison(models.Model):
    statut = models.CharField(max_length=255)

class DetailLivraison(models.Model):
    date_real_livraison = models.DateTimeField()
    frais = models.FloatField()

class Livreur(models.Model):
    nom = models.CharField(max_length=255)
    contact = models.CharField(max_length=20)
    disponible = models.BooleanField(default=True)

class TypeVehicule(models.Model):
    vehicule = models.CharField(max_length=255)

class ImageLivreur(models.Model):
    image = models.ImageField(upload_to="images/livreurs/")
