from django.contrib import admin
from .models import Ville, Domicile, DomicileClient, DomicileStore

@admin.register(Ville)
class VilleAdmin(admin.ModelAdmin):
    list_display = ('code_postal', 'nom')
    search_fields = ('code_postal', 'nom')
    ordering = ('nom',)

@admin.register(Domicile)
class DomicileAdmin(admin.ModelAdmin):
    list_display = ('id', 'adresse', 'ville', 'latitude', 'longitude')
    list_filter = ('ville',)
    search_fields = ('adresse', 'ville__nom')

@admin.register(DomicileClient)
class DomicileClientAdmin(DomicileAdmin):
    list_display = DomicileAdmin.list_display + ('client',)
    search_fields = DomicileAdmin.search_fields + ('client__nom',)

@admin.register(DomicileStore)
class DomicileStoreAdmin(DomicileAdmin):
    list_display = DomicileAdmin.list_display + ('store',)
    search_fields = DomicileAdmin.search_fields + ('store__restaurant__nom',)
