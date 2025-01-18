from rest_framework import serializers
from .models import *


class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['id', 'email', 'motPasse', 'date_creation', 'derniere_connexion']


class ClientSerializer(serializers.ModelSerializer):
    utilisateur = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())

    class Meta:
        model = Client
        fields = ['id', 'nom', 'contact', 'date_update', 'utilisateur']


class AdministrateurSerializer(serializers.ModelSerializer):
    utilisateur = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())

    class Meta:
        model = Administrateur
        fields = ['id', 'nom', 'utilisateur']


class TypeRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeRestaurant
        fields = ['id', 'intitule']


class RestaurantSerializer(serializers.ModelSerializer):
    type_restaurant = serializers.PrimaryKeyRelatedField(queryset=TypeRestaurant.objects.all())

    class Meta:
        model = Restaurant
        fields = ['id', 'nom', 'proprietaire', 'contact', 'image', 'total_table', 'type_restaurant']


class ImageRestaurantSerializer(serializers.ModelSerializer):
    restaurant = serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())

    class Meta:
        model = Image_Restaurant
        fields = ['id', 'image', 'restaurant']


class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = ['id', 'code_postal', 'nom']


class DomicileSerializer(serializers.ModelSerializer):
    ville = serializers.PrimaryKeyRelatedField(queryset=Ville.objects.all())

    class Meta:
        model = Domicile
        fields = ['id', 'adresse', 'latitude', 'longitude', 'ville']


class DomicileClientSerializer(serializers.ModelSerializer):
    domicile = serializers.PrimaryKeyRelatedField(queryset=Domicile.objects.all())
    client = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())

    class Meta:
        model = Domicile_Client
        fields = ['id', 'domicile', 'client']


class DomicileRestaurateurSerializer(serializers.ModelSerializer):
    domicile = serializers.PrimaryKeyRelatedField(queryset=Domicile.objects.all())
    restaurateur = serializers.PrimaryKeyRelatedField(queryset=Utilisateur.objects.all())

    class Meta:
        model = DomicileRestaurateur
        fields = ['id', 'domicile', 'restaurateur']


class ImageClientSerializer(serializers.ModelSerializer):
    client = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())

    class Meta:
        model = ImageClient
        fields = ['id', 'image', 'client']


class CommandeSerializer(serializers.ModelSerializer):
    client = serializers.PrimaryKeyRelatedField(queryset=Client.objects.all())

    class Meta:
        model = Commande
        fields = ['id', 'dateCommande', 'prixTotal', 'dateLivraison', 'client']


class DetailCommandeSerializer(serializers.ModelSerializer):
    commande = serializers.PrimaryKeyRelatedField(queryset=Commande.objects.all())

    class Meta:
        model = Detail_commande
        fields = ['quantite', 'commande']


class CategorieMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie_Menu
        fields = ['id', 'intitule', 'description']


class ArticleMenuSerializer(serializers.ModelSerializer):
    categorie = serializers.PrimaryKeyRelatedField(queryset=Categorie_Menu.objects.all())

    class Meta:
        model = Article_Menu
        fields = ['id', 'nom', 'description', 'prix', 'categorie']


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'visible']


class DisponibiliteMenuSerializer(serializers.ModelSerializer):
    article = serializers.PrimaryKeyRelatedField(queryset=Article_Menu.objects.all())

    class Meta:
        model = Disponibilite_Menu
        fields = ['id', 'temps', 'article']


class EvaluationSerializer(serializers.ModelSerializer):
    restaurant = serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())

    class Meta:
        model = Evaluation
        fields = ['id', 'note', 'commentaire', 'date_creation', 'restaurant']


class TableSerializer(serializers.ModelSerializer):
    restaurant = serializers.PrimaryKeyRelatedField(queryset=Restaurant.objects.all())

    class Meta:
        model = Table
        fields = ['id', 'numero', 'capacite', 'restaurant']


class ReservationTableSerializer(serializers.ModelSerializer):
    table = serializers.PrimaryKeyRelatedField(queryset=Table.objects.all())

    class Meta:
        model = Reservation_Table
        fields = ['id', 'dateReservation', 'table']


class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = ['id', 'code', 'reduction', 'dateValideDebut', 'dateValideFin', 'actif']


class PaiementSerializer(serializers.ModelSerializer):
    commande = serializers.PrimaryKeyRelatedField(queryset=Commande.objects.all())

    class Meta:
        model = Paiement
        fields = ['id', 'montant', 'date_paiement', 'commande']


class LivraisonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livraison
        fields = ['id']


class LivreurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livreur
        fields = ['id', 'nom', 'contact', 'disponible']


class TypeVehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type_Vehicle
        fields = ['id', 'vehicule']


class ImageLivreurSerializer(serializers.ModelSerializer):
    livreur = serializers.PrimaryKeyRelatedField(queryset=Livreur.objects.all())

    class Meta:
        model = Image_Livreur
        fields = ['id', 'image', 'livreur']
