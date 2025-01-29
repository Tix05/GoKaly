from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.shortcuts import get_object_or_404
from .models import (
    Client, RestoManager, StoreManager,
    SuperAdmin, Livreur
)
from .serializers import (
    ClientSerializer, RestoManagerSerializer,
    StoreManagerSerializer, SuperAdminSerializer,
    LivreurSerializer
)


class ClientAPIView(APIView):
    def get(self, request, pk=None):
        if pk:
            client = get_object_or_404(Client, pk=pk)
            serializer = ClientSerializer(client)
            return Response(serializer.data)
        
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        client = get_object_or_404(Client, pk=pk)
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        client = get_object_or_404(Client, pk=pk)
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class RestoManagerAPIView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request, pk=None):
        if pk:
            manager = get_object_or_404(RestoManager, pk=pk)
            serializer = RestoManagerSerializer(manager)
            return Response(serializer.data)
        
        managers = RestoManager.objects.all()
        serializer = RestoManagerSerializer(managers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RestoManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        manager = get_object_or_404(RestoManager, pk=pk)
        serializer = RestoManagerSerializer(manager, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        manager = get_object_or_404(RestoManager, pk=pk)
        manager.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class StoreManagerAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk:
            manager = get_object_or_404(StoreManager, pk=pk)
            serializer = StoreManagerSerializer(manager)
            return Response(serializer.data)
        
        managers = StoreManager.objects.all()
        serializer = StoreManagerSerializer(managers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StoreManagerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        manager = get_object_or_404(StoreManager, pk=pk)
        serializer = StoreManagerSerializer(manager, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        manager = get_object_or_404(StoreManager, pk=pk)
        manager.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class SuperAdminAPIView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request, pk=None):
        if pk:
            admin = get_object_or_404(SuperAdmin, pk=pk)
            serializer = SuperAdminSerializer(admin)
            return Response(serializer.data)
        
        admins = SuperAdmin.objects.all()
        serializer = SuperAdminSerializer(admins, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SuperAdminSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        admin = get_object_or_404(SuperAdmin, pk=pk)
        serializer = SuperAdminSerializer(admin, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        admin = get_object_or_404(SuperAdmin, pk=pk)
        admin.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class LivreurAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        if pk:
            livreur = get_object_or_404(Livreur, pk=pk)
            serializer = LivreurSerializer(livreur)
            return Response(serializer.data)
        
        available_only = request.query_params.get('available', False)
        if available_only:
            livreurs = Livreur.objects.filter(isAvailable=True)
        else:
            livreurs = Livreur.objects.all()
            
        serializer = LivreurSerializer(livreurs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LivreurSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        livreur = get_object_or_404(Livreur, pk=pk)
        serializer = LivreurSerializer(livreur, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        livreur = get_object_or_404(Livreur, pk=pk)
        livreur.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk):
        # Méthode spéciale pour mettre à jour uniquement la disponibilité
        livreur = get_object_or_404(Livreur, pk=pk)
        if 'isAvailable' in request.data:
            livreur.isAvailable = request.data['isAvailable']
            livreur.save()
            serializer = LivreurSerializer(livreur)
            return Response(serializer.data)
        return Response(
            {"error": "isAvailable field is required"},
            status=status.HTTP_400_BAD_REQUEST
        )