from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Ville, DomicileClient, DomicileStore
from .serializers import (
    VilleSerializer,
    DomicileClientSerializer, DomicileStoreSerializer
)

class VilleView(APIView):
    def get(self, request):
        villes = Ville.objects.all()
        serializer = VilleSerializer(villes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VilleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VilleDetailView(APIView):
    def get(self, request, pk):
        ville = get_object_or_404(Ville, pk=pk)
        serializer = VilleSerializer(ville)
        return Response(serializer.data)

    def put(self, request, pk):
        ville = get_object_or_404(Ville, pk=pk)
        serializer = VilleSerializer(ville, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        ville = get_object_or_404(Ville, pk=pk)
        ville.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DomicileClientView(APIView):
    def get(self, request):
        domiciles = DomicileClient.objects.all()
        serializer = DomicileClientSerializer(domiciles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DomicileClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(client=request.user.client)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DomicileClientDetailView(APIView):
    def get(self, request, pk):
        domicile = get_object_or_404(DomicileClient, pk=pk)
        serializer = DomicileClientSerializer(domicile)
        return Response(serializer.data)

    def put(self, request, pk):
        domicile = get_object_or_404(DomicileClient, pk=pk)
        serializer = DomicileClientSerializer(domicile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        domicile = get_object_or_404(DomicileClient, pk=pk)
        domicile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DomicileStoreView(APIView):
    def get(self, request):
        domiciles = DomicileStore.objects.all()
        serializer = DomicileStoreSerializer(domiciles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DomicileStoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DomicileStoreDetailView(APIView):
    def get(self, request, pk):
        domicile = get_object_or_404(DomicileStore, pk=pk)
        serializer = DomicileStoreSerializer(domicile)
        return Response(serializer.data)

    def put(self, request, pk):
        domicile = get_object_or_404(DomicileStore, pk=pk)
        serializer = DomicileStoreSerializer(domicile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        domicile = get_object_or_404(DomicileStore, pk=pk)
        domicile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
