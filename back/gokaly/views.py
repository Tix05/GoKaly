from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *

class UtilisateurViewSet(ModelViewSet):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class TypeRestaurantViewSet(ModelViewSet):
    queryset = TypeRestaurant.objects.all()
    serializer_class = TypeRestaurantSerializer

class RestaurantViewSet(ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class ImageRestaurantViewSet(ModelViewSet):
    queryset = ImageRestaurant.objects.all()
    serializer_class = ImageRestaurantSerializer

class AdministrateurViewSet(ModelViewSet):
    queryset = Administrateur.objects.all()
    serializer_class = AdministrateurSerializer

class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ImageClientViewSet(ModelViewSet):
    queryset = ImageClient.objects.all()
    serializer_class = ImageClientSerializer

class DomicileViewSet(ModelViewSet):
    queryset = Domicile.objects.all()
    serializer_class = DomicileSerializer

class DomicileClientViewSet(ModelViewSet):
    queryset = DomicileClient.objects.all()
    serializer_class = DomicileClientSerializer

class VilleViewSet(ModelViewSet):
    queryset = Ville.objects.all()
    serializer_class = VilleSerializer

class DomicileRestaurateurViewSet(ModelViewSet):
    queryset = DomicileRestaurateur.objects.all()
    serializer_class = DomicileRestaurateurSerializer

class NotificationViewSet(ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class CommandeViewSet(ModelViewSet):
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer

class DetailCommandeViewSet(ModelViewSet):
    queryset = DetailCommande.objects.all()
    serializer_class = DetailCommandeSerializer

class CategorieMenuViewSet(ModelViewSet):
    queryset = CategorieMenu.objects.all()
    serializer_class = CategorieMenuSerializer

class ArticleMenuViewSet(ModelViewSet):
    queryset = ArticleMenu.objects.all()
    serializer_class = ArticleMenuSerializer

class MenuViewSet(ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class ImageMenuViewSet(ModelViewSet):
    queryset = ImageMenu.objects.all()
    serializer_class = ImageMenuSerializer

class DisponibiliteMenuViewSet(ModelViewSet):
    queryset = DisponibiliteMenu.objects.all()
    serializer_class = DisponibiliteMenuSerializer

class HoraireViewSet(ModelViewSet):
    queryset = Horaire.objects.all()
    serializer_class = HoraireSerializer

class EvaluationViewSet(ModelViewSet):
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer

class TableViewSet(ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

class ReservationTableViewSet(ModelViewSet):
    queryset = ReservationTable.objects.all()
    serializer_class = ReservationTableSerializer

class StatutReservationViewSet(ModelViewSet):
    queryset = StatutReservation.objects.all()
    serializer_class = StatutReservationSerializer

class CouponViewSet(ModelViewSet):
    queryset = Coupon.objects.all()
    serializer_class = CouponSerializer

class PaiementViewSet(ModelViewSet):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer

class MethodePaiementViewSet(ModelViewSet):
    queryset = MethodePaiement.objects.all()
    serializer_class = MethodePaiementSerializer

class LivraisonViewSet(ModelViewSet):
    queryset = Livraison.objects.all()
    serializer_class = LivraisonSerializer

class StatutCommandeViewSet(ModelViewSet):
    queryset = StatutCommande.objects.all()
    serializer_class = StatutCommandeSerializer

class StatutLivraisonViewSet(ModelViewSet):
    queryset = StatutLivraison.objects.all()
    serializer_class = StatutLivraisonSerializer

class DetailLivraisonViewSet(ModelViewSet):
    queryset = DetailLivraison.objects.all()
    serializer_class = DetailLivraisonSerializer

class LivreurViewSet(ModelViewSet):
    queryset = Livreur.objects.all()
    serializer_class = LivreurSerializer

class TypeVehiculeViewSet(ModelViewSet):
    queryset = TypeVehicule.objects.all()
    serializer_class = TypeVehiculeSerializer

class ImageLivreurViewSet(ModelViewSet):
    queryset = ImageLivreur.objects.all()
    serializer_class = ImageLivreurSerializer
