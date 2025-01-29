from django.urls import path
from .views import (
    ClientAPIView,
    RestoManagerAPIView,
    StoreManagerAPIView,
    SuperAdminAPIView,
    LivreurAPIView
)


urlpatterns = [
    # Endpoints Clients
    path('clients/', ClientAPIView.as_view(), name='client-list'),
    path('clients/<int:pk>/', ClientAPIView.as_view(), name='client-detail'),

    # Endpoints Gestionnaires de Restaurant
    path('resto-managers/', RestoManagerAPIView.as_view(), name='resto-manager-list'),
    path('resto-managers/<int:pk>/', RestoManagerAPIView.as_view(), name='resto-manager-detail'),

    # Endpoints Gestionnaires de Point de Vente
    path('store-managers/', StoreManagerAPIView.as_view(), name='store-manager-list'),
    path('store-managers/<int:pk>/', StoreManagerAPIView.as_view(), name='store-manager-detail'),

    # Endpoints Super Administrateurs
    path('super-admins/', SuperAdminAPIView.as_view(), name='super-admin-list'),
    path('super-admins/<int:pk>/', SuperAdminAPIView.as_view(), name='super-admin-detail'),

    # Endpoints Livreurs
    path('livreurs/', LivreurAPIView.as_view(), name='livreur-list'),
    path('livreurs/<int:pk>/', LivreurAPIView.as_view(), name='livreur-detail'),
]