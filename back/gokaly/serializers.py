from rest_framework import serializers
from .models import *

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['email', 'mot_passe', 'date_creation', 'derniere_connexion']

class TypeRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeRestaurant
        fields = ['intitule']

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['nom', 'proprietaire', 'contact', 'total_table', 'type_restaurant']

class ImageRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageRestaurant
        fields = ['image', 'restaurant']

class AdministrateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrateur
        fields = ['utilisateur', 'nom']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['utilisateur', 'nom', 'contact', 'date_update']

class ImageClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageClient
        fields = ['id', 'image', 'client']

class DomicileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domicile
        fields = ['id', 'adresse', 'latitude', 'longitude', 'ville']

class DomicileClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicileClient
        fields = ['client']

class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ville
        fields = ['code_postal', 'nom']

class DomicileRestaurateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomicileRestaurateur
        fields = ['latitude', 'longitude', 'restaurant']

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['message', 'lu', 'date_creation']

class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commande
        fields = ['date_commande', 'prix_total', 'date_livraison']

class DetailCommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailCommande
        fields = ['commande', 'quantite']

class CategorieMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorieMenu
        fields = ['intitule', 'description']

class ArticleMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleMenu
        fields = ['nom', 'description', 'prix', 'categorie']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['visible', 'articles']

class ImageMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageMenu
        fields = ['image', 'article']

class DisponibiliteMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisponibiliteMenu
        fields = ['temps', 'article']

class HoraireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horaire
        fields = ['heure_debut', 'jour_ouverture', 'heure_fermeture', 'restaurant']

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = ['note', 'commentaire', 'date_creation', 'restaurant']

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ['numero', 'capacite', 'restaurant']

class ReservationTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservationTable
        fields = ['date_reservation', 'table']

class StatutReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatutReservation
        fields = ['statut', 'reservation']

class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = ['code', 'reduction', 'date_valide_debut', 'date_valide_fin', 'actif']

class PaiementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paiement
        fields = ['montant', 'date_paiement']

class MethodePaiementSerializer(serializers.ModelSerializer):
    class Meta:
        model = MethodePaiement
        fields = ['methode']

class LivraisonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livraison
        fields = '__all__'

class StatutCommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatutCommande
        fields = ['statut', 'commande']

class StatutLivraisonSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatutLivraison
        fields = ['statut']

class DetailLivraisonSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailLivraison
        fields = ['date_real_livraison', 'frais']

class LivreurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livreur
        fields = ['nom', 'contact', 'disponible']

class TypeVehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeVehicule
        fields = ['vehicule']

class ImageLivreurSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageLivreur
        fields = ['image']
