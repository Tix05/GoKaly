from django.contrib import admin
from .models import *

@admin.register(Utilisateur)
class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_creation', 'derniere_connexion')
    search_fields = ('email',)
    list_per_page = 15

@admin.register(TypeRestaurant)
class TypeRestaurantAdmin(admin.ModelAdmin):
    list_display = ('intitule',)
    search_fields = ('intitule',)
    list_per_page = 15

@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('nom', 'proprietaire', 'contact', 'total_table', 'type_restaurant')
    search_fields = ('nom', 'proprietaire', 'contact')
    list_filter = ('type_restaurant',)
    list_per_page = 15

@admin.register(ImageRestaurant)
class ImageRestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'image')
    search_fields = ('restaurant__nom',)
    list_per_page = 15

@admin.register(Administrateur)
class AdministrateurAdmin(admin.ModelAdmin):
    list_display = ('utilisateur', 'nom')
    search_fields = ('utilisateur__email', 'nom')
    list_per_page = 15

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('utilisateur', 'nom', 'contact', 'date_update')
    search_fields = ('utilisateur__email', 'nom', 'contact')
    list_per_page = 15

@admin.register(ImageClient)
class ImageClientAdmin(admin.ModelAdmin):
    list_display = ('client', 'image')
    search_fields = ('client__nom',)
    list_per_page = 15

@admin.register(Domicile)
class DomicileAdmin(admin.ModelAdmin):
    list_display = ('adresse', 'latitude', 'longitude', 'ville')
    search_fields = ('adresse', 'ville__nom')
    list_per_page = 15

@admin.register(DomicileClient)
class DomicileClientAdmin(admin.ModelAdmin):
    list_display = ('client',)
    search_fields = ('client__nom',)
    list_per_page = 15

@admin.register(Ville)
class VilleAdmin(admin.ModelAdmin):
    list_display = ('code_postal', 'nom')
    search_fields = ('code_postal', 'nom')
    list_per_page = 15

@admin.register(DomicileRestaurateur)
class DomicileRestaurateurAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'latitude', 'longitude')
    search_fields = ('restaurant__nom',)
    list_per_page = 15

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('message', 'lu', 'date_creation')
    search_fields = ('message',)
    list_filter = ('lu',)
    list_per_page = 15

@admin.register(Commande)
class CommandeAdmin(admin.ModelAdmin):
    list_display = ('date_commande', 'prix_total', 'date_livraison')
    search_fields = ('prix_total',)
    list_per_page = 15

@admin.register(DetailCommande)
class DetailCommandeAdmin(admin.ModelAdmin):
    list_display = ('commande', 'quantite')
    search_fields = ('commande__id',)
    list_per_page = 15

@admin.register(CategorieMenu)
class CategorieMenuAdmin(admin.ModelAdmin):
    list_display = ('intitule', 'description')
    search_fields = ('intitule',)
    list_per_page = 15

@admin.register(ArticleMenu)
class ArticleMenuAdmin(admin.ModelAdmin):
    list_display = ('nom', 'description', 'prix', 'categorie')
    search_fields = ('nom', 'categorie__intitule')
    list_filter = ('categorie',)
    list_per_page = 15

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ('visible',)
    search_fields = ('visible',)
    list_per_page = 15

@admin.register(ImageMenu)
class ImageMenuAdmin(admin.ModelAdmin):
    list_display = ('article', 'image')
    search_fields = ('article__nom',)
    list_per_page = 15

@admin.register(DisponibiliteMenu)
class DisponibiliteMenuAdmin(admin.ModelAdmin):
    list_display = ('temps', 'article')
    search_fields = ('article__nom',)
    list_per_page = 15

@admin.register(Horaire)
class HoraireAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'jour_ouverture', 'heure_debut', 'heure_fermeture')
    search_fields = ('restaurant__nom',)
    list_per_page = 15

@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'note', 'date_creation')
    search_fields = ('restaurant__nom',)
    list_per_page = 15

@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ('numero', 'capacite', 'restaurant')
    search_fields = ('restaurant__nom',)
    list_per_page = 15

@admin.register(ReservationTable)
class ReservationTableAdmin(admin.ModelAdmin):
    list_display = ('date_reservation', 'table')
    search_fields = ('table__numero',)
    list_per_page = 15

@admin.register(StatutReservation)
class StatutReservationAdmin(admin.ModelAdmin):
    list_display = ('statut', 'reservation')
    search_fields = ('statut',)
    list_per_page = 15

@admin.register(Coupon)
class CouponAdmin(admin.ModelAdmin):
    list_display = ('code', 'reduction', 'date_valide_debut', 'date_valide_fin', 'actif')
    search_fields = ('code',)
    list_per_page = 15

@admin.register(Paiement)
class PaiementAdmin(admin.ModelAdmin):
    list_display = ('montant', 'date_paiement')
    search_fields = ('montant',)
    list_per_page = 15

@admin.register(MethodePaiement)
class MethodePaiementAdmin(admin.ModelAdmin):
    list_display = ('methode',)
    search_fields = ('methode',)
    list_per_page = 15

@admin.register(Livraison)
class LivraisonAdmin(admin.ModelAdmin):
    list_per_page = 15

@admin.register(StatutCommande)
class StatutCommandeAdmin(admin.ModelAdmin):
    list_display = ('statut', 'commande')
    search_fields = ('statut',)
    list_per_page = 15

@admin.register(StatutLivraison)
class StatutLivraisonAdmin(admin.ModelAdmin):
    list_display = ('statut',)
    search_fields = ('statut',)
    list_per_page = 15

@admin.register(DetailLivraison)
class DetailLivraisonAdmin(admin.ModelAdmin):
    list_display = ('date_real_livraison', 'frais')
    search_fields = ('frais',)
    list_per_page = 15

@admin.register(Livreur)
class LivreurAdmin(admin.ModelAdmin):
    list_display = ('nom', 'contact', 'disponible')
    search_fields = ('nom',)
    list_per_page = 15

@admin.register(TypeVehicule)
class TypeVehiculeAdmin(admin.ModelAdmin):
    list_display = ('vehicule',)
    search_fields = ('vehicule',)
    list_per_page = 15

@admin.register(ImageLivreur)
class ImageLivreurAdmin(admin.ModelAdmin):
    list_display = ('image',)
    list_per_page = 15
