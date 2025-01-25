from django.apps import AppConfig


class UtilisateursConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'utilisateurs'
    verbose_name = "Gestion des utilisateurs"


class RestaurantsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'restaurants'
    verbose_name = "Gestion des restaurants"


class ClientsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'clients'
    verbose_name = "Gestion des clients"


class NotificationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'notifications'
    verbose_name = "Gestion des notifications"


class CommandesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'commandes'
    verbose_name = "Gestion des commandes"


class MenusConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'menus'
    verbose_name = "Gestion des menus"


class ReservationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'reservations'
    verbose_name = "Gestion des réservations"


class PaiementsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'paiements'
    verbose_name = "Gestion des paiements"


class LivraisonsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'livraisons'
    verbose_name = "Gestion des livraisons"


class EvaluationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'evaluations'
    verbose_name = "Gestion des évaluations"


class TablesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'tables'
    verbose_name = "Gestion des tables"
