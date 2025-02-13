from django.urls import path
from .views import (
    VilleView, VilleDetailView,
    DomicileClientView, DomicileClientDetailView,
    DomicileStoreView, DomicileStoreDetailView
)

urlpatterns = [
    # Endpoints pour la ville
    path('villes/', VilleView.as_view(), name='ville-list'),
    path('villes/<int:pk>/', VilleDetailView.as_view(), name='ville-detail'),
    
    # Endpoints pour le domicile client
    path('domiciles/clients/', DomicileClientView.as_view(), name='domicile-client-list'),
    path('domiciles/clients/<int:pk>/', DomicileClientDetailView.as_view(), name='domicile-client-detail'),

    # Endpoints pour le domicile de point de vente
    path('domiciles/stores/', DomicileStoreView.as_view(), name='domicile-store-list'),
    path('domiciles/stores/<int:pk>/', DomicileStoreDetailView.as_view(), name='domicile-store-detail'),
]
