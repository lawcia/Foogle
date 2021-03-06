from django.shortcuts import render
from api.models import Favourites
from django.contrib.auth.models import User
from api.serializers import UserSerializer, UserLoginSerializer, FavouritesSerializer
from rest_framework import generics
from rest_framework.response import Response 
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.permissions import AllowAny

class FavouritesList(generics.ListCreateAPIView):
    queryset = Favourites.objects.all()
    serializer_class = FavouritesSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        return Favourites.objects.filter(user=self.request.user)

    def post(self, request, *args, **kwargs):
        data = request.data 
        data['user'] = request.user.id
        print(data)
        serializer = FavouritesSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class FavouritesDelete(generics.DestroyAPIView):
    queryset = Favourites.objects.all()
    serializer_class = FavouritesSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserLogin(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]
    # only for the post method
    def post(self, request, *args, **kwargs):
        data = request.data 
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)